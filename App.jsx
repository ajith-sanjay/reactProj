import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch,Redirect } from 'react-router-dom';
import Login from './components/login.js';
import SignUp from './components/signUp.js';
import UserHomePage from './components/userHomePage.js';

class App extends React.Component {
   constructor() {
    super();
		   this.state = {
			   LoggedIn : null
		   };
		   this.eventHandler  = this.eventHandler.bind(this);
	   };
	   eventHandler (data) {
		  
			   this.setState({
				   LoggedIn : data
			   })
		   
	   }
   render() {
/*	   if (this.state.LoggedIn === null) {
		      return <Redirect to='/login' />
		    }*/
      return (
         <div>
            <div>
			{this.state.LoggedIn == null ?
				<ul>
				<li><Link to={'/login'}>Login</Link></li>
				<li><Link to={'/signUp'}>Sign up</Link></li>
				</ul>
				:
			<span></span>}
				
				<Switch>
				{["/login", "/"].map((path, index) => 
				<Route exact path={path} render={()=>{
					return (this.state.LoggedIn !== null ? <Redirect to="/userPage" /> : <Login getLoggedInDetails = {this.eventHandler}/>);
				}} ></Route>
				)}
				<Route exact path="/signUp" component={SignUp}></Route>
				<Route exact path="/userPage" render={()=>{
				return (<UserHomePage userDetails = {this.state.LoggedIn} getLoggedInDetails = {this.eventHandler}/>);
				}}></Route>
				</Switch>
				</div>
         </div>
      )
   }
}
export default App;


