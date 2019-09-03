import React, {useEffect, useState, useRef} from 'react';
import * as d3 from 'd3';

// 引入图片
import pic from './arcPic.png';

/**
 * 仪表盘组件
 * @param props={
 *    width 宽
 *    height 高
 *    datas 占比值
 *    colors 仪表盘颜色设置
 *    titleFormatter 标题自定义文字换行数量，传参类型为 [number]
 * }
 * */


export default (props) => {
  const [params, setParams] = useState({});

  const dashBoardRef = useRef(null);
  const w = props.width || 300;
  const h = props.height || 300;
  const datas = props.datas;
  const colors = props.colors || ['#cc2d0c', '#04aec6', '#00bd23'];
  const titleFormatter = props.titleFormatter || [6];

  function init() {
    const ele = dashBoardRef.current;
    // 大半径
    const R = 68;

    // 内外半径间距
    const Rr = 4;

    const PI = Math.PI;

    // 开始绘制仪表盘
    let svg = d3.select(ele)
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    let group = svg.append('g')
      .attr('transform', `translate(${w / 2},${h / 2})`);

    // 创建defs
    let defs = group.append('defs');

    // 添加放射性变换，生成空心填充颜色
    let warnBg = defs.append("radialGradient")
      .attr("id", "bg")
      .attr('cx', 0.5)
      .attr('cy', 0.5)
      .attr('r', 0.5);
    // 添加颜色
    warnBg.append('stop')
      .attr('offset', 0.2)
      .attr('style', 'stop-color:rgba(255,255,255,1)');

    warnBg.append('stop')
      .attr('offset', 0.4)
      .attr('style', 'stop-color:rgba(243,255,59,1)');

    warnBg.append('stop')
      .attr('offset', 1)
      .attr('style', 'stop-color:rgba(255,255,255,0.1)');

    // 添加背景图片
    group.append('image')
      .attr('width', 130)
      .attr('height', 110)
      .attr('href', pic)
      .attr('x', -66)
      .attr('y', -70);

    let innerR = R - Rr; // 内半径
    let outerR = R;   // 外半径

    let startAngle = -(PI / 2 + PI / 6); // 开始角度
    let endAngle = PI / 2 + PI / 6; // 结束角度

    let perAngle = (endAngle - startAngle) / 10;


    let dataList = [];

    for (let i = 0; i < 11; i++) {
      dataList.push({
        mark: i,
        startAngle: startAngle + i * perAngle,
        endAngle: startAngle + i * perAngle + perAngle
      })
    }

    // 绘制角度 -120 ~ 120
    let arcPath = d3.arc()
      .innerRadius(innerR)
      .outerRadius(outerR);

    // 添加路径
    const g = group.selectAll('g')
      .data(dataList)
      .enter()
      .append('g')
      .attr('class', function (d, i) {
        return 'g' + i;
      });

    g.append('path')
      .attr('d', function (d) {
        if (d.mark === 10) return;
        return arcPath(d)
      })
      .attr('fill', function (d, i) {
        if (i < 2) {
          return colors[0];
        } else if (i >= 2 && i < 8) {
          return colors[1];
        } else {
          return colors[2];
        }
      });

    // 添加刻度值
    g.append('text')
      .attr('transform', function (d) {
        let x = Math.sin(d.startAngle) * (innerR - 30);
        let y = -Math.cos(d.startAngle) * (innerR - 30);

        // 存储刻度线坐标
        d.x1 = Math.sin(d.startAngle) * (innerR - 20);
        d.y1 = -Math.cos(d.startAngle) * (innerR - 20);

        d.x2 = Math.sin(d.startAngle) * (innerR - 10);
        d.y2 = -Math.cos(d.startAngle) * (innerR - 10);


        return `translate(${x},${y})`;
      })
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', '#70cdfd')
      .attr('font-size', '8px')
      .text(function (d, i) {
        return i * 10;
      });

    // 添加刻度

    g.append('line')
      .attr('x1', function (d) {
        return d.x1;
      })
      .attr('y1', function (d) {
        return d.y1;
      })
      .attr('x2', function (d) {
        return d.x2;
      })
      .attr('y2', function (d) {
        return d.y2;
      })
      .attr('stroke', '#609d54')
      .attr('stroke-width', 2);

    setParams({startAngle, perAngle, group, outerR});
  }


  function draw() {

    if (!datas) return;

    const name = datas.name;
    const value = datas.value;

    const startAngle = params.startAngle;
    const perAngle = params.perAngle;
    const outerR = params.outerR;
    const group = params.group;

    const change_g = group.append('g')
      .attr('class', 'change_g');
    // 添加指向点

    let angle = startAngle + perAngle * (value / 10); // 获取当前指数所占角度
    let pointR = 8;

    change_g.append('circle')
      .attr('r', pointR)
      .attr('cx', function () {
        let cx = Math.sin(angle) * outerR;
        return cx;
      })
      .attr('cy', function () {
        let cy = -Math.cos(angle) * outerR;
        return cy;
      })
      .style('fill', 'url(#bg)')
      .style('filter', 'url(#matrix)');


    const len = titleFormatter.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    if (len < name.length) {
      titleFormatter.push(name.length - len)
    }

    let titleLines = [0, ...titleFormatter];

    // 添加中间比例值
    change_g.append('text')
      .attr('font-size', '18px')
      .attr('fill', '#c5e4ff')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .text(value + '%');

    // 添加标题文字
    change_g.append('text')
      .style('fill', '#fff')
      .style('font-size', '14px')
      .attr('text-anchor', 'middle')
      .html(() => {
        let str = '';
        for (let i = 0; i < titleLines.length - 1; i++) {
          let index = titleLines[i];
          let next = titleLines[i + 1] + titleLines[i];
          str += `<tspan x = 0 y=${i * 14}>${name.slice(index, next)}</tspan>`
        }
        return str;
      })
      .attr('transform', 'translate(0,50)');
  }

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    draw();
  }, [props.datas]);

  return (
    <div ref={dashBoardRef}></div>
  )
}
