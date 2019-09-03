import React, {Component} from 'react';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols'

/**
 * THREE 画面
 * */
class DrawFace extends Component {
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
    // renderer.setClearColor(0xcc3101, 1.0);
    //将渲染器添加到html当中
    ele.appendChild(renderer.domElement);
    return renderer;
  }

  _scene() {
    //创建场景
    const scene = new THREE.Scene();
    // const light = new THREE.PointLight(0xffffff);
    //
    // light.position.set(15, 30, 10);
    // scene.add(light);
    scene.add(new THREE.DirectionalLight(0xffffff));
    scene.add(this._light());
    return scene;
  }

  _camera() {
    //设置相机（视野，显示口的宽高比，近裁剪面，远裁剪面）
    const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    //设置相机的视点
    camera.position.set(0, 70, 100);
    //设置相机的朝向

    camera.lookAt(new THREE.Vector3(0, 0, 0));
    return camera;
  }

  _light() {
    const light = new THREE.AmbientLight(0x01b9cc);
    light.position.set(1, 1, 1);
    return light;
  }

  _drawFace() {
    let geom = new THREE.Geometry();

    let vertices = [
      new THREE.Vector3(10, 10, 0), //v0

      new THREE.Vector3(-10, 10, 0), //v1

      new THREE.Vector3(-10, -10, 0), //v2

      new THREE.Vector3(10, -10, 0), //v3

      new THREE.Vector3(10, 10, 10), //v4

      new THREE.Vector3(-10, 10, 10), //v5

      new THREE.Vector3(-10, -10, 10), //v6

      new THREE.Vector3(10, -10, 10), //v7
    ];
    let faces = [
      // back
      new THREE.Face3(0, 1, 2),

      new THREE.Face3(0, 2, 3),

      // front
      new THREE.Face3(4, 5, 6),

      new THREE.Face3(4, 6, 7),

      //up
      new THREE.Face3(0, 1, 5),

      new THREE.Face3(0, 5, 4),

      //down
      new THREE.Face3(7, 6, 2),

      new THREE.Face3(7, 2, 3),

      //left
      new THREE.Face3(6, 5, 1),

      new THREE.Face3(6, 1, 2),

      //right
      new THREE.Face3(0, 4, 7),

      new THREE.Face3(0, 7, 3)

    ];
    geom.vertices = vertices;
    geom.faces = faces;

    //生成法向量

    geom.computeFaceNormals();
    geom.mergeVertices();
    return geom;
  }

  componentDidMount() {
    const renderer = this._renderer();
    const scene = this._scene();
    const camera = this._camera();
    const geom = this._drawFace();
    const material = new THREE.MeshLambertMaterial({color: 0x00ffff,transparent:true,opacity:0.8});
    const mesh = new THREE.Mesh(geom, material);
    mesh.position.x = 0;

    mesh.position.y = 5;

    mesh.position.z = -5;
    scene.add(mesh);
    renderer.render(scene, camera);
    // 添加交互插件
    const controls = new Orbitcontrols(camera, renderer.domElement);
    controls.autoRotate = true;

    function animate() {
      controls.update();
      window.requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }

}

export default DrawFace;