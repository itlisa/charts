import React, {Component} from 'react';
import * as d3 from 'd3';
import './ForceChart.css';

/**
 * d3力导向
 * */

class ForceChart extends Component {
  constructor() {
    super();
    this.w = 600;
    this.h = 300;
    this.state = {
      nodes: [{name: '重庆'}, {name: '云南'}, {name: '西安'}, {name: '成都'}, {name: '海南'}, {name: '西藏'}, {name: '武汉'}],
      links: [{
        source: 0,
        target: 1
      }, {
        source: 1,
        target: 2
      }, {
        source: 3,
        target: 1
      }, {
        source: 2,
        target: 5
      }, {
        source: 3,
        target: 4
      }, {
        source: 6,
        target: 1
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

  get nodes() {
    return this.state.nodes;
  }

  get links() {
    return this.state.links;
  }

  componentDidMount() {
    const domEle = this.refs.container;
    const w = this.width;
    const h = this.height;
    const svg = d3.select(domEle)
      .append('svg')
      .attr('width', w)
      .attr('height', h);
    const g = svg.append('g')
    // .attr('transform', `translate(${w / 2},${h / 2})`);
    // 通过布局来转换数据，然后进行绘制
    const simulation = d3.forceSimulation()
      .nodes(this.nodes) // 转换节点数据
      .force("link", d3.forceLink(this.links).distance(50)) //转换连线数据
      .force('charge', d3.forceManyBody().strength(-250).distanceMax(100)) // 设定节点的电荷数
      .force('center', d3.forceCenter(w / 2, h / 2)); //设定中心点

    // 绘制连线
    g.selectAll('line')
      .data(this.links)
      .enter()
      .append('line')
      .attr('stroke', '#ccc')
      .attr('stroke-width', 2);

    // 绘制节点
    g.selectAll('circle')
      .data(this.nodes)
      .enter()
      .append('circle')
      .attr("r", 20)
      .attr('stroke', '#fff')
      .attr('stroke-width', 1)
      .attr('fill', '#000')
      .call(d3.drag().on('start', function (d) {
        if (!d3.event.active) {
          simulation.alphaTarget(0.8).restart() // 设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
        }
        d.fx = d.x;
        d.fy = d.y;
        d3.select(this).style('fill', 'blue');
      })
        .on('drag', function (d) {
          d.fx = d3.event.x;
          d.fy = d3.event.y;

        })
        .on('end', function (d) {
          if (!d3.event.active) {
            simulation.alphaTarget(0)
          }
          d.fx = null;
          d.fy = null;
          d3.select(this).style('fill', '#000');
        }));

    // 绘制文字
    g.selectAll('text')
      .data(this.nodes)
      .enter()
      .append('text')
      .attr('class', 'txt')
      .text(d => d.name)
      .style('font-size', 18)
      .style('fill', 'yellow');

    //数据重绘
    simulation.on('tick', function () {
      svg.selectAll('circle')
        .attr('cx', function (d) {
          return d.x
        })
        .attr('cy', function (d) {
          return d.y
        });
      svg.selectAll('text')
        .attr('x', function (d) {
          return d.x - 20
        })
        .attr('y', function (d) {
          return d.y + 5;
        });
      svg.selectAll('line')
        .attr('x1', function (d) {
          return d.source.x
        })
        .attr('y1', function (d) {
          return d.source.y
        })
        .attr('x2', function (d) {
          return d.target.x
        })
        .attr('y2', function (d) {
          return d.target.y
        })
    });
    // 定时器
    let t = d3.timer(function (elapsed) {
      // console.log(elapsed);
      if (elapsed > 200) t.stop();
    }, 150);
  }
}

export default ForceChart;