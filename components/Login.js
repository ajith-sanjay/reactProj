import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
class Login extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
				username: '',
				password : ''
		}
		this.updateUserName = this.updateUserName.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	};
	updateUserName(e){
		this.setState({username : e.target.value});
	}
	updatePassword(e){
		this.setState({password : e.target.value});
	}
	handleEvent(e){
		const url = 'http://localhost:8080/springHelloWorld/v1/login';
		axios.post(url, {"userName" : this.state.username, "password" : this.state.password})
		.then(response => {
			//this.setState({username: response.data[0].name})
			if(response.data === null || response.data === ""){
				alert('wrong user naeme or paswword');
				 this.props.getLoggedInDetails(null);
			}
			else{
				
				alert("successfully logged in");
				 this.props.getLoggedInDetails(response.data);
			}
		}  );
	}

	render() {
		return (
				<div>
				user name : <input type = "text" value = {this.state.username} 
				onChange = {this.updateUserName} />
				Password : <input type = "password" value = {this.state.password} 
				onChange = {this.updatePassword} />
				<input type="button" value="LOGIN" onClick = {this.handleEvent.bind(this)}/>
				<div>{this.state.username} </div>
				</div>
				
		)
	}
}
export default Login;