import React, {Component} from 'react';
import * as THREE from 'three';
import SceneUtils from '../common/SceneUtils';
import Orbitcontrols from 'three-orbitcontrols'

/**
 * THREEJS第一个hello world
 * */
class Box3d extends Component {
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

  componentDidMount() {
    //创建场景

    const scene = new THREE.Scene();

    //设置相机（视野，显示口的宽高比，近裁剪面，远裁剪面）

    const camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 10000);

    // 设置光照

    const dLight = new THREE.DirectionalLight(0x404040);//平行光
    const aLignt = new THREE.AmbientLight(0xffffff); // 环境光
    scene.add(dLight);
    scene.add(aLignt);

    //渲染器

    let renderer = new THREE.WebGLRenderer({antialias: true});

    //设置渲染器的高度和宽度，如果加上第三个值 false，则按场景大小显示，等比例缩放

    renderer.setSize(this.width, this.height, false);

    //将渲染器添加到html当中

    const ele = this._comBoxRef.current;
    ele.appendChild(renderer.domElement);


    //盒子模型（BoxGeometry），这是一个包含立方体所有顶点和填充面的对象。

    let geom = new THREE.BoxGeometry(1, 2, 1);

    //使用网孔基础材料（MeshBasicMaterial）进行着色器，这里只绘制了一个绿色

    let materials = [
      new THREE.MeshLambertMaterial({opacity: 0.6, color: 0x117635, transparent: true}),// 透明的绿色材质
      new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true}) // 网格
    ];

    //使用网孔(Mesh)来承载几何模型

    let mesh = SceneUtils.createMultiMaterialObject(geom, materials);// 这个方法支持多种材质组合
    mesh.children.forEach(function (e) {
      e.castShadow = true // 阴影
    });

    //将模型添加到场景当中

    scene.add(mesh);

    //将相机沿z轴偏移5

    camera.position.z = 5;

    // 添加交互插件
    const orbitcontrols = new Orbitcontrols(camera, renderer.domElement);


    //设置一个动画函数

    let animate = function () {

      //一秒钟调用60次，也就是以每秒60帧的频率来绘制场景。
      orbitcontrols.update();
      requestAnimationFrame(animate);


      //每次调用模型的沿xy轴旋转0.01

      mesh.rotation.x += 0.01;

      mesh.rotation.y += 0.01;

      //使用渲染器把场景和相机都渲染出来

      renderer.render(scene, camera);

    };


    animate();
  }

}

export default Box3d;