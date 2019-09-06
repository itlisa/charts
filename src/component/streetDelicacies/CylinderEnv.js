import * as THREE from 'three';
import {
  General3DEnv,
} from '@jusfoun-vis/threejs-chart';
import {
  notEmptyArray
} from '../common/ValueUtil';
import {
  UA,
} from '../common/MathConstant';
import Image_bg from './bgtu.png'
// import Image_sphere from './images/sphere-01.png';

/**
 * 点状地球环境示例。
 * @author Molay
 */
class DotEarthEnv extends General3DEnv {
  constructor(option) {
    super(option);
    this.initialize();
  }

  _initLights() {
    const me = this;
  }

  _initObjects() {
    const me = this;
    const option = me._option;


    let texture = new THREE.TextureLoader().load(Image_bg);
    let material = new THREE.MeshBasicMaterial({
      map: texture,

      transparent:true,
      opacity:1
    });
    let material1 = new THREE.MeshBasicMaterial({
      color:'#4fcdce',
      transparent:true,
      opacity:0.1
    });
    let material2 = new THREE.MeshFaceMaterial([material,material1,material1]);

    let geometry = new THREE.CylinderGeometry(65, 65, 6, 128,20,false,0, 2*Math.PI);
    let cube = new THREE.Mesh(geometry, material2);
    
    me._sphere1 = cube;
    me.addObject(cube);
  }

  _initFinally() {
    const me = this;
    const option = me._option;

    const cameraPosition = option.cameraPosition || [
      0, 0, 100
    ];
    if (notEmptyArray(cameraPosition)) {
      me.camera.position.set.apply(me.camera.position, cameraPosition);
      const controls = me.controls;
      controls.update();
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;
    }

    // 0.5：实际绘制区的宽和高为resize设置值的一半，即四分之一绘制面积。
    // 1  ：1比1绘制
    // 2  ：实际绘制区的宽和高为resize设置值的两倍，即四倍绘制面积。Retina屏Mac默认使用此值，因为1个逻辑像素对应4个物理像素。
    // 注意，值越高，显示效果越精细，锯齿越少，但性能耗费呈指数级升高。
    me.renderer.setPixelRatio(1);
  }

  render() {
    const me = this;
    me._sphere1.rotation.y += 0.5 * UA;
  }
}

export default DotEarthEnv;
