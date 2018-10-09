import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './Login.js';
import SignUp from './SignUp.js';
class loginScreen extends React.Component {
	render() {
		return (
				<div>
				<ul>
				<li><Link to={'/loginScreen/login'}>Login</Link></li>
				<li><Link to={'/loginScreen/signUp'}>Sign up</Link></li>
				</ul>
				<Switch>
				<Route exact path="/loginScreen/login" component={Login}></Route>
				<Route exact path="/loginScreen/signUp" component={SignUp}></Route>
				
				</Switch>
				</div>
		)
	}
}
export default loginScreen;