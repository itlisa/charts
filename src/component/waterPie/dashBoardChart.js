import React, {useRef, useEffect, useState} from 'react';
import * as d3 from 'd3';

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
    let warnBg = defs.append("radialGradient")
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

    g.append('path')
      .attr('d', function (d, i) {
        return arcPath(d)
      })
      .attr('fill', '#07ecf6');

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

    let mark = -10;
    g.each(function (g, i) {
      let n = i;
      if (!(i %= 4)) {
        mark += 10;
        svg.select('.g' + n)
          .append('text')
          .attr('font-size', '16px')
          .attr('fill', '#fff')
          .attr('transform', function (d, i) {
            return `translate(${d.x},${d.y})`
          })
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .text(mark);
      }
    })

    setParams({group})
  }

  function draw() {
    const datas = props.datas;
    const group = params.group;

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
  }

  return (
    <div ref={dashBoardChart} style={{position: 'absolute', top: props.top, left: props.left}}></div>
  )
}