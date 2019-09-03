import React, {Component} from 'react';
import Bar3d from '../component/bar3d/Bar3d';
import BubbleChart from '../component/bubbleChart/BubbleChart';
import BaiduMap from '../component/baiduMap/BaiduMap';
import PointCloud from '../component/pointCloud/PointCloud';
import ChangeSvgTo3d from '../component/changeSvgTo3d/ChangeSvgTo3d';
import Box3d from '../component/box3d/Box3d';
import DrawLine3d from '../component/drawLine3d/DrawLine3d';
import Font3d from '../component/font3d/Font3d';
import DrawFace from '../component/drawFace/DrawFace';
// import Main from '../component/nongye_bar/module/main';

class PageTwo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{color: '#fff'}}>
        <ul className={'software'}>
          <li><Bar3d width={'100%'} height={"100%"}/></li>
          <li><BubbleChart width={'100%'} height={"100%"}/></li>
          <li><BaiduMap width={'100%'} height={'100%'}/></li>
          <li><PointCloud width={500} height={300}/></li>
          <li><ChangeSvgTo3d width={500} height={300}/></li>
          <li><Box3d width={500} height={300}/></li>
          <li><DrawLine3d width={500} height={300}/></li>
          <li><Font3d width={500} height={300}/></li>
          <li><DrawFace width={500} height={300}/></li>
          {/*<li><Main/></li>*/}
        </ul>
      </div>
    )
  }

  componentDidMount() {
  }
};
export default PageTwo;