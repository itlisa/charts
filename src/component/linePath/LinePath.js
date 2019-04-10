import React, {Component} from 'react';
import * as d3 from 'd3';

/**
 * 求圆上点的坐标公式 已知圆心、半径、角度
 * x1 = x0 + r * cos(angle * PI / 180)
 * y1 = y0 + r * sin(angle * PI /180)
 * */
class LinePath extends Component {
  constructor() {
    super();
    this.state = {
      lines: [[50, 100], [100, 150], [120, 90], [200, 100]]
    }
  }

  render() {
    return <div ref={'lineBox'}></div>
  }

  componentDidMount() {
    const ele = this.refs.lineBox;
    const r = 50; //半径
    const x0 = 0; // 圆心
    const y0 = 0;
    const side = 5;//边的数量
    const radian = (side - 2) * 180 / side; // 角度

    let datas = [];
    for (let i = 0; i < side; i++) {
      let arr = [];
      let temp = radian * i;
      const transfor = this._toRadian(temp);
      let x = Math.cos(transfor) * r + x0;
      let y = Math.sin(transfor) * r + y0;
      arr.push(x, y);
      datas.push(arr);
    }
    console.log(datas);
    const svg = d3.select(ele)
      .append('svg')
      .attr('width', 300)
      .attr('height', 300)
      .append('g')
      .attr('transform', 'translate(150,200)');

    const linePath = d3.line();
    svg.append('path')
      // .transition()
      // .attrTween('d', function (d, i, a) {
      //   console.log(d, i, a);
      // })
      .attr('d', linePath(datas))
      .attr('stroke', 'blue')
      .attr('stroke-width', 1)
      .attr('fill', 'red');
  }

  _toRadian(a) {
    // 角度转弧度
    return a * Math.PI / 180;
  }
}

export default LinePath;