//局办编目情况
import React, {Component} from 'react';
import * as d3 from 'd3';
//css
import './PieChart.css';

class CatalogingSituation extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me._redrawChartFlag = false;

    me.state = {
      data: {
        max: 100,
        currentVal: 30
      }
    };
    // me.width = me.props.width;
    // me.height = me.props.height;
    // me.max = me.props.max;//最大值：100
    // me.currentVal = me.props.currentVal;//当前值：30
    me.initPadVal = me.props.initPadVal || 60;//初始样式格数：60
  };

  _setData(d) {
    let me = this;
    me._redrawChartFlag = true;
    this.lock = true;
    this.setState({
      data: d
    })
  };

  render() {
    return (
      <div className={'cata-situation'}>
        {/*<h5 className={'titleBg cata-situation-title'}>*/}
        {/*{this.props.title}*/}
        {/*</h5>*/}
        <div style={{width: 500, height: 300}} ref={'svgDom'}>

        </div>
      </div>
    )
  };

  lock = false;

  /* create by msh */
  _draw() {
    let me = this;
    let dom = me.refs.svgDom;
    dom.innerHTML = '';
    let width = dom.clientWidth;
    let height = dom.clientHeight;
    let svg = d3.select(dom)
      .append('svg')
      .attr('width', width)
      .attr('height', height);
    me._svg = svg;
    let g = svg.append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    //求当前值所占格数:18
    let padVal = me.initPadVal / me.state.data.max * (me.state.data.max - me.state.data.currentVal);

    //绘制弧路径
    let arc = d3.arc()
      .innerRadius(width * .18)
      .outerRadius(width * .22)
      .padAngle(0.04);
    //创建饼布局
    let pie = d3.pie()
      .value(function (d) {
        return d.value
      });
    let dataSet = [];
    for (let i = 0; i < padVal; i++) {
      let key = {};
      key.value = 1.1;
      key.name = "trueFlag";
      dataSet.push(key)
    }

    for (let j = 0; j < me.initPadVal - padVal; j++) {
      let key = {};
      key.value = 1;
      key.name = "falseFlag";
      dataSet.push(key);
    }

    //饼图数据格式转换
    let pieData = pie(dataSet);
    // console.log(pieData);
    //开始绘制
    let arcPath = g.selectAll('path')
      .data(pieData.sort(function (a, b) {
        return a.index - b.index;
      }))
      .enter()
      .append('path')
      .transition()
      // .duration(500)
      .delay(function (d, i) {
        return i * 5;
      })
      .attr('d', function (d) {
        return arc(d)
      })
      .transition()
      .duration(1000)
      .delay(function (d, i) {
        return i * 5;
      })
      .attr('fill', function (d) {
        if (d.data.name === "trueFlag") {
          return "#ff1f6e"
        } else {
          return "#2ef9fe";
        }
      });
    //添加文字
    let textVal = g.append('text')
      .attr("dy", function (d) {
        return 5;
      })
      .attr("font-size", "36px")
      .attr("font-family", "微软雅黑")
      .style("text-anchor", function (d) {
        return "middle";
      })
      .text(me.state.data.currentVal + "%")
      .attr("fill", '#00f0ff');

    let textTxt = g.append('text')
      .attr("dy", function (d) {
        return 30;
      })
      .attr("font-size", "14px")
      .attr("font-family", "微软雅黑")
      .style("text-anchor", function (d) {
        return "middle";
      })
      .text('有效数据占比')
      .attr("fill", '#30b4ff');

    let tipArc = 360 / me.initPadVal * padVal / 2;

    let x = Math.sin(tipArc / 180 * Math.PI) * width * .22;
    let y = Math.cos(tipArc / 180 * Math.PI) * width * .22;

    let tip_g = g.append('g')
      .attr('transform', 'translate(' + x + ',' + (-y) + ')');
    //添加路径
    tip_g.append('path')
      .attr("d", function () {
        if (tipArc < 90) {
          return "M 0,0 L25,-15 H108"
        } else if (tipArc < 180 && tipArc >= 90) {
          return "M 0,0 L25,15 H108"
        }

      })
      .attr('fill', 'none')
      .attr('stroke', '#ff1f6e');
    //添加提示文字
    tip_g.append('text')
      .attr("dy", function (d) {
        if (tipArc < 90) {
          return -20;
        } else if (tipArc < 180 && tipArc >= 90) {
          return 8;
        }
      })
      .attr("dx", function (d) {
        return 65;
      })
      .attr("font-size", "14px")
      .attr("font-family", "微软雅黑")
      .style("text-anchor", function (d) {
        return "middle";
      })
      .text('异常数据')
      .attr("fill", '#30b4ff');

    tip_g.append('text')
      .attr("dy", function (d) {
        if (tipArc < 90) {
          return 15;
        } else if (tipArc < 180 && tipArc >= 90) {
          return 45;
        }
      })
      .attr("dx", function (d) {
        return 75;
      })
      .attr("font-size", "25px")

      .attr("font-family", "微软雅黑")
      .style("text-anchor", function (d) {
        return "middle";
      })
      .text(Math.floor((me.state.data.max - me.state.data.currentVal) / me.state.data.max * 100) + '%')
      .attr("fill", '#00f0ff');
  }

  componentDidMount() {
    this._draw();
  }

  componentDidUpdate() {
    let me = this;
    if (me.state.data || me.lock) {
      if (me._redrawChartFlag) {
        me._draw();
        me._redrawChartFlag = false;
      }
    }
    me.lock = false;
  };

  componentWillUnmount() {
    let me = this;
    // if (me._svg) me._svg.remove();
  }
}

export default CatalogingSituation;
