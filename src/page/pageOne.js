import React, {Component} from 'react';
import MagicCircle from '../component/circles/3dText';
import Ball from '../component/ball/Ball';
import Rain from '../component/rain/Rain';
import CssTree from '../component/cssTree/cssTree';
import Wave from '../component/pixelGrid/PixelGrid';
import Arc from '../component/arc/Arc';
import ForceChart from '../component/forceChart/ForceChart';
import LinePath from '../component/linePath/LinePath';
import ChordPath from '../component/chordChart/ChordChart';

class PageOne extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul className={'software'}>
          <li><MagicCircle/></li>
          <li><Ball/></li>
          <li><Rain/></li>
          <li><CssTree/></li>
          <li><Wave/></li>
          <li><Arc/></li>
          <li><ForceChart/></li>
          <li><LinePath/></li>
          <li><ChordPath/></li>
        </ul>
      </div>
    )
  }
};
export default PageOne;