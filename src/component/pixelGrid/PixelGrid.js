import React, {Component} from 'react';

class Wave extends Component {
  constructor() {
    super();
    this._draw = this._draw.bind(this);
    this.q = 0; //相位 （左加右减）
  }

  render() {
    return (
      <canvas ref={'canvas'} width={500} height={300}></canvas>
    )
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    this.ctx = canvas.getContext('2d');
    this.w = canvas.width;
    this.h = canvas.height;
    const y = 100;

    let pixel = this.pixel = [];
    // 创建像素点
    for (let x = -400; x < 400; x += 10) {
      for (let z = -250; z < 250; z += 5) {
        pixel.push({
          x,
          y,
          z
        })
      }
    }
    this._draw();
  }

  _render(q) {
    const w = this.w;
    const h = this.h;
    const pixel = this.pixel;
    const fl = 250;
    const vpx = w / 2; // 消失点
    const vpy = h / 2;
    const ctx = this.ctx;
    let imageData = this.ctx.getImageData(0, 0, w, h);
    let c;

    pixel.forEach((item, i) => {
      const scale = fl / (fl + item.z);
      const x = item.x * scale + vpx;
      const y = item.y * scale + vpy;
      if (x >= 0 && x <= w && y >= 0 && y <= h) {
        //imagedata读取的像素数据存储在data属性里，是从上到下，从左到右的，每个像素需要占用4位数据，分别是r,g,b,alpha透明通道
        c = (Math.round(y) * imageData.width + Math.round(x)) * 4;
        imageData.data[c] = 17;     // r
        imageData.data[c + 1] = 122;//g
        imageData.data[c + 2] = 181;//b
        imageData.data[c + 3] = 255;//alpha （0表示透明）
      }
      item.z -= 0.8;
      item.y = h / 14 + Math.sin(i / pixel.length * 20 + q) * 20;
      if (item.z < -fl) item.z += 2 * fl;
    });
    ctx.putImageData(imageData, 0, 0);
  }

  _draw() {
    window.requestAnimationFrame(this._draw);
    this.ctx.clearRect(0, 0, this.w, this.h);
    // 每次向左移动0.05个像素点
    this.q += 0.05;
    this._render(this.q);
  }
}

export default Wave;