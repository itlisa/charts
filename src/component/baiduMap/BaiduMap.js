import React from 'react';

const BMap = window.BMap;

console.log(BMap);

class BaiduMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div ref={'container'} style={{width: this.props.width, height: this.props.height}}></div>
    )
  }

  componentDidMount() {
    const me = this;
    const ele = this.refs.container;
    me.map = new BMap.Map(ele); // 创建Map实例
    const map = me.map;
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    me.canvasLayer = new BMap.CanvasLayer({
      update: me.update
    });
  }

  update() {
    console.log(this);
    const mp = this.map;
    const ctx = this.canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    const data = [
      new BMap.Point(116.297047, 39.979542),
      new BMap.Point(116.321768, 39.88748),
      new BMap.Point(116.494243, 39.956539)
    ];
    const pixel = mp.pointToPixel(data[0]); // 渐变起点
    const pixelEnd = mp.pointToPixel(data[data.length - 1]); // 渐变终点
    // 创建一个线性渐变
    let gradient = ctx.createLinearGradient(pixel.x, pixel.y, pixelEnd.x, pixelEnd.y);
    //定义渐变色颜色
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "green");
    //设置fillStyle为当前的渐变对象
    ctx.fillStyle = gradient;
    ctx.moveTo(pixel.x, pixel.y);
    for (let i = 0; i < data.length; i++) {
      // 绘制时需要对经纬度进行转换(地图坐标转成像素坐标)；
      const pixel = mp.pointToPixel(data[i]);
      ctx.lineTo(pixel.x, pixel.y);
      ctx.fill();
    }
    mp.addOverlay(this.canvasLayer);
  }
}

export default BaiduMap;