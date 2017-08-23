import css from './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './js/pages/Home.js';

import OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'



const app = document.getElementById('app');
class App extends React.Component{
	render(){
		return(
			<Home/>
		);
	}

	
}


ReactDOM.render(<App/>, app);


