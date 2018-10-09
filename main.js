import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Route, Link, Switch} from 'react-router-dom';
import App from './App.jsx';
import Login from './components/Login.js';
import userHomePage from './components/userHomePage.js';
ReactDOM.render(
		<Router>
		<App />		 
		</Router>, document.getElementById('app'));