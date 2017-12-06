import React, { Component } from "react";
import axios from 'axios';
import { approveReq } from '../../../api/admin';
import { Icon, Button } from 'semantic-ui-react';

export default class ApprovePR extends Component {

	handleClick = (e) => {
		approveReq(this.props.value).then((res) => {
			window.location.reload();
		});
	}

	render(){

		return (
			<Button icon='checkmark' onClick = {this.handleClick}/>
		);

	}
}