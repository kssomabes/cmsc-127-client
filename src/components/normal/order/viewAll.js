import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon, Button } from 'semantic-ui-react';
import { getMyPurchOrder } from '../../../api/normal';

export default class ViewAll extends Component {

	state = {
		orders : []
	}

  componentDidMount(){
    getMyPurchOrder().then((res) => {
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
            <Table.HeaderCell>Date Submitted</Table.HeaderCell>
            <Table.HeaderCell>Item Code</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
          orders.map((order) => {
              return (
                <Table.Row key = {order.requestID} >
	                <Table.Cell> {order.requestID}</Table.Cell>
                  <Table.Cell> {order.dateSubmitted}</Table.Cell>
                  <Table.Cell>{order.itemCode}</Table.Cell>
                  <Table.Cell>{order.quantity}</Table.Cell>
                  <Table.Cell></Table.Cell>
                  
                 </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}