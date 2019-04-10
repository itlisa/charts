import React, {Component} from 'react';
import * as d3 from 'd3';

class ChordChart extends Component {
  constructor() {
    super();
    this.state = {
      areas: ['欧洲', '美洲', '大洋洲', '非洲', '亚洲'],
      matrix: [[100, 300, 190, 290, 309], [200, 300, 90, 290, 9], [30, 80, 190, 29, 309], [90, 30, 190, 190, 309], [100, 100, 190, 90, 49]]
    };
    this.width = 300;
    this.height = 300;
  }

  render() {
    return (
      <div ref={'chordChart'}></div>
    )
  }

  componentDidMount() {
    const ele = this.refs.chordChart;
    const areas = this.state.areas;
    const matrix = this.state.matrix;
    const w = this.width;
    const h = this.height;
    const innerR = w / 4 + 30;
    const outerR = w / 2 - 40;
    const svg = d3.select(ele)
      .append('svg')
      .attr('width', w)
      .attr('height', h);
    // 创建group组
    const group = svg.append('g')
      .attr('transform', `translate(${w / 2},${h / 2})`);

    const chordPath = d3.chord()
      .padAngle(0.03)
      .sortSubgroups(d3.ascending)
    // .radius(innerR);
    // 获取节点 最后的那个group
    const nodes = chordPath(matrix)['groups'];
    // 获取弦，剔除group
    const links = chordPath(matrix).map((item) => {
      return item;
    });
    // 创建一个颜色序数比例尺；
    // const color = d3.scaleOrdinal()
    //   .domain(d3.range(4)) // 定义域
    //   .range(['red', 'orange', 'yellow', 'blue', 'green']); // 值域
    const color = d3.scaleOrdinal(d3.schemeCategory10); //10种分类颜色
    // 创建弧生成器
    const arcPath = d3.arc()
      .innerRadius(innerR)
      .outerRadius(outerR);
    // 添加装节点的group组
    const gOuter = group.append('g')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g');
    // 绘制外弧
    gOuter.append('path')
      .attr('d', arcPath)
      .attr('class', 'outerPath')
      .attr('cursor', 'pointer')
      .attr('fill', (d, i) => {
        return color(i)
      });
    // 添加文字
    gOuter.append('text')
      .data(nodes)
      .each((d, i) => {
        d.angle = (d.startAngle + d.endAngle) / 2;
        d.name = areas[i]
      })
      .style('fill', '#fff')
      .style('font-size', 14)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('transform', (d) => {
        const x = Math.sin(d.angle) * (outerR + 20);
        const y = -Math.cos(d.angle) * (outerR + 20);
        return `translate(${x},${y})`;
      })
      .text(d => {
        return d.name;
      });
    // 添加内部的弦
    const ribbon = d3.ribbon().radius(innerR);// 设置弦生成器，设置弧的半径
    group.append('g')
      .selectAll('path')
      .data(links)
      .enter()
      .append("path")
      .attr('class', 'innerPath')
      .attr('d', ribbon)
      .attr('fill', d => {
        return color(d.source.index);
      })
      .attr('stroke', '#fff');
    // 添加鼠标交互事件
    group.selectAll('.outerPath')
      .on('mouseover', (d, i) => {
        // i值 0-4
        group.selectAll('.innerPath')
          .filter(d => {
            // 获取没有连接到鼠标节点的值 返回值是一个boolean值
            return d.source.index !== i && d.target.index !== i;
          })
          .transition()
          .attr('opacity', 0);
      })
      .on('mouseout', d => {
        group.selectAll('.innerPath')
          .transition()
          .attr('opacity', 1);
      })
  }
}

export default ChordChart