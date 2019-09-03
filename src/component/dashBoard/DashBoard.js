import React, {Component} from 'react';
import * as d3 from 'd3';

// 引入图片
import pic from './arcPic.png';

class DashBoard extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '返乡大学生占乡村大学生数量',
      data: 80
    };
    this.w = props.width;
    this.h = props.height;
    this.colors = ['#cc2d0c', '#04aec6', '#00bd23'];
    this.titleFormatter = props.titleFormatter || [6];
  }

  get width() {
    return this.w;
  }

  get height() {
    return this.h;
  }

  set width(w) {
    this.w = w;
  }

  set height(h) {
    this.h = h;
  }

  _setData(d) {
    this.setState({
      name: d.name,
      data: d.data
    })
  }

  render() {
    return (
      <div ref={ref => this.dashBoardRef = ref}></div>
    )
  }

  componentDidMount() {

    const ele = this.dashBoardRef;

    // 获取盒子宽高
    const w = this.width;
    const h = this.height;

    const colors = this.colors;

    // 大半径
    const R = 68;

    // 内外半径间距
    const Rr = 4;

    const PI = Math.PI;

    const name = this.state.name;
    const data = this.state.data;
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


    let angle = startAngle + perAngle * (data / 10); // 获取当前指数所角度

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
      .attr('stroke-width', 2)

    // 添加指向点
    let pointR = 8;
    group.append('circle')
      .attr('r', pointR)
      .attr('cx', function () {
        let cx = Math.sin(angle) * (outerR);
        return cx;
      })
      .attr('cy', function () {
        let cy = -Math.cos(angle) * (outerR);
        return cy;
      })
      .style('fill', 'url(#bg)')
      .style('filter', 'url(#matrix)');


    const len = this.titleFormatter.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    if (len < name.length) {
      this.titleFormatter.push(name.length)
    }

    let titleLines = [0, ...this.titleFormatter];


    // 添加中间比例值
    group.append('text')
      .attr('font-size', '18px')
      .attr('fill', '#c5e4ff')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .text(data + '%');

    // 添加标题文字
    group.append('text')
      .style('fill', '#fff')
      .style('font-size', '14px')
      .attr('text-anchor', 'middle')
      .html(() => {
        let str = '';
        for (let i = 0; i < titleLines.length - 1; i++) {
          let index = titleLines[i];
          let next = titleLines[i + 1];
          str += `<tspan x = 0 y=${i * 14}>${name.slice(index, next)}</tspan>`
        }
        // let w = 6;
        // let num = Math.ceil(name.length / w);
        // let str = '';
        // for (let i = 0; i < num; i++) {
        //   str += `<tspan x = 0 y=${i * 14}>${name.slice(i * w, w * (i + 1))}</tspan>`
        // }
        return str;
      })
      .attr('transform', 'translate(0,50)');
  }


  // RTA(r) {
  //   return r * 180 / Math.PI;
  // }

}

export default DashBoard;