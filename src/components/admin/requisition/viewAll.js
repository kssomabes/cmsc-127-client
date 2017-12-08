import React, { Component} from "react";
import { Table } from 'semantic-ui-react';
import { getAllPurchReq } from '../../../api/admin';
import ApprovePR from './ApprovePR';
import ViewPR from './ViewPR';

export default class ViewAll extends Component {

	state = {
		requisitions : []
	}


  componentDidMount(){
    getAllPurchReq().then((res) => {
      this.setState({requisitions: res.data.data})
    });
  }

   render() {
    const {requisitions} = this.state;

    return (
      <Table singleLine striped color='teal'>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>Request ID </Table.HeaderCell>
            <Table.HeaderCell>User ID </Table.HeaderCell>
            <Table.HeaderCell>Date Submitted</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>


          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
          requisitions.map((requisition) => {
              return (
                <Table.Row key = {requisition.requestID} >
	                <Table.Cell> {requisition.requestID}</Table.Cell>
                  <Table.Cell>{requisition.userID}</Table.Cell>
                  <Table.Cell> {requisition.dateSubmitted}</Table.Cell>
                  <Table.Cell collapsing> <ApprovePR value = {requisition.requestID} /> </Table.Cell>
                  <Table.Cell collapsing> <ViewPR value = {requisition.requestID} /> </Table.Cell>

                 </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}