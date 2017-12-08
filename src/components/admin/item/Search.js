import React, { Component} from "react";
import { Button, Modal, Checkbox, Form, Dropdown, Table } from 'semantic-ui-react';
import { findItem } from '../../../api/items';

export default class SearchInv extends Component {


  state = {
    modalOpen: false,
    items: [], 
    search: ''
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false, search: '' })

  handleSubmit = (e) => {
    findItem(this.state.search).then((res) => {
      this.setState({ items:res.data.data, modalOpen:true });

    });
   }

  handleOnChange = (e) => {
    // this.setState({searchInv: value});
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(this.state.search);
  }

   render() {


    const {items, search, modalOpen} = this.state;

    return (
      <div>
        <Modal open={modalOpen} onClose={this.handleClose}>
          <Modal.Header>Searching for Items like "{search}"</Modal.Header>
          <Modal.Content>

            <Table singleLine striped color='teal'>
              <Table.Header >
                <Table.Row >
                  <Table.HeaderCell>Item <br/> Code</Table.HeaderCell>
                  <Table.HeaderCell>Item <br/> Name</Table.HeaderCell>
                  <Table.HeaderCell>Item <br/> Supplier</Table.HeaderCell>
                  <Table.HeaderCell>Item <br/> Unit Price</Table.HeaderCell>
                  <Table.HeaderCell>Inventory <br/> Qty</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>


                </Table.Row>
              </Table.Header>

              <Table.Body>

                {
                items.map((item) => {
                    return (
                      <Table.Row key = {item.itemCode} >
                        <Table.Cell collapsing> {item.itemCode}</Table.Cell>
                        <Table.Cell collapsing>{item.name}</Table.Cell>
                        <Table.Cell collapsing> {item.supplier}</Table.Cell>
                        <Table.Cell collapsing>{item.unitPrice}</Table.Cell>
                        <Table.Cell collapsing>{item.quantity}</Table.Cell>
                        <Table.Cell collapsing>{item.description}</Table.Cell>

                       </Table.Row>
                    );
                  })
                }
              </Table.Body>  
            </Table>

          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.handleClose}>
              BACK 
            </Button>
          </Modal.Actions>
        </Modal>

        <Form onSubmit = {this.handleSubmit}>
          <Form.Input placeholder="Search Item..." name="search" onChange={this.handleOnChange}/> 
        </Form>
      </div>
    );
  }
}
