import React, {useRef, useEffect, useState} from 'react';

// 引入水球饼图组件
import WaterPie from './WaterPie';

// 引入中心仪表盘
import DashBoard from './dashBoardChart';

// 引入背景图片
import bg_pic from './bg.png';

/**
 * 仪表盘主图
 * */
export default (props) => {
  // 水球饼图数据
  const [leftPieData, setLeftPieData] = useState(null); //left
  const [rightPieData, setRightPieData] = useState(null); //right

  // 仪表盘数据
  const [dashBoardData, setDashBoardData] = useState(null);

  useEffect(() => {

    // 左侧水球饼图数据
    const pieDatas_l = [{
      name: '长期就业',
      value: 100
    }, {
      name: '长期就业',
      value: 60
    }, {
      name: '长期就业',
      value: 40
    }, {
      name: '长期就业',
      value: 70
    }];
    setLeftPieData(pieDatas_l);


    // 右侧水球饼图数据
    const pieDatas_r = [{
      name: '因病',
      value: 100
    }, {
      name: '因病',
      value: 60
    }, {
      name: '因病',
      value: 40
    }, {
      name: '因病',
      value: 70
    }, {
      name: '因病',
      value: 80
    }];
    setRightPieData(pieDatas_r);

    // 仪表盘数据
    let dashBoardChart = {
      name: '占运城总人口比重',
      value: 64
    };

    setDashBoardData(dashBoardChart);
  }, []);

  return (
    <div style={{width: props.width, height: props.height, position: 'relative'}}>

      <img src={bg_pic} alt="背景图片"/>

      {/* 左边饼图 */}
      <WaterPie width={188}
                height={203}
                datas={leftPieData}
                colors={['#028fff', '#00cfff', '#2bfdb6', '#fff200']}
                top={110}
                left={72}/>

      {/* 右边饼图 */}
      <WaterPie width={188}
                height={203}
                datas={rightPieData}
                colors={['#028fff', '#00cfff', '#2bfdb6', '#27dd5f', '#fff200']}
                top={110}
                left={610}/>

      <DashBoard width={280} height={280} top={45} left={298} datas={dashBoardData}/>
    </div>
  )
}
