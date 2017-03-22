import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory,IndexRoute ,Redirect} from 'react-router';
import {Home} from './home.js';
import {Search} from './search.js';
import {My} from './my.js';
import {Exit} from './exit.js';
var Main = React.createClass({
    render(){
        return (
             <div className="m-container">
               <div className="m-wrapper" id='m-wrapper'>
               </div>
               <footer>
                  <ul>
                       <li >
                          <a href='#/main/home'>
                            <i href='#/main/home' className="yo-ico">&#xe6bb;</i>
                            <b>首页</b>
                          </a>
                       </li>
                       <li>
                          <a href='#/main/search'>
                            <i href='#/main/search' className="yo-ico">&#xe65c;</i>
                            <b>发现</b>
                          </a>
                       </li>
                       <li>
                          <i  className="yo-ico">&#xe664;</i>
                       </li>
                       <li>
                          <a href='#/main/my'>
                            <i href='#/main/my' className="yo-ico">&#xe735;</i>
                            <b>我的</b>
                          </a>
                        </li>
                       <li>
                          <a href='#/main/exit'>
                            <i href='#/main/exit' className="yo-ico">&#xe603;</i>
                            <b>退出</b>
                          </a>
                       </li>
                    </ul>
               </footer>
            </div>
        );
    },
    componentDidMount(){
        ReactDom.render((
          <Router history={hashHistory}>
              <Route path='/main/home' components={Home}></Route>
              <Route path='/main/search' components={Search}/>
              <Route path='/main/my' components={My}/>
              <Route path='/main/exit' components={Exit}/>
          </Router>
      ), document.getElementById('m-wrapper'));
    }
});
export {
	Main
}