import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory,IndexRoute ,Redirect} from 'react-router';
import Swiper from '../scripts/lib/swiper.min.js';
import {引导页} from './guide.js';
import {Main} from './main.js';
import {Search} from './search.js';
import {My} from './my.js';
import {Exit} from './exit.js';
//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={引导页}></Route>
        	<Route path='/main/home' components={Main}></Route>    
    </Router>
), document.getElementById('app'));



