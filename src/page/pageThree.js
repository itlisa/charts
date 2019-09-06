import React, {useRef, useState, useEffect} from 'react';
import DashBoards from '../component/dashboards/Dashboards';
import WaterPie from '../component/waterPie/dashBoard';
import StreetDelicacies from '../component/streetDelicacies/StreetDelicacies.js';
import Map from '../component/gaoDeMap/GaoDeMap';
import ClassExtends from '../component/videoMaterial/ClassExtends';
import FbxLoader from '../component/fbxLoader/FbxLoader';

export default () => {
  const [data, setData] = useState(null);
  const [surData, setSurData] = useState(null);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const datas = {name: '返乡大学生占乡村大学生数量', value: 70};
    const surData = {name: '男性未婚占男性比重', value: 68};
    setData(datas);
    setSurData(surData);

  }, []);
  useEffect(() => {
    console.log(msg);
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

        {/*<li>*/}
          {/*<ClassExtends width={600} height={300}/>*/}
        {/*</li>*/}


      </ul>
    </div>
  )
}