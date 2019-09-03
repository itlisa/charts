import React, {useRef, useState, useEffect} from 'react';
import DashBoards from '../component/dashboards/Dashboards';

export default () => {
  const [data, setData] = useState(null);
  const [surData, setSurData] = useState(null);
  useEffect(() => {
    const datas = {name: '返乡大学生占乡村大学生数量', value: 70};
    const surData = {name: '男性未婚占男性比重', value: 68};
    setData(datas);
    setSurData(surData);
  }, []);

  return (
    <div>
      <ul>
        <li>
          <DashBoards width={380} height={280} datas={data}/>
        </li>
        <li>
          <DashBoards width={380} height={280} datas={surData} titleFormatter={[5, 4]}/>
        </li>
      </ul>
    </div>
  )
}