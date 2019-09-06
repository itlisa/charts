import React, {Component} from 'react';
import * as d3 from 'd3';
import './StreetDelicacies.css';
import CircleRotate from './circleRotate'

/**
 * 美食街
 * */

class StreetDelicacies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 200,
      top: 0,
      data: [{
        name: '清泉好人街',
        imgUrl: '/image/goodMan.png',
        left: 130,
        top: 0
      }, {
        name: '中国烧麦美食街',
        imgUrl: '/image/food.png',
        left: 200,
        top: 0
      }, {
        name: '步行街',
        imgUrl: '/image/walk.png',
        left: 160,
        top: 0
      }]
    };
    this.width = props.width || 840;
    this.height = props.height || 700;
    this.draw = this.draw.bind(this);
  }

  render() {
    const url = this.state.data[1].imgUrl;
    const left = this.state.left;
    const top = this.state.top;
    return (
      <div className={'streetContent'}>
        {/*<CircleRotate/>*/}
        <div className={'streetBg'}></div>
        <div className={'streetBox'} ref={'streetBox'}>
        </div>
        <img src={url} alt="" ref={'imgRef'} style={{left, top}}/>
        <span></span>
      </div>
    )
  }

  _createLinearGradient(color1, color2) {
    let linearGradient = this.svg.append('linearGradient')
      .attr('id', 'myGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');
    linearGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', color1);
    linearGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', color2);
  }

  _isClick = true;

  componentDidMount() {
    const datas = this.state.data;
    const ele = this.refs.streetBox;
    const imgEle = this.refs.imgRef;
    const rx = 200;
    const ry = 80;
    const deg = 360 / datas.length;
    const width = this.width;
    const height = this.height;
    const bar_h = 80;
    let step = 0;
    const svg = this.svg = d3.select(ele)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    //添加group组
    const group = svg.append('g');
    group.attr('transform', `translate(${width / 2},${height / 2})`);

    // 添加渐变色
    this._createLinearGradient('#02b1f2', '#00c7c0');

    // 分组
    const item_g = group.selectAll('g')
      .data(datas)
      .enter()
      .append('g');

    // 添加弧形
    const path = item_g.append('path');
    path.attr('fill', 'url(#myGradient)')
      .attr('opacity', .8)
      .attr('d', (d, i) => {
        let o = this.angleToRadian((deg) * i) + this.angleToRadian(step);
        let e = this.angleToRadian(deg * (i + 1) - 5) + this.angleToRadian(step);
        let x1 = parseInt(rx * Math.sin(o));
        let y1 = -parseInt(ry * Math.cos(o));

        let x2 = parseInt(rx * Math.sin(e));
        let y2 = -parseInt(ry * Math.cos(e));
        d.o = o;
        d.e = e;
        d.startAngle = deg * i;
        d.endAngle = deg * (i + 1);
        return `M${x1},${y1} A${rx},${ry} 0 0,1 ${x2},${y2} v${bar_h} A${rx},${ry} 0 0,0 ${x1},${y1 + bar_h}`
      });

    // 点击旋转到中间位置
    item_g.on('click', (d) => {
      // 防止重复点击
      if (this._isClick) {
        this._isClick = false;
        // 对外抛出街道信息
        this.props.getMsg(d.name);
        imgEle.src = d.imgUrl;
        this.setState({
          left: d.left,
          top: d.top
        });
        let o = d.o - ~~(d.o / (Math.PI * 2)) * Math.PI * 2;
        // let e = d.e - ~~(d.e / (Math.PI * 2)) * Math.PI * 2;
        if (o > this.angleToRadian(120) && o < this.angleToRadian(240 - 5)) {
          return false;
        } else {
          this.draw(d);
        }
      }
      setTimeout(() => {
        this._isClick = true;
      }, 500)
    });

    // 添加 defs path
    const defsPath = svg.append('defs')
      .selectAll('path')
      .data(datas)
      .enter()
      .append('path');
    defsPath.attr('d', (d, i) => {
      let o = this.angleToRadian((deg) * i) + this.angleToRadian(step);
      let e = this.angleToRadian(deg * (i + 1) - 5) + this.angleToRadian(step);
      let x1 = parseInt(rx * Math.sin(o));
      let y1 = -parseInt(ry * Math.cos(o));

      let x2 = parseInt(rx * Math.sin(e));
      let y2 = -parseInt(ry * Math.cos(e));

      if (o >= this.angleToRadian(120) && e <= this.angleToRadian(240)) {
        return `M${x2},${y2 + bar_h / 2} A${rx},${ry} 0 0,0 ${x1},${y1 + bar_h / 2}`
      } else {
        return `M${x1},${y1 + bar_h / 2} A${rx},${ry} 0 0,1 ${x2},${y2 + bar_h / 2}`;
      }
    })
      .attr('id', (d, i) => {
        return 'textPath' + i;
      });
    // 添加文字
    const text = item_g.append('text');
    text.attr('font-size', 30)
      .attr('fill', '#d0faff')
      .attr('dy', 15)
      .append('textPath')
      .attr('xlink:href', (d, i) => {
        return '#textPath' + i
      })
      .text((d) => {
        return d.name;
      })
      .attr('startOffset', '50%')

      .attr('text-anchor', 'middle');

    this.step = step;
    this.path = path;
    this.defsPath = defsPath;
  }

  draw(p) {
    const datas = this.state.data;
    const rx = 200;
    const ry = 80;
    const deg = 360 / datas.length;
    const bar_h = 80;
    let step = this.step;

    this.timer = d3.timer(() => {
      step += 5;
      this.step = step;
      let o = this.angleToRadian(p.startAngle) + this.angleToRadian(step);
      let e = this.angleToRadian(p.endAngle) + this.angleToRadian(step);
      o = o - ~~(o / (Math.PI * 2)) * Math.PI * 2;
      // e = e - ~~(e / (Math.PI * 2)) * Math.PI * 2;

      if (o >= this.angleToRadian(120) && o <= this.angleToRadian(240)) {
        this.timer.stop();
      }
      // 绘制弧形
      this.path.attr('fill', 'url(#myGradient)')
        .attr('opacity', .8)
        .attr('d', (d, i) => {
          let o = this.angleToRadian((deg) * i) + this.angleToRadian(step);
          let e = this.angleToRadian(deg * (i + 1) - 5) + this.angleToRadian(step);

          let x1 = parseInt(rx * Math.sin(o));
          let y1 = -parseInt(ry * Math.cos(o));

          let x2 = parseInt(rx * Math.sin(e));
          let y2 = -parseInt(ry * Math.cos(e));
          d.o = o;
          d.e = e;
          return `M${x1},${y1} A${rx},${ry} 0 0,1 ${x2},${y2} v${bar_h} A${rx},${ry} 0 0,0 ${x1},${y1 + bar_h}`
        });
      // 绘制自定义文本path
      this.defsPath
        .attr('d', (d, i) => {
          let o = this.angleToRadian((deg) * i) + this.angleToRadian(step);
          let e = this.angleToRadian(deg * (i + 1) - 5) + this.angleToRadian(step);

          let x1 = parseInt(rx * Math.sin(o));
          let y1 = -parseInt(ry * Math.cos(o));

          let x2 = parseInt(rx * Math.sin(e));
          let y2 = -parseInt(ry * Math.cos(e));
          o = o - ~~(o / (Math.PI * 2)) * Math.PI * 2;
          if (o >= this.angleToRadian(120) && o < this.angleToRadian(240 - 5)) {
            return `M${x2},${y2 + bar_h / 2} A${rx},${ry} 0 0,0 ${x1},${y1 + bar_h / 2}`
          } else {
            return `M${x1},${y1 + bar_h / 2} A${rx},${ry} 0 0,1 ${x2},${y2 + bar_h / 2}`;
          }
        })
    }, 16);

  }

  angleToRadian(d) {
    // 角度转弧度
    return d * Math.PI / 180;
  }

  componentWillUnmount() {
    // if (this.timer) {
    //   this.timer.top();
    // }
  }
}

export default StreetDelicacies;

