import React, {Component} from 'react';
import * as THREE from 'three';
import TransformSVGPathExposed from '../common/d3-threeD';
import Orbitcontrols from 'three-orbitcontrols'
import * as dat from 'dat.gui';
import SceneUtils from '../common/SceneUtils';

/**
 * 二维平面变三维
 * */
const datGui = new dat.GUI();
class ChangeSvgTo3d extends Component {
  constructor(props) {
    super(props);
    this._root = React.createRef();
    this.width = props.width || 500;
    this.height = props.height || 300;
  }

  render() {
    return (
      <div ref={(ref) => {
        this._comBoxRef = ref;
      }}>
        <div style={{display: 'none'}}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
               width={this.width}
               height={this.height}>
            <g>
              <path id="batman-path"
                    ref={this._root}
                    d="M173,39 A200,80 0 0,1 -163,45 v80 A200,80 0 0,0 173,119"
                    fill={'rgba(255,255,255)'
                    }
              />
            </g>
          </svg>
        </div>
      </div>
    )
  }

//生成模型

  createMesh(geom) {

    //设置当前的模型矩阵沿xy轴偏移，让图片处于显示中心

    geom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));

    // 创建法向量纹理

    const meshMaterial = new THREE.MeshNormalMaterial({

      flatShading: THREE.FlatShading,

      transparent: true,

      opacity: 0.7

    });
    meshMaterial.side = THREE.DoubleSide;

    //  创建一个线框纹理

    const wireFrameMat = new THREE.MeshBasicMaterial({wireframe: true});

    // 创建模型
    const mesh = SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

    //由于图形时反的，让图形翻个个
    // mesh.rotation.z = Math.PI;

    return mesh;

  }

  renderer() {
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(this.width, this.height);
    // renderer.setClearColor(new THREE.Color(0x333333, 1.0));
    this._comBoxRef.append(renderer.domElement);
    return renderer;
  }

  scene() {
    const scene = new THREE.Scene();
    return scene;
  }

  camera() {
    const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
    camera.position.set(0, 0, 1500);
    return camera;
  }

  light() {
    const scene = this.scene();
    scene.add(new THREE.AmbientLight(0x404040));
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    return light;
  }

  initModel() {
    const scene = this.scene();
    // 生成几何体
    const shape = new THREE.ShapeGeometry(this.drawShape());
    // 创建纹理材质
    const material = new THREE.MeshPhongMaterial({color: 0xff00ff});
    material.side = THREE.DoubleSide;
    const mesh = new THREE.Mesh(shape, material);
    scene.add(mesh);
  }

  componentDidMount() {
    const renderer = this.renderer();
    const scene = this.scene();
    const camera = this.camera();
    const light = this.light();
    scene.add(light);
    //调用生成一次图形
    const gui = this.initGui();
    scene.add(gui);
    renderer.render(scene, camera);
    // 添加交互插件 ，控制鼠标拖动，旋转缩放平移操作
    const orbitcontrols = new Orbitcontrols(camera, renderer.domElement);
    //设置相机距离原点的最远距离

    orbitcontrols.minDistance = 200;

    //设置相机距离原点的最远距离

    orbitcontrols.maxDistance = 600;

    function drawLoop() {
      orbitcontrols.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(drawLoop);
    }

    drawLoop();
  }

  initGui() {
    //声明一个保存需求修改的相关数据的对象
    let gui = {

      amount: 2,

      bevelThickness: 2,

      bevelSize: 0.5,

      bevelEnabled: true,

      bevelSegments: 3,

      curveSegments: 12,

      steps: 1,

      asGeom: () => {

        // 删除旧的模型

        // scene.remove(shape);

        // 创建一个新的

        let options = {

          amount: gui.amount,

          bevelThickness: gui.bevelThickness,

          bevelSize: gui.bevelSize,

          bevelSegments: gui.bevelSegments,

          bevelEnabled: gui.bevelEnabled,

          curveSegments: gui.curveSegments,

          steps: gui.steps

        };

        const shape = this.createMesh(new THREE.ExtrudeGeometry(this.drawShape(), options));

        // 将模型添加到场景当中
        return shape;
      }

    };




    //将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）

    datGui.add(gui, 'amount', 0, 200).onChange(gui.asGeom);

    datGui.add(gui, 'bevelThickness', 0, 10).onChange(gui.asGeom);

    datGui.add(gui, 'bevelSize', 0, 10).onChange(gui.asGeom);

    datGui.add(gui, 'bevelSegments', 0, 30).step(1).onChange(gui.asGeom);

    datGui.add(gui, 'bevelEnabled').onChange(gui.asGeom);

    datGui.add(gui, 'curveSegments', 1, 30).step(1).onChange(gui.asGeom);

    datGui.add(gui, 'steps', 1, 5).step(1).onChange(gui.asGeom);

    return gui.asGeom();

  }

  //生成2d图形

  drawShape() {
    const ele = this._root.current;
    let svgString = ele.getAttribute("d");
    let shape = TransformSVGPathExposed(svgString);
    // 返回shape
    return shape;
  }
}

export default ChangeSvgTo3d;