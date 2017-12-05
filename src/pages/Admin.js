import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import axios from 'axios';
import NavBar from '../components/admin/navbar';

class Admin extends Component{
	constructor(props){
		super(props);

		this.state = {
      adminId: '',
			userId: ''
		}
	}

	componentDidMount(){
		fetch(`http://localhost:3001/session`) //insert dynamic JS variables and values
		.then((response) => {
		return response.json () 
		}) //returns in JSON format	
		.then((result) => {
			this.setState({
				adminId: result.data.adminID,
				userId: result.data.userID
			}); //stores the result to the corresponding attributes admin
		}).then((response) => {return response.json () })
		.catch((e) => { console.log(e); })

	}
	
	render(){

		return(
			
				<NavBar/>
      
		);
	}
}

export default Admin;