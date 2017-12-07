import React, { Component} from "react";
import { Button, Modal, Checkbox, Form, Dropdown, Table } from 'semantic-ui-react';
import { specificItem } from '../../../api/items';

export default class Edited extends Component {


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

    console.log('body ', body);

    this.handleClose();
  }

  
  handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
  }

 
  getInitialValue = (e) => {
    console.log(e.name);
    console.log('here me');

  }

  componentDidMount(){
    specificItem().then((res) => {
      this.setState({item:res.data.data});
    });
  }

   render() {


    const {item} = this.state;

    return (
      <div>
        <Modal trigger={<Button icon='add' onClick={this.handleOpen}> Edit Item</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
          <Modal.Header>Edit Item</Modal.Header>
          <Modal.Content>

          <Form onSubmit = {this.submitItem}>



            <Form.Field>
              <label>Name</label>
              <input placeholder='Name' value = {this.getInitialValue} name = 'name' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Supplier</label>
              <input placeholder='Supplier' name = 'supplier' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Unit Price</label>
              <input placeholder='Unit Price' name = 'unitPrice' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Quantity</label>
              <input placeholder='Quantity' name = 'quantity' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
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
