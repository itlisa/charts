import React, {Component} from 'react';
import CylinderEnv from './CylinderEnv';

class CircleRotate extends Component {
  constructor(props) {
    super(props);
    const me = this;
    me.state = {};
    let renderer;
  }

  render() {
    const me = this;
    return (
      <div id={'box'} style={{
        border: 'none',
        cursor: 'move',
        width: '100%',
        height: '100%',
        position:'absolute',
        top:'14px',
        left:'4px'
      }}/>
    )
  }


  componentDidMount() {
    let me=this;
    const env = new CylinderEnv({
      cameraPosition: [-97.91555157983014,54.25541814953895,32.75111876309459]
    });
    const domElement = document.getElementById("box");
    env.resize(domElement.clientWidth, domElement.clientHeight);
    domElement.appendChild(env.domElement);
    env.startRender();
    me._env = env;

  }

  componentWillUnmount() {
    const me = this;
    if (me._env) me._env.stopRender();

  }
}

export default CircleRotate;