import Circle from '../common/Ball';
import React, {Component} from 'react';

class Rain extends Component {
  constructor() {
    super();
    this._draw = this._draw.bind(this);
  }

  render() {
    return (
      <canvas width={300} height={300} ref={'canvas'}></canvas>
    )
  }

  componentDidMount() {
    const me = this;
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const step = 16;
    const r = 2; // 半径
    me.w = canvas.width;
    me.h = canvas.height;
    me.ctx = ctx;
    me.friction = 0.95;
    me.floor = 250;
    me.bounce = 20;
    me.arr = [];
    const column = me.w / (20 * r);
    for (let i = 0; i < column; i++) {
      const circle = new Circle(r, '#fff');
      const basePos = parseInt(Math.random() * 300); // 基础位置，为了列与列之间产生错位
      circle.x = parseInt(Math.random() * me.w);
      circle.y = -(step * i) - basePos;  // 垂直方向上拉开距离
      me.arr.push(circle);
    }

    // 绘制
    me._draw();
  }

  _draw() {
    window.requestAnimationFrame(this._draw);
    this.ctx.fillStyle = "rgba(0,0,0,0.2)";
    this.ctx.fillRect(0, 0, this.w, this.h);

    this.arr.forEach((item, i) => {
      item.vy = parseInt(Math.random() * 2) + 3;
      if (item.y > this.floor) {
        item.y = 0;
      } else {
        item.y += item.vy;
      }
      item.draw(this.ctx);
    });
  }
}

export default Rain;