import React, {Component} from 'react';
import './cssTree.css';

class cssTree extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'branch'}></div>
        <div className={'leaves'}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}

export default cssTree;