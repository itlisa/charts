import React, {Component} from 'react';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols'

/**
 * THREE 画线
 * */
class DrawLine3d extends Component {
  constructor(props) {
    super();
    this._comBoxRef = React.createRef();
    this.width = props.width;
    this.height = props.height;
  }

  render() {
    return (
      <div ref={this._comBoxRef}></div>
    )
  }

  _renderer() {
    const ele = this._comBoxRef.current;
    //渲染器
    const renderer = new THREE.WebGLRenderer({antialias: true});
    //设置渲染器的高度和宽度，如果加上第三个值 false，则按场景大小显示，等比例缩放
    renderer.setSize(this.width, this.height, false);
    //将渲染器添加到html当中
    ele.appendChild(renderer.domElement);
    return renderer;
  }

  _scene() {
    //创建场景
    const scene = new THREE.Scene();
    scene.add(new THREE.DirectionalLight(0xffffff));
    scene.add(this._light());
    return scene;
  }

  _camera() {
    //设置相机（视野，显示口的宽高比，近裁剪面，远裁剪面）
    const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 10000);
    //设置相机的视点
    camera.position.set(0, 0, 100);
    //设置相机的朝向

    camera.lookAt(new THREE.Vector3(0, 0, 0));
    return camera;
  }

  _light() {
    const light = new THREE.AmbientLight();
    light.position.set(1, 1, 1);
    return light;
  }

  _drawLine() {
    const lineMaterial = new THREE.LineBasicMaterial({color: 0x00caff});
    let geom = new THREE.Geometry();
    // let points = [
    //   new THREE.Vector3(100, 100, 100),
    //   new THREE.Vector3(50, 150, 100),
    //   new THREE.Vector3(150, 150, 100)
    // ];
    // geom.vertices.push(points);
    geom.vertices.push(new THREE.Vector3(0, 10, 0));
    geom.vertices.push(new THREE.Vector3(-10, 0, 0));
    geom.vertices.push(new THREE.Vector3(10, 0, 0));
    geom.vertices.push(new THREE.Vector3(-10, -10, 0));
    const line = new THREE.Line(geom, lineMaterial); //使用line方法将线初始化
    return line;
  }

  componentDidMount() {
    const renderer = this._renderer();
    const scene = this._scene();
    const camera = this._camera();
    const line = this._drawLine();
    scene.add(line);
    console.log(scene);
    renderer.render(scene, camera);
    // 添加交互插件
    const controls = new Orbitcontrols(camera, renderer.domElement);

    function animate() {
      controls.update();
      window.requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }

}

export default DrawLine3d;