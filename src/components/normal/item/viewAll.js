import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon, Button } from 'semantic-ui-react';
import { showItems } from '../../../api/items';

export default class ViewAll extends Component {

	state = {
		items : []
	}

  componentDidMount(){
    showItems().then((res) => {
      this.setState({items: res.data.data})
    });
  }

   render() {


    const {items} = this.state;

    return (
      <Table singleLine striped color='teal'>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>Item <br/> Code </Table.HeaderCell>
            <Table.HeaderCell>Item <br/> Name </Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Description </Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
          items.map((item) => {
              return (
                <Table.Row key = {item.itemCode} >
                  <Table.Cell> {item.itemCode}</Table.Cell>
	                <Table.Cell> {item.name}</Table.Cell>
                  <Table.Cell> {item.quantity}</Table.Cell>
                  <Table.Cell> {item.description}</Table.Cell>

                 </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}