import Circle from '../common/Ball';
import React, {Component} from 'react';

class Ball extends Component {
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
    me.w = canvas.width;
    me.h = canvas.height;
    me.ctx = ctx;
    let balls = 30;
    me.friction = 0.95;
    me.arr = [];
    for (let i = 0; i < balls; i++) {
      const circle = new Circle;
      circle.r = Math.random() * 20 + 10;
      circle.x = Math.random() * (me.w / 2) + 100;
      circle.y = Math.random() * (me.h / 2) + 100;
      me.arr.push(circle);
    }

    // 绘制
    me._draw();

    // 鼠标事件
    window.addEventListener('keydown', (ev) => {
      me.arr.forEach((item, i) => {
        if (ev.keyCode == 38) {
          // up do something
          item.vy -= 2;

        } else if (ev.keyCode == 40) {
          // down do something
          item.vy += 2;
        }
      })

    }, false)
  }

  _draw(item) {
    window.requestAnimationFrame(this._draw);
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.arr.forEach((item, i) => {
      item.vy *= this.friction;
      item.y += item.vy;
      item.draw(this.ctx);
    });
  }
}

export default Ball;