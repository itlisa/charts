import React, {Component} from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import PageOne from './page/pageOne';
import PageTwo from './page/pageTwo';
import PageThree from './page/pageThree';
import './App.css'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(window.location.hash);
    return (
      <div className={'App'}>
        <HashRouter>
          <div>
            <ul>
              <li><Link to={'/'}></Link></li>
              <li><Link to={'/pageOne'}></Link></li>
              <li><Link to={'/pageThree'}></Link></li>
            </ul>
            <Route exact path={'/'} component={PageThree}></Route>
            <Route path={'/pageOne'} component={PageOne}></Route>
            <Route path={'/pageTwo'} component={PageTwo}></Route>
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App;