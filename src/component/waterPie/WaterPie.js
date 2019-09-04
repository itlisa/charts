import React, {useRef, useEffect, useState} from 'react';
import * as d3 from 'd3';

/**
 * 水球饼图组件封装
 *@param props= {
 *  width,
 *  height,
 *  datas,
 *  colors,
 *  top,left  组件位置（默认0）
 * }
 * */

export default (props) => {

  const chartRef = useRef(null);
  const [params, setParmas] = useState(null);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    draw();
  }, [props.datas]);

  function init() {
    const ele = chartRef.current;
    const w = props.width || 300;
    const h = props.height || 300;
    const svg = d3.select(ele)
      .append('svg')
      .attr("width", w)
      .attr('height', h);

    // 添加group组，将中心点移动至画布中心（默认在画布左上角）
    const group = svg.append('g')
      .attr('transform', `translate(${w / 2},${h / 2})`);

    setParmas({svg, group});
  }

  function draw() {
    // 参数获取
    const datas = props.datas;
    if (!datas) return;
    const svg = params.svg;
    const group = params.group;
    const colors = props.colors;

    // 定义内、外半径
    const r = 60;
    const R = 80;

    // 创建弧生成器
    const arcPath = (innerR, outerR, startAngle, endAngle) => {
      return d3.arc()
        .innerRadius(innerR)
        .outerRadius(outerR)
        .startAngle(startAngle)
        .endAngle(endAngle)
        .padAngle(0.03);
    };

    // 创建饼图生成器
    const pie = d3.pie()
      .value(function (d) {
        return d.value;
      });

    const pieData = pie(datas);

    // 数据从大到小排序
    pieData.sort((a, b) => {
      return b.value - a.value
    });

    // totalData
    const sum = pieData.reduce((acc, cur) => {
      return acc + cur.value;
    }, 0);

    // 添加分组
    const g = group.selectAll('g')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', function (d, i) {
        return 'g' + i;
      });


    // 添加路径
    g.append('path')
      .attr('d', function (d) {
        return arcPath(r, R, d.startAngle, d.endAngle)();
      })
      .attr('fill', function (d, i) {
        return colors[i];
      });

    // 移入效果封装
    const s = (d, label) => {
      const in_g = label.append('g')
        .attr('class', 'in_g');

      in_g.append('path')
      // .attr('id', 'shadow_path' + i)
        .attr('d', function () {
          return arcPath(r, R + 10, d.startAngle, d.endAngle)();
        })
        .attr('fill', 'rgba(9,104,206,.5)');

      in_g.append('text')
      // .attr('id', 'text' + i)
        .attr('fill', '#00deff')
        .attr('font-size', '24px')
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text(~~(d.value / sum * 100) + '%');

      in_g.append('text')
        .attr('fill', '#fff')
        .attr('font-size', '14px')
        .attr('dy',30)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .text(d.data.name);

    };


    // 默认效果显示第一个
    s(pieData[0], svg.select('.g0'));


    // 移入添加阴影效果
    g.on('mouseenter', function (d, i) {

      if (svg.select('.in_g')) {
        svg.select('.in_g').remove();
      }

      s(d, d3.select(this));

    })
    // .on('mouseleave', function (d, i) {
    //   svg.select('#shadow_path' + i).remove();
    //   svg.select('#text' + i).remove();
    // })
  }

  return (
    <div ref={chartRef} style={{position: 'absolute', top: props.top || 0, left: props.left || 0}}></div>
  )
};