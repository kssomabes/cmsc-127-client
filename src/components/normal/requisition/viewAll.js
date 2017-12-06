import React, { Component } from "react";
import axios from 'axios';
import { Table, Icon, Button } from 'semantic-ui-react';
import { getMyPurchReq, deleteMyPurchReq } from '../../../api/normal';
import DeletePR from './DeletePR';

export default class ViewAll extends Component {

	state = {
		requisitions : [],
	}


  componentDidMount(){
    getMyPurchReq().then((res) => {
      this.setState({requisitions: res.data.data})
    });
  }

   render() {
    const {requisitions} = this.state;
    console.log('my state ', this.state.requisitions);
    return (
      <Table singleLine striped color='teal'>
        <Table.Header >
        </Table.Header>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>Request ID </Table.HeaderCell>
            <Table.HeaderCell>Date Submitted</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>


          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
          requisitions.map((requisition) => {
              return (
                <Table.Row key = {requisition.requestID} >
	                <Table.Cell> {requisition.requestID}</Table.Cell>
                  <Table.Cell> {requisition.dateSubmitted}</Table.Cell>
                  <Table.Cell collapsing><DeletePR value = {requisition.requestID}/></Table.Cell>
                 </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}