import React, {Component} from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import mode from './Samba Dancing.fbx';

const FBXLoader = require('three-fbx-loader');

// const FBXLoader = require('../common/FBXLoader');
// console.log(FBXLoader);

class FbxLoader extends Component {
  constructor(props) {
    super();
    this.width = props.width || 500;
    this.height = props.height || 500;
  }

  render() {
    return (
      <div ref={ref => this.fbxLoderBoxRef = ref}>
      </div>
    )
  }

  componentDidMount() {
    const ele = this.fbxLoderBoxRef;
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(this.width, this.height);
    renderer.setClearColor(0xeeeeee);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    ele.appendChild(renderer.domElement);

    // 场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.Fog(0xa0a0a0, 300, 1000); //雾的颜色，雾化开始的距离相机的位置，全雾化距离相机的位置

    //相机
    const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 2000);
    camera.position.set(100, 200, 300);

    // 添加光线
    scene.add(new THREE.AmbientLight(0x4444444));
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 200, 100);
    light.shadow.camera.top = 200;
    light.shadow.camera.bottom = -100;
    light.shadow.camera.left = -100;
    light.shadow.camera.right = 100;
    light.castShadow = true;
    scene.add(light);

    // 地板
    const planeGeometry = new THREE.PlaneBufferGeometry(2000, 2000);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, depthWrite: false});
    const mesh = new THREE.Mesh(planeGeometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // 添加网格辅助线，参数分别为 网格宽度，等分数，中心线颜色，网格线颜色
    const grid = new THREE.GridHelper(2000, 50, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);

    // 导入模型
    let mixer;
    const fbxLoader = new FBXLoader();
    fbxLoader.load(mode, function (object3d) {
      object3d.scale.set(.5, .5, .5);
      object3d.position.set(0, 0, 0);
      //添加骨骼辅助
      const meshHelper = new THREE.SkeletonHelper(object3d);
      console.log(object3d);
      scene.add(meshHelper);

      object3d.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      //AnimationMixer是场景中特定对象的动画播放器。当场景中的多个对象独立动画时，可以为每个对象使用一个AnimationMixer
      mixer = object3d.mixer = new THREE.AnimationMixer(object3d);
      //mixer.clipAction 返回一个可以控制动画的AnimationAction对象  参数需要一个AnimationClip 对象
      //AnimationAction.setDuration 设置一个循环所需要的时间，当前设置了一秒
      //告诉AnimationAction启动该动作
      const action = mixer.clipAction(object3d.animations[0]);
      action.play();
      scene.add(object3d);
    });
    renderer.render(scene, camera);

    //添加控制器
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.autoRotate = false;
    //设置控制器的中心点
    orbitControls.target.set(0, 0, 0);
    const clock = new THREE.Clock();// 用来精准计算上次调用所用时长，以及整个循环所耗费的时间

    const animation = () => {
      const time = clock.getDelta(); // 返回此次调用和上次调用间隔时长
      if (mixer) {
        mixer.update(time);
      }
      orbitControls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animation);
    };
    animation();
  }
}

export default FbxLoader;