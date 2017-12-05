//this is the Movies component where you can view and delete movies

import React, { Component } from 'react';
// import '../Movie.css';

class Admins extends Component{
	constructor(props){
		super(props);

		//this component will handle a list of movies
		this.state = {
			admins: []
		}

		//let the delete method have access to the state
		// this.deleteMovie = this.deleteMovie.bind(this);
	}

	componentDidMount(){
		fetch('/user_admin')
		.then((response) => {return response.json () }) //returns in JSON format
		.then((result) => {
			this.setState({admins: result}); //stores the result to the movies list
		})
		.catch((e) => { console.log(e); })

		console.log('State: ', this.state);
	}

	//shows the list of movies as well as the delete button next to them
	render(){
		return(
			<div className="content">
			
				<ol>
					{
						this.state.admins.map((admin) =>{
							return(
								<li key={admin.adminID}>
								<a href={`/user_admin/${admin.adminID}`}>
									{admin.adminID}
								</a>
								</li>
								
							)
						})	
					}
				</ol>
			</div>
		);
	}
}

export default Admins;