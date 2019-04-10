import React, {Component} from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import PageOne from './page/pageOne';
import PageTwo from './page/pageTwo';
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
            </ul>
            <Route exact path={'/'} component={PageTwo}></Route>
            <Route path={'/pageOne'} component={PageOne}></Route>
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App;