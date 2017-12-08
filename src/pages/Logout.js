import React, { Component } from 'react';

class Logout extends Component{
	constructor(props){
		super(props);

		//initialization of values for the form inputs
		this.state={
			username: '',
			password: '',
	  	message: ''
		}
	}


	handleLogout = e => {
		e.preventDefault();
		this.props.handleLogout();
	}

	render(){
		return(
			<div>

			</div>
		)

	}
}

export default Logout;