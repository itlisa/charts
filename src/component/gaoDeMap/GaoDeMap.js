import React, {Component} from 'react';
// import AMap from 'AMap';
import './MapStyle.css';
import shalou from './img/shalou.png';

const AMap = window.AMap;

class GaoDeMap extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [
        {
          name: '成都',
          count: 692,
          point: {lng: 104.143045, lat: 30.658753},
          taskName: '维护治安',
          taskAddress: '平安公司',
          taskType: '***',
          perNum: 10,
          chargePerName: '老张',
          chargePerPhone: "189****0987"
        },
        {
          name: '太原',
          count: 595,
          point: {lng: 112.495418, lat: 37.918181},
          taskName: '维护治安',
          taskAddress: '平安公司',
          taskType: '***',
          perNum: 10,
          chargePerName: '老张',
          chargePerPhone: "189****0987"
        },
        {
          name: '济南',
          count: 968,
          point: {lng: 117.094742, lat: 36.683644},
          taskName: '维护治安',
          taskAddress: '平安公司',
          taskType: '***',
          perNum: 10,
          chargePerName: '老张',
          chargePerPhone: "189****0987"
        },
        {
          name: '西宁',
          count: 488,
          point: {lng: 101.788191, lat: 36.713275},
          taskName: '维护治安',
          taskAddress: '平安公司',
          taskType: '***',
          perNum: 10,
          chargePerName: '老张',
          chargePerPhone: "189****0987"
        },
        {
          name: '兰州',
          count: 94,
          point: {lng: 103.848689, lat: 36.17816},
          taskName: '维护治安',
          taskAddress: '平安公司',
          taskType: '***',
          perNum: 10,
          chargePerName: '老张',
          chargePerPhone: "189****0987"
        },
        {
          name: '呼和浩特',
          count: 94,
          point: {lng: 111.759526, lat: 40.970027},
          taskName: '维护治安',
          taskAddress: '平安公司',
          taskType: '***',
          perNum: 10,
          chargePerName: '老张',
          chargePerPhone: "189****0987"
        },
        {
          name: '杭州',
          count: 94,
          point: {lng: 120.148694, lat: 30.276261},
          taskName: '维护治安',
          taskAddress: '平安公司',
          taskType: '***',
          perNum: 10,
          chargePerName: '老张',
          chargePerPhone: "189****0987"
        },
        {
          name: '南昌',
          count: 94,
          point: {lng: 115.880521, lat: 28.666403},
          taskName: '维护治安',
          taskAddress: '平安公司',
          taskType: '***',
          perNum: 10,
          chargePerName: '老张',
          chargePerPhone: "189****0987"
        },
        {
          name: '郑州',
          count: 94,
          point: {lng: 113.746434, lat: 34.763468},
          taskName: '维护治安',
          taskAddress: '平安公司',
          taskType: '***',
          perNum: 10,
          chargePerName: '老张',
          chargePerPhone: "189****0987"
        }
      ]
    };
    this.roof = React.createRef();
    this.width = props.width || 300;
    this.height = props.height || 300;
  }

  render() {
    return (
      <div ref={this.roof} id={'container'} style={{width: this.props.width, height: this.props.height}}></div>
    )
  }

  createMarker(t) {
    let marker = new AMap.Marker({
      icon: shalou,
      position: [t.point.lng, t.point.lat]
    });

    //标记点添加点击事件
    marker.on('click', () => {
      // 信息窗体的内容
      let content = `<div style=width:230px;height:240px; class=mapBox>
                  <p style=color:#00f4f5;margin-top:2px;font-weight:800;>${t.taskName}</p>
                  <p style=width:210px;height:1px;background:#0492af;></p>
                  <p style=padding:2px;background:rgba(4,38,72,0.6);margin-top:3px;>企业名称：${t.taskAddress}</p>
                  <p style=padding:2px;background:rgba(4,38,72,0.6);margin-top:3px;>任务类型：${t.taskType}</p>
                  <p style=padding:2px;background:rgba(4,38,72,0.6);margin-top:3px;>执勤人数：${t.perNum}</p>
                  <p style=padding:2px;background:rgba(4,38,72,0.6);margin-top:3px;>任务负责人：${t.chargePerName}</p>
                  <p style=padding:2px;background:rgba(4,38,72,0.6);margin-top:3px;>手机号码：${t.chargePerPhone}</p>
                </div>`;

      // 创建 infoWindow 实例
      let infoWindow = new AMap.InfoWindow({
        isCustom: true,  //使用自定义窗体
        content: content
      });

      // 打开信息窗体
      infoWindow.open(this.map, [t.point.lng, t.point.lat]);
    });
    this.map.add(marker);

  }

  componentDidMount() {
    let me = this;
    const datas = this.state.data;
    this.map = new AMap.Map('container', {
      resizeEnable: true,
      center: [116.397428, 39.90923],
      zoom: 3,
      mapStyle: 'amap://styles/9a4a00a96613c1c76f89fbe89ba9fb77'
    });
    // 点击地图移除信息窗体
    this.map.on('click', function () {
      console.log(1);
    });
    // 添加点标记
    datas.map(t => {
      me.createMarker(t);
    });

  }
}

export default GaoDeMap;