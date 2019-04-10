import React, {Component} from 'react';
import * as d3 from 'd3';

/**
 * d3画弧
 * */

class Arc extends Component {
  constructor() {
    super();
    this.w = 600;
    this.h = 300;
    this.state = {
      data: [{
        name: '土豆',
        value: 100
      }, {
        name: '芋头',
        value: 500
      }, {
        name: '洋葱',
        value: 300
      }, {
        name: '青椒',
        value: 70
      }]
    }
  }

  render() {
    return (
      <div ref={'container'} style={{width: this.w, height: this.h}}></div>
    )
  }

  get width() {
    return this.w;
  }

  get height() {
    return this.h;
  }

  get data() {
    return this.state.data;
  }

  componentDidMount() {
    /**
     * 单个弧
     * */
    const ele = this.refs.container;
    const width = this.width;
    const height = this.height;
    // 添加svg 设置宽高
    const svg = d3.select(ele)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    // 添加group组
    const arc_g = svg.append('g')
      .attr('transform', `translate(${width / 4},${height / 2})`);

    const arc = d3.arc()
      .startAngle(0 - Math.PI / 2)
      .endAngle(Math.PI - Math.PI / 2)
      .innerRadius(20)
      .outerRadius(60);

    arc_g.append('path')
      .attr("d", arc)
      .style('fill', 'blue');

    /**
     * 饼图
     * */
    const pieGroup = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);
    const arcPath = d3.arc()
      .innerRadius(20)
      .outerRadius(60);
    const data = this.data;
    const pie = d3.pie()
      .value((d) => {
        return d.value
      });
    const pieData = pie(data);
    // 数值大-小排序
    pieData.sort((a, b) => {
      return b.value - a.value;
    });
    // 添加group组
    const g_group = pieGroup.selectAll('g')
      .data(pieData)
      .enter()
      .append('g');

    // 添加path路径
    g_group.append('path')
      .attr('d', d => {
        return arcPath(d)
      })
      .style('fill', () => {
        // 颜色随机
        const r = parseInt(Math.random() * 255);
        const g = parseInt(Math.random() * 255);
        const b = parseInt(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
      })
  }
}

export default Arc;