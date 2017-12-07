import React, { Component} from "react";
import { Button, Modal, Checkbox, Form, Dropdown, Table } from 'semantic-ui-react';
import { showItems } from '../../../api/items';
import { addNewItem } from '../../../api/admin';

export default class AddItem extends Component {


  state = {
    modalOpen: false,
    name: '',
    supplier: '',
    unitPrice: '',
    quantity: '',
    description: ''
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  submitItem = (e) => {

    const a = parseFloat(this.state.unitPrice).toFixed(2);
    const b = parseInt(this.state.quantity).toFixed(0);

    let body = {
      name: this.state.name,
      supplier: this.state.supplier,
      unitPrice: a,
      quantity: b,
      description: this.state.description
    }

    addNewItem(body).then((res) => {
      if (res.data.data === "SUCCESS") alert("Successfully added to inventory");
      else alert("Failed to add to inventory");
    });

    this.handleClose();
  }

  
  handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
  }

 
  handleChangeName = (e) => {
    
  }

  componentDidMount(){

  }

   render() {

    return (
      <div>
        <Modal trigger={<Button icon='add' onClick={this.handleOpen}> Add Inventory</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
          <Modal.Header>Add Inventory</Modal.Header>
          <Modal.Content>

          <Form onSubmit = {this.submitItem}>

            <Form.Field required>
              <label>Name</label>
              <input placeholder='Name' name = 'name' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field required>
              <label>Supplier</label>
              <input placeholder='Supplier' name = 'supplier' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field required>
              <label>Unit Price</label>
              <input placeholder='Unit Price' name = 'unitPrice' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field required>
              <label>Quantity</label>
              <input placeholder='Quantity' name = 'quantity' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field required>
              <label>Description</label>
              <input placeholder='Description' name = 'description' onChange = {this.handleChange}/>
            </Form.Field>


          <Button type='submit'>SUBMIT</Button>
          </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.handleClose}>BACK</Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
