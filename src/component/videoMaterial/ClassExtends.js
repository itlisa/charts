import React, {Component} from 'react';
import * as THREE from 'three';
import OrbitContral from 'three-orbitcontrols';
import mp4 from './sintel.mp4';

class ClassExtends extends Component {
  constructor(props) {
    super();
    this.width = props.width / 2;
    this.height = props.height;
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <video type={'video'}  controls width={this.width} height={this.height}
               ref={ref => this.videoRef = ref}>
          <source src={mp4} type='video/mp4;' codecs="avc1.42E01E, mp4a.40.2"/>
        </video>
        <div ref={ref => this.boxRef = ref} style={{width: this.width, height: this.height}}></div>
      </div>
    )
  }

  componentDidMount() {
    const ele = this.boxRef;
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(this.width, this.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xeeeeee); // 告诉渲染器需要阴影效果
    renderer.shadowMap.enabled = true;
    ele.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    camera.position.set(6, 0, 12);

    scene.add(new THREE.AmbientLight(0x444444));
    const light = new THREE.DirectionalLight(0xffffff);
    light.castShadow = true;
    light.position.set(0, 20, 20);
    light.shadow.camera.top = 10;
    light.shadow.camera.bottom = -10;
    light.shadow.left = -10;
    light.shadow.camera.right = 10;
    scene.add(light);

    const geometry = new THREE.BoxGeometry(10, 5, 5);

    const videoEle = this.videoRef;

    // 通过video对象实例化纹理
    const texture = new THREE.VideoTexture(videoEle);

    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping; // 默认设置，纹理边缘的像素会被拉伸，以填满剩下的空间;
    texture.minFilter = THREE.LinearFilter; // 线性滤波纹理

    const material = new THREE.MeshBasicMaterial({map: texture});

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer.render(scene, camera); // scene camera 渲染顺序不能变


    //添加控制器
    const orbitContral = new OrbitContral(camera, renderer.domElement);
    orbitContral.autoRotate = false;

    const animation = () => {
      window.requestAnimationFrame(animation);
      orbitContral.update();
      renderer.render(scene, camera);
    };
    animation();
  }
}

export default ClassExtends;






