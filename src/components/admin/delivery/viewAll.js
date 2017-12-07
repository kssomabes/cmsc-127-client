import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon, Button } from 'semantic-ui-react';
import { getAllDelivery } from '../../../api/admin';

export default class ViewAll extends Component {

	state = {
		deliveries : []
	}


  componentDidMount(){
    getAllDelivery().then((res) => {
      this.setState({deliveries: res.data.data})
    });
  }

   render() {
    const {deliveries} = this.state;

    return (
      <Table singleLine striped color='teal'>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>Request ID </Table.HeaderCell>
            <Table.HeaderCell>User ID </Table.HeaderCell>
            <Table.HeaderCell>Date Received</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>


          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
          deliveries.map((delivery) => {
              return (
                <Table.Row key = {delivery.requestID} >
	                <Table.Cell> {delivery.requestID}</Table.Cell>
                  <Table.Cell>{delivery.userID}</Table.Cell>
                  <Table.Cell> {delivery.dateSubmitted}</Table.Cell>
                 </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}