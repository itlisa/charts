import React from 'react';

const BMap = window.BMap;

/**
 * 百度地图v3.0 react 组件
 */
class BMapReact extends React.Component {
  constructor() {
    super();
    this.point = new BMap.Point(120.40182, 32.40203);
  }

  componentDidMount() {
    const me = this;
    const container = me.refs.container;
    const map = new BMap.Map(container, {
      enableAutoResize: true,
      enableMapClick: false
    });
    map.enableScrollWheelZoom();
    const point = me.point;
    map.centerAndZoom(point, 14);
    container.style.backgroundColor = '#00419d';
    me.map = map;

    me._didMount();
  }

  _didMount() {
  }
}

export default BMapReact;
