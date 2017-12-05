import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { getMyPurchReq, getMyPurchOrder } from './../api/normal';


class Normal extends Component {

	constructor(props){
		super(props);

		this.state = {
			purchReq : [],
			purchOrder : []
		}
	}
	componentDidMount() {
		
		getMyPurchReq().then((res) => {
			this.setState({purchReq: res.data.data});
		});

		getMyPurchOrder().then((res) => {
			this.setState({purchOrder: res.data.data});
		});
	}


	render() {
					console.log('hihi ', this.state);

		if (this.state.x === 1) {
			console.log('...........');
			return (
				<div> 
					<h1> Cute ako </h1>
				</div>

			);
		} else {
			return (
				<div> 
					<h1> Cute kami </h1>
				</div>

			);
		}
	}
}

export default Normal;