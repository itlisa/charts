import React, {Component} from 'react';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols'

/**
 * THREE 绘制字体模型
 * */
class Font3d extends Component {
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
    //告诉渲染器需要阴影效果

    renderer.shadowMap.enabled = true;

    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap
    return renderer;
  }

  _scene() {
    //创建场景
    const scene = new THREE.Scene();
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(120, 60, 0);
    scene.add(spotLight);
    scene.add(this._light());
    return scene;
  }

  _camera() {
    //设置相机（视野，显示口的宽高比，近裁剪面，远裁剪面）
    const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    //设置相机的视点
    camera.position.set(0, 60, 100);
    //设置相机的朝向

    camera.lookAt(new THREE.Vector3(0, 0, 0));
    return camera;
  }

  _light() {
    const light = new THREE.AmbientLight(0x444444);
    light.position.set(1, 1, 1);
    light.castShadow = true; // 投射阴影
    return light;
  }

  _drawFont() {
    const loader = new THREE.FontLoader();
    const promise = new Promise((resolve, reject) => {
      loader.load('/font/gentilis_regular.typeface.json', (res) => {
        const font = new THREE.TextBufferGeometry('are you ok?', {
          font: res,
          size: 20,
          height: 10
        });
        const material = new THREE.MeshPhongMaterial({
          color: 0x7777ff,
          side: THREE.DoubleSide,
          // transparent: true,
          // opacity: 0.8
        });
        font.center();
        const mesh = new THREE.Mesh(font, material);

        mesh.position.set(25, 5, -5);

        //告诉立方体需要投射阴影

        mesh.castShadow = true;
        resolve(mesh);
      })
    });
    return promise;
  }

  componentDidMount() {
    const renderer = this._renderer();
    const scene = this._scene();
    const camera = this._camera();

    //底部平面

    const planeGeometry = new THREE.PlaneGeometry(200, 100);

    const planeMaterial = new THREE.MeshStandardMaterial({color: 0xaaaaaa});

    const plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.rotation.x = -0.5 * Math.PI;

    plane.position.y = -10;

    //告诉底部平面需要接收阴影

    plane.receiveShadow = true;


    this._drawFont().then(res => {
      scene.add(res);
      scene.add(plane);
      renderer.render(scene, camera);
    });

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

export default Font3d;