import React from 'react';
import * as d3 from 'd3';

/**
 * 气泡图
 * d3.pack() 创建一个新的圆形填充布局（简称包布局）。
 * */

class BubbleChart extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [{
        name: 'a',
        value: 100
      }, {
        name: 'a',
        value: 30
      }, {
        name: 'b',
        value: 100
      }, {
        name: 'c',
        value: 90
      }, {
        name: 'd',
        value: 40
      }, {
        name: 'e',
        value: 200
      }, {
        name: 'abcdef',
        value: 600
      }, {
        name: 'g',
        value: 10
      }, {
        name: 'h',
        value: 100
      }, {
        name: 'i',
        value: 100
      }]
    };
    this.w = 500;
    this.h = 300;
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

  render() {
    return (
      <div ref='bubbleChart'></div>
    )
  }

  componentDidMount() {
    const w = this.width;
    const h = this.height;
    const data = this.data;
    const ele = this.refs.bubbleChart;
    const svg = d3.select(ele)
      .append('svg')
      .attr('width', w)
      .attr('height', h);
    const group = svg.append('g')
    // .attr('transform', `translate(${w / 2},${h / 2})`);

    //生成包布局
    const pack = d3.pack()
      .size([w, h])
      .padding(5);

    let num;
    const root = d3.hierarchy({children: data}) // 从层次性布局构造根节点
      .sum(function (d) {
        return d.value;
      })
      .each(function (d) {
        if (d.parent !== null) {
          num = d.value
        }
      });

    // 创建group组
    const node_g = group.selectAll('g')
      .data(pack(root).leaves()) //生成层级数组
      .enter()
      .append('g')
      .attr('transform', function (d) {
        return `translate(${d.x},${d.y})`
      });

    const circle = node_g.append('circle')
      .attr('r', function (d) {
        return d.r
      })
      .attr('fill', 'green');

    // 声明tspan分割数组
    let arrData = [];
    let splitNum = 4; // 定义分割数量
    const text = node_g.append('text')
      .style('font-size', 20)
      .style('fill', 'orange')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .text(function (d) {
        let arr = [];
        for (let i = 0; i < d.data.name.length; i += splitNum) {
          let str = d.data.name.substring(i, i + splitNum);
          arr.push(str);
        }
        arrData.push(arr);
      });
    text.selectAll('tspan')
      .data(function (d, i) {
        return arrData[i];
      })
      .enter()
      .append('tspan')
      .attr('x', 0)
      .attr('y', function (d, i) {
        return i * 20;
      })
      .text(function (d) {
        return d;
      })
  }
}

export default BubbleChart;