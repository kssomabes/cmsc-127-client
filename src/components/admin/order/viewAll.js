import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon, Button } from 'semantic-ui-react';
import { getPoAndItems } from '../../../api/admin';
import ViewPO from './ViewPO';

export default class ViewAll extends Component {

	state = {
		orders : [],
	}

  componentDidMount(){
    getPoAndItems().then((res) => {
      this.setState({orders: res.data.data})
    });

  }

   render() {
    const {orders} = this.state;
    return (
      <Table singleLine striped color='teal'>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>Request ID </Table.HeaderCell>
            <Table.HeaderCell>User ID </Table.HeaderCell>
            <Table.HeaderCell>Date Submitted</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>


          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
          orders.map((order) => {
              return (
                <Table.Row key = {order.requestID} >
	                <Table.Cell> {order.requestID}</Table.Cell>
                  <Table.Cell>{order.userID}</Table.Cell>
                  <Table.Cell> {order.dateSubmitted}</Table.Cell>
                  <Table.Cell collapsing> <ViewPO requestID = {order.requestID} userID = {order.userID} /> </Table.Cell>

                 </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}