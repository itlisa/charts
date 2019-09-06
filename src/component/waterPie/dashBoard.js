import React, {useRef, useEffect, useState} from 'react';

// 引入饼图组件
import Pie from './WaterPie';

// 引入中心仪表盘
import DashBoard from './dashBoardChart';

// 引入背景图片
import bg_pic from './bg.png';

// 引入水球图
import WaveChart from './main';

/**
 * 仪表盘主图
 * */
export default (props) => {
  // 饼图数据
  const [leftPieData, setLeftPieData] = useState(null); //left
  const [rightPieData, setRightPieData] = useState(null); //right
  // 水球数据

  const [leftBallData, setLeftBallData] = useState(0); //left
  const [rightBallData, setRightBallData] = useState(0); //right
  // 仪表盘数据
  const [dashBoardData, setDashBoardData] = useState(null);


  useEffect(() => {

    // 左侧水球饼图数据
    const pieDatas_l = [{
      name: '长期就业',
      value: 40
    }, {
      name: '长期就业',
      value: 25
    }, {
      name: '长期就业',
      value: 25
    }, {
      name: '长期就业',
      value: 10
    }];
    setLeftPieData(pieDatas_l);
    setLeftBallData(pieDatas_l[0].value);

    // 右侧水球饼图数据
    const pieDatas_r = [{
      name: '因病',
      value: 20
    }, {
      name: '因病',
      value: 10
    }, {
      name: '因病',
      value: 30
    }, {
      name: '因病',
      value: 20
    }, {
      name: '因病',
      value: 20
    }];

    setRightPieData(pieDatas_r);
    setRightBallData(pieDatas_r[0].value);
    // 仪表盘数据
    let dashBoardChart = {
      name: '占运城总人口比重',
      value: 55
    };

    setDashBoardData(dashBoardChart);
  }, []);

  return (
    <div style={{width: props.width, height: props.height, position: 'relative'}}>

      <img src={bg_pic} alt="背景图片"/>

      {/* 左边饼图 */}
      <Pie width={188}
                height={203}
                datas={leftPieData}
                colors={['#028fff', '#00cfff', '#2bfdb6', '#fff200']}
                top={110}
                left={72}
                selected={(d) => {
                  setLeftBallData(d)
                }}
      />
      <WaveChart width={120}
                 height={120}
                 top={152}
                 left={106}
                 ballBorderColor={'transparent'}
                 ballBorder={1}
                 value={leftBallData}
      />


      {/* 右边饼图 */}
      <Pie width={188}
                height={203}
                datas={rightPieData}
                colors={['#028fff', '#00cfff', '#2bfdb6', '#27dd5f', '#fff200']}
                top={110}
                left={610}
                selected={(d) => {
                  setRightBallData(d)
                }}
      />
      <WaveChart width={120}
                 height={120}
                 top={152}
                 left={644}
                 ballBorderColor={'transparent'}
                 ballBorder={1}
                 value={rightBallData}
      />
      {/* 仪表盘 */}
      <DashBoard width={280} height={280} top={45} left={298} datas={dashBoardData}/>
    </div>
  )
}
