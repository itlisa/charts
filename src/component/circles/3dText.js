import React, {Component} from 'react';
import './3dText.css';
import * as d3 from 'd3';

class PageOne extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul className="circles" ref={'circles'}></ul>
    )
  }

  componentDidMount() {
    const ciecleNum = 10;
    const circles = this.refs.circles;
    d3.select(circles)
      .style('--particles', ciecleNum)
      .selectAll('li')
      .data(d3.range(ciecleNum))
      .enter()
      .append('li')
      .style('--n', function (d) {
        return d+1;
      });
  }
};
export default PageOne;