import React, {Component} from 'react';
import echarts from 'echarts';
import echartsGl from 'echarts-gl';
import barIcon from './barBg.png';
import './Bar3d.css';

class Bar3d extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      xData: ['基层社区示范改造', '农民专业合作社', '农村综合合作社', '三社融合发展试点', '签约服务涉农经营主体'],
      yData: [2018, 2019, 2020]
    };
  }

  render() {
    return (
      <div style={{position: 'relative',height: this.props.height}}>
        <div className={'labelLine'}>
          <div ref={'labelBox'} className={'labelBox'}></div>
        </div>
        <div ref={'bar'} style={{width: this.props.width, height: this.props.height}}></div>
      </div>
    )
  }

  componentDidMount() {
    const xData = this.state.xData;
    const yData = this.state.yData;
    let seriesData = [];
    xData.forEach((x, i) => {
      yData.forEach((y, j) => {
        let arr = [];
        let z = parseInt(Math.random() * 20 + 10);
        arr.push(i, j, z);
        seriesData.push(arr);
      })
    });
    const ele = this.refs.bar;
    const myCharts = echarts.init(ele);
    // 添加背景图片
    const img = new Image();
    img.src = barIcon;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = myCharts.getWidth() * window.devicePixelRatio;
    canvas.height = myCharts.getHeight() * window.devicePixelRatio;
    console.log(canvas.width, canvas.height);
    const fullImage = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 200, 200);
      fullImage.src = canvas.toDataURL();
      setTimeout(function () {
        myCharts.resize();
      }, 1000)
    };

    console.log(barIcon);
    let option = {
      backgroundColor: {
        type: "pattern",
        repeat: "repeat",
        image: fullImage
      },
      color: ["#13b8f4", "#8f46f4"],
      xAxis3D: {
        name: '',
        type: 'category',
        data: yData,
        splitLine: {show: false},
        boundaryGap: true,
        axisTick: {show: false},
        axisLabel: {
          color: '#fff',
          fontSize: 14
        },
        axisLine: {
          lineStyle: {
            width: 0
          }
        },
      },
      yAxis3D: {
        name: '',
        type: 'category',
        data: xData,
        splitLine: {show: false},
        boundaryGap: true,
        axisTick: {show: false},
        axisLine: {
          lineStyle: {
            width: 0
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 14
        }
      },
      zAxis3D: {
        name: '',
        type: 'value',
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {
          lineStyle: {
            width: 0
          }
        },
        axisLabel: {
          show: false
        }
      },
      grid3D: {
        // show: false,
        projection: 'perspective',
        boxWidth: 150,
        boxDepth: 100,
        viewControl: {distance: 260},
        light: {
          main: {
            intensity: 1.2,
            shadow: true
          },
          ambient: {
            intensity: 0.3
          }
        },
      },

      series: [{
        name: '为农服务',
        type: 'bar3D',
        stack: 'stack',
        barSize: 10,
        // bevelSize: 0.4,
        // bevelSmoothness: 4,
        data: seriesData.map(function (item) {
          return {
            name: '为农服务',
            value: [item[1], item[0], item[2]]
          }
        }),
        shading: 'color',
        label: {
          show: false,
          textStyle: {
            fontSize: 16,
            borderWidth: 1
          }
        },
        itemStyle: {
          opacity: 0.8,
        },
        emphasis: {
          label: {
            textStyle: {
              fontSize: 20,
              color: '#900'
            }
          },
          itemStyle: {
            color: '#900'
          }
        }
      }, {
        name: '为农服务（计划）',
        type: 'bar3D',
        stack: 'stack',
        barSize: 10,
        // bevelSize: 0.4,
        // bevelSmoothness: 4,
        data: seriesData.map(function (item) {
          return {
            name: '为农服务（计划）',
            value: [item[1], item[0], item[2]]
          }
        }),
        shading: 'color',
        label: {
          show: false,
          textStyle: {
            fontSize: 16,
            borderWidth: 1
          }
        },
        itemStyle: {
          opacity: 0.8
        },
        emphasis: {
          label: {
            textStyle: {
              fontSize: 20,
              color: '#900'
            }
          },
          itemStyle: {
            color: '#900'
          }
        }
      }]
    };
    myCharts.setOption(option);

    const labelBox = this.refs.labelBox;
    // myCharts.on('mouseover', (p) => {
    //   console.log(p);
    //   let inneH = `<span style=color:#02fdec;font-size: 18px;>${yData[p.data.value[0]]}年</span><p style=color:#fff;font-size: 16px; class=textVal>${p.data.value[2]}</p>
    //                <p style=color:#fff;font-size: 14px;>${xData[p.data.value[1]]}</p>`;
    //   labelBox.style.visibility = 'visible';
    //   labelBox.innerHTML = inneH;
    // });
    myCharts.on('mouseout', (p) => {
      console.log(2);
      labelBox.style.visibility = 'hidden';
    })
  }
}

export default Bar3d;