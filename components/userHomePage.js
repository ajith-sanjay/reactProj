import React from 'react';
import ReactDOM from 'react-dom';

class UserHomePage extends React.Component {
	constructor (props) {
		super(props);
		//this.doLogOut = this.doLogOut.bind(this);
	}
	 doLogOut(e){
		 this.props.getLoggedInDetails(null);
	 }
   render() {
		  let rows = Object.keys(this.props.userDetails).map( (key) => 
		   (
		     <tr>
		       <td>{key} : </td><td>{this.props.userDetails[key]}</td>
		     </tr>
		   )
		 );
	 
	   
      return (
         <div>
            <span>welcome {this.props.userDetails.userName}</span><button onClick = {this.doLogOut.bind(this)}>Log out</button>
            <tbody>
     	   {rows}
     	 </tbody>
         </div>
      )
   }
}
export default UserHomePage;