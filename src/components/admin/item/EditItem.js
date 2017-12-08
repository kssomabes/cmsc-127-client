import React, { Component} from "react";
import { Button, Modal, Checkbox, Form, Dropdown, Table } from 'semantic-ui-react';
import { editItem } from '../../../api/admin';

export default class Edited extends Component {


  state = {
    modalOpen: false,
    itemCode: this.props.value.itemCode,
    name: this.props.value.name,
    supplier: this.props.value.supplier,
    unitPrice: this.props.value.unitPrice,
    quantity: this.props.value.quantity,
    description: this.props.value.description
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  submitItem = (e) => {
    e.preventDefault();
    let hasEdited = false;

    console.log('my current state', this.state);

    let body = {
      itemCode: this.state.itemCode,
      name: this.state.name,
      supplier: this.state.supplier,
      unitPrice: this.state.unitPrice,
      quantity: this.state.quantity,
      description: this.state.description
    }


    body.unitPrice = parseFloat(body.unitPrice).toFixed(2);
    body.quantity = parseInt(body.quantity).toFixed(0);

    body.unitPrice = parseFloat(body.unitPrice);
    body.quantity = parseInt(body.quantity);

      // call API
      editItem(body).then((res) => {
        if (res.data.data === 'SUCCESS'){
          alert(`Successfully edited Item # ${this.state.itemCode}`);
          window.location.reload();
        }else alert('No changes were made!');
      });
    this.handleClose();
    }
  

  
  handleChange = (e) => {

      this.setState({
  			[e.target.name]: e.target.value
  		});
      
  }


   render() {


    const {
       itemCode
       ,name
       ,supplier
       ,unitPrice
       ,quantity
       ,description
    } = this.state;

    return (
      <div>
        <Modal trigger={<Button icon='add' onClick={this.handleOpen}> Edit Item</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
          <Modal.Header>Edit Item</Modal.Header>
          <Modal.Content>

          <Form onSubmit = {this.submitItem}>


            <Form.Field>
              <label>Item Code</label>
              <input disabled value = {itemCode} name = 'itemCode'/>
            </Form.Field>

            <Form.Field>
              <label>Name</label>
              <input value = {name} name = 'name' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Supplier</label>
              <input value = {supplier} name = 'supplier' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Unit Price</label>
              <input  value = {unitPrice} name = 'unitPrice' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Quantity</label>
              <input value = {quantity} name = 'quantity' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Description</label>
              <input value = {description} name = 'description' onChange = {this.handleChange}/>
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
