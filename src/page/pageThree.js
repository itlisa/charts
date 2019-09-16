import React, {useRef, useState, useEffect} from 'react';
import DashBoards from '../component/dashboards/Dashboards';
import WaterPie from '../component/waterPie/dashBoard';
import StreetDelicacies from '../component/streetDelicacies/StreetDelicacies.js';
import Map from '../component/gaoDeMap/GaoDeMap';
import ClassExtends from '../component/videoMaterial/ClassExtends';
import FbxLoader from '../component/fbxLoader/FbxLoader';
import Chart from '../component/chart/Chart';
import PieChart from '../component/pieChart/PieChart';

export default () => {
  const [data, setData] = useState(null);
  const [surData, setSurData] = useState(null);
  const [msg, setMsg] = useState(null);

  // 树图贴图
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    const datas = {name: '返乡大学生占乡村大学生数量', value: 70};
    const surData = {name: '男性未婚占男性比重', value: 68};
    setData(datas);
    setSurData(surData);

    // 树图贴图

    const treeDatas = [
      {name: '乡镇村', value: 0},
      {name: '基层', value: 0},
      {name: '乡镇数量', value: 23},
      {name: '党员人数', value: 81785},
      {name: '组织负责人', value: 0},
      {name: '村长', value: 2228},
      {name: '村支书', value: 2228},
      {name: '自然村', value: 4282},
      {name: '特色旅游村', value: 154}
    ];

    setTreeData(treeDatas);

  }, []);
  useEffect(() => {
    // console.log(msg);
  });

  return (
    <div>
      <ul className={'software'}>
        <li>
          <DashBoards width={380} height={280} datas={data}/>
        </li>

        {/*<li>*/}
        {/*<DashBoards width={380} height={280} datas={surData} titleFormatter={[5, 4]}/>*/}
        {/*</li>*/}

        <li>
          <Map width={'100%'} height={'100%'}/>
        </li>

        <li>
          <FbxLoader width={500} height={300}/>
        </li>

        <li style={{width: 800, height: 400}}>
          <WaterPie width={800} height={400}/>
        </li>

        <li style={{width: 500, height: 400}}>
          <StreetDelicacies
            getMsg={(d) => {
              setMsg(d);
            }}
            width={500}
            height={400}/>
        </li>

        <li style={{width: 800, height: 200}}>
          <Chart width={800} height={197} datas={treeData}/>
        </li>

        <li>
           <PieChart initPadVal={60}/>
        </li>
      </ul>
    </div>
  )
}