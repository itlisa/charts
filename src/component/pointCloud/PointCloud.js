import React, {Component} from 'react';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols'

class Font3D extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.w = props.width || 600;
    this.h = props.height || 300;
    this.rectNum = 10;
  }

  render() {
    return (
      <div ref={'fontBox'}></div>
    )
  }

  get width() {
    return this.w;
  }

  get height() {
    return this.h;
  }

  get num() {
    return this.rectNum;
  }

  _renderer() {
    const ele = this.refs.fontBox;
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
    // scene.background = new THREE.Color('0x220044')
    scene.add(this._light());
    return scene;
  }

  _camera() {
    //设置相机（视野，显示口的宽高比，近裁剪面，远裁剪面）
    const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 10000);
    camera.position.set(0, 0, 100);
    return camera;
  }

  _light() {
    const light = new THREE.AmbientLight();
    light.position.set(1, 1, 1);
    return light;
  }

  _createFont() {
    const _num = 150;
    this.arr = [];
    //创建THREE.PointCloud粒子的容器
    const geometry = new THREE.Geometry();
    for (let j = 0; j < _num; j++) {
      let vertex = new THREE.Vector3();
      vertex.x = Math.random() * 2000 - 1000;
      vertex.y = Math.random() * 2000 - 1000;
      vertex.z = Math.random() * 2000 - 1000;
      geometry.vertices.push(vertex);
    }
    const map = new THREE.TextureLoader().load('/image/disturb.jpg');
    for (let i = 0; i < 5; i++) {
      const size = 10 * (i + 1);
      ////创建THREE.PointCloud纹理

      const material = new THREE.PointCloudMaterial({map: map, size: size, transparent: true, opacity: 0.6});
      const particles = new THREE.PointCloud(geometry, material);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;
      this.arr.push(particles);
    }
    return this.arr;
  }

  componentDidMount() {
    const renderer = this._renderer();
    const scene = this._scene();
    const camera = this._camera();
    const meshArr = this._createFont();

    //轴辅助 （每一个轴的长度）

    const object = new THREE.AxesHelper(500);

    scene.add(object);
    meshArr.forEach(t => {
      scene.add(t)
    });
    console.log(camera);
    renderer.render(scene, camera);

    // 添加控制器
    const controls = new Orbitcontrols(camera, renderer.domElement);
    // 如果使用animate方法时，将此函数删除

    //controls.addEventListener( 'change', render );

    // 使动画循环使用时阻尼或自转 意思是否有惯性

    controls.enableDamping = true;

    //动态阻尼系数 就是鼠标拖拽旋转灵敏度

    //controls.dampingFactor = 0.25;

    //是否可以缩放

    controls.enableZoom = true;

    //是否自动旋转

    controls.autoRotate = true;
    // 是否自动旋转，自动旋转速度。默认每秒30圈 2.0
    controls.autoRotateSpeed = 1.0; // 30 seconds per round when fps is 60

    //设置相机距离原点的最远距离

    // controls.minDistance = 50;

    //设置相机距离原点的最远距离

    // controls.maxDistance = 600;

    //是否开启右键拖拽

    controls.enablePan = true;

    function drawLoop() {
      controls.update();
      window.requestAnimationFrame(drawLoop);
      renderer.render(scene, camera);
    }

    drawLoop();
  }

}

export default Font3D;