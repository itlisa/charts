import React, {useRef, useEffect, useState} from 'react';
import * as d3 from 'd3';

/**
 * 仪表盘
 * @params props = {
 * width,
 * height,
 * top,
 * left,
 * datas
 * }
 * */
export default (props) => {
  const dashBoardChart = useRef(null);
  const [params, setParams] = useState(null);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (!props.datas) return;
    draw();
  }, [props.datas]);

  function init() {
    const ele = dashBoardChart.current;
    const w = props.width || 300;
    const h = props.height || 300;
    // 大半径
    const R = 120;

    // 内外半径间距
    const Rr = 8;

    const PI = Math.PI;

    let startAngle = -(PI / 2 + PI / 6); // 开始角度
    let endAngle = PI / 2 + PI / 6; // 结束角度

    let perAngle = (endAngle - startAngle) / 40;

    // 开始绘制仪表盘
    let svg = d3.select(ele)
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    let group = svg.append('g')
      .attr('transform', `translate(${w / 2},${h / 2})`);

    // 创建defs
    let defs = group.append('defs');

    // 添加线性渐变
    let warnBg = defs.append("linearGradient")
      .attr("id", "myGradient")
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    // 添加颜色
    warnBg.append('stop')
      .attr('offset', 0)
      .attr('style', 'stop-color:#fffc00');

    warnBg.append('stop')
      .attr('offset', 1)
      .attr('style', 'stop-color:#ff7200');


    // 添加放射性变换，生成空心填充颜色
    let radialGradient = defs.append("linearGradient")
      .attr("id", "myRadialGradient")
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');
    // 添加颜色
    radialGradient.append('stop')
      .attr('offset', 0.2)
      .attr('style', 'stop-color:rgba(255,255,255,0)');

    radialGradient.append('stop')
      .attr('offset', 1)
      .attr('style', 'stop-color:rgba(7,243,255,0.8)');


    let r = R - Rr;
    const arcPath = d3.arc()
      .innerRadius(r)
      .outerRadius(R);

    let dataList = [];
    for (let i = 0; i <= 40; i++) {
      dataList.push({
        startAngle: startAngle + perAngle * i,
        endAngle: startAngle + perAngle * i + perAngle
      })
    }


    let g = group.selectAll('g')
      .data(dataList)
      .enter()
      .append('g')
      .attr('class', function (d, i) {
        return 'g' + i;
      })
      .each(function (d, i) {
        d.x = Math.sin(d.startAngle) * (r - 20);
        d.y = -Math.cos(d.startAngle) * (r - 20);

        if (i %= 4) {

          d.x1 = Math.sin(d.startAngle) * (r - 6);
          d.y1 = -Math.cos(d.startAngle) * (r - 6);

          d.x2 = Math.sin(d.startAngle) * r;
          d.y2 = -Math.cos(d.startAngle) * r;

        } else {

          d.x1 = Math.sin(d.startAngle) * (r - 10);
          d.y1 = -Math.cos(d.startAngle) * (r - 10);

          d.x2 = Math.sin(d.startAngle) * r;
          d.y2 = -Math.cos(d.startAngle) * r;
        }

      });

    // 绘制边缘弧线
    g.append('path')
      .attr('d', function (d, i) {
        if (i === 40) return;
        return arcPath(d)
      })
      .attr('fill', '#07ecf6');

    // 绘制刻度线
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
      .attr('stroke', '#03c5ff')
      .attr('stroke-width', 2);

    // 添加刻度值
    let mark = -10;
    g.each(function (g, i) {
      let n = i;
      if (!(i %= 4)) {
        mark += 10;
        svg.select('.g' + n)
          .append('text')
          .attr('font-size', '16px')
          .attr('fill', '#b9d1f0')
          .attr('transform', function (d) {
            return `translate(${d.x},${d.y})`
          })
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .text(mark);
      }
    });

    setParams({group, perAngle, startAngle, R, r})
  }

  function draw() {
    const datas = props.datas;
    const group = params.group;
    const perAngle = params.perAngle;
    const startAngle = params.startAngle;
    const R = params.R;
    const r = params.r;

    // 添加背景渐变
    let endAngle = startAngle + perAngle * (datas.value / 10 * 4); // 获取当前指数所占角度

    const arcPath = d3.arc()
      .innerRadius(0)
      .outerRadius(R);
    group.append('path')
      .attr('d', function () {
        return arcPath({startAngle, endAngle})
      })
      .attr('fill', 'url(#myRadialGradient)');

    group.append('text')
      .attr('fill', '#fff')
      .attr('font-size', '14px')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('dy', 20)
      .text(datas.name);

    let text = group.append('text')
      .attr('fill', 'url(#myGradient)')
      .attr('font-size', '48px')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('dy', -15)
      .text(datas.value);

    // 添加 '%' 符号
    text.append('tspan')
      .attr('fill', '#fff')
      .attr('font-size', 14)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('dx', 5)
      .text('%');

    // 绘制指向箭头
    group.append('path')
      .attr('id', 'arrow')
      .attr('d', function () {
        // 顶点坐标
        let x = Math.sin(endAngle) * (R + 30);
        let y = -Math.cos(endAngle) * (R + 30);

        // 左下点坐标
        let x1 = Math.sin(endAngle - transfer(2)) * (r - 30);
        let y1 = -Math.cos(endAngle - transfer(2)) * (r - 30);

        // 右下点坐标
        let x2 = Math.sin(endAngle + transfer(2)) * (r - 30);
        let y2 = -Math.cos(endAngle + transfer(2)) * (r - 30);

        return `M${x},${y}L${x1},${y1}L${x2},${y2}Z`;
      })
      .attr('fill', '#fff');

  }

  function transfer(s) {
    return s * Math.PI / 180;
  }

  return (
    <div ref={dashBoardChart} style={{position: 'absolute', top: props.top, left: props.left}}></div>
  )
}