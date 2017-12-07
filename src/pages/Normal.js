import React, { Component } from 'react';
import { getSession } from '../api/auth';
import Requisitions from '../components/normal/requisition/viewAll'
import Orders from '../components/normal/order/viewAll';
import Items from '../components/normal/item/viewAll';
import Deliveries from '../components/normal/delivery/viewAll';
import AddPR from './../components/normal/requisition/AddPR'
import { Input, Menu, Segment } from 'semantic-ui-react'

class Admin extends Component{
	constructor(props){
		super(props);

	  this.state = { 
	  	activeItem: 'home',
	  	userId : '',
	  	accountType: ''
	  }
	

	}

	handleItemClick = (e, { name }) => 

	{
		this.setState({ activeItem: name })	
	}

	componentDidMount(){
		getSession().then((res) => {
			this.setState({
				userId: res.data.user.userID,
				accountType: res.data.user.accountType
			});
		});
	}
	
	render(){

		let display = {};		
		const { activeItem } = this.state
		if (activeItem ==='home') display = <Requisitions />;
		else if (activeItem === 'requisitions')
			display = <Requisitions />;
		else if (activeItem === 'orders'){ 
			display = <Orders />;
		}else if (activeItem === 'items'){ 
			console.log('active Item ', activeItem);
			display = <Items />;
		}else if (activeItem === 'deliveries'){ 
			display = <Deliveries />;
		}else console.log('active Item ', activeItem);
		
    return (
	      <Segment inverted>
	        <Menu inverted pointing secondary>
	          <Menu.Item name='home' label='Home' active={activeItem === 'home'} onClick={this.handleItemClick} />
	          <Menu.Item name='requisitions' label='Requisitions' active={activeItem === 'requisitions'}onClick={this.handleItemClick} /> 
	          <Menu.Item name='orders' label='Orders' active={activeItem === 'orders'} onClick={this.handleItemClick} />
	          <Menu.Item name='items' label='Items' active={activeItem === 'items'} onClick={this.handleItemClick} />
	          <Menu.Item name='deliveries' label='Deliveries' active={activeItem === 'deliveries'} onClick={this.handleItemClick} />
	          <Menu.Menu position='right'>
	            <Menu.Item name='search' label='Search'>
	            <Input icon='search' placeholder='Search username...'/>
	            </Menu.Item>
	            <AddPR value={this.state.userId}/>
	            <Menu.Item name='logout' label= 'Logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
	          </Menu.Menu>
	        </Menu>
	        {display}
	      </Segment>
		);
	}
}

export default Admin;