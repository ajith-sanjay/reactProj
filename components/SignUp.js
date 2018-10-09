import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Route, Link, Switch,Redirect } from 'react-router-dom';
class SignUp extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
				username : "",
				password : "",
				rePassword : "",
				email : "",
				contactNumber : "",
				toDashboard : false
		};
		this.updateForm = this.updateForm.bind(this);
		this.handleForm = this.handleForm.bind(this);
	}
	updateForm(e){
		console.log('sdf');
		this.setState({
			[e.target.name] : e.target.value
		});
	}
	handleForm(e){
		e.preventDefault();
		const url = 'http://localhost:8080/springHelloWorld/v1/signUp';
		console.log({"userName": this.state.username , "password": this.state.password, "email":  this.state.email, "contactNumber" :  this.state.contactNumber});
		axios.post(url, {"userName": this.state.username , "password": this.state.password, "email":  this.state.email, "contactNumber" :  this.state.contactNumber})
		.then((response) =>{
			if(response.data == true){
				alert("successfully entered");
				this.setState(() => ({
			        toDashboard: true
			      }))
			}
			else{
				alert("failed to submit ur details...please try again");
			}
		}).catch(function (error) {
		    console.log(error);
		  });
		
	}
   render() {
	   if (this.state.toDashboard === true) {
		      return <Redirect to='/login' />
		    }
      return (
    		  <div>
    		  <form  onSubmit = {this.handleForm}>
				user name : <input type = "text" value = {this.state.username} name="username"
				onChange = {this.updateForm} />
				Password : <input type = "password" value = {this.state.password} name="password"
				onChange = {this.updateForm} />
				Re-type Password : <input type = "password" value = {this.state.rePassword} name="rePassword"
				onChange = {this.updateForm} />
				E-mail ID : <input type = "text" value = {this.state.email} name="email"
				onChange = {this.updateForm} />
				Contact number : <input type = "text" value = {this.state.contactNumber} name="contactNumber"
				onChange = {this.updateForm} />
				
				<input type="submit" value="Submit"/>
				</form>
				</div>
      )
   }
}

export default SignUp;