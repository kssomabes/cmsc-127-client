import React, { Component} from "react";
import { Button, Modal, Checkbox, Form, Dropdown, Table } from 'semantic-ui-react';
import { editItem } from '../../../api/admin';

export default class Edited extends Component {


  state = {
    modalOpen: false,
    item: [],
    name: '',
    supplier: '',
    unitPrice: '',
    quantity: '',
    description: ''
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  submitItem = (e) => {
    e.preventDefault();
    let hasEdited = false;

    console.log('my current state', this.state);

    let body = {
      itemCode: this.state.item.itemCode,
      name: this.state.name,
      supplier: this.state.supplier,
      unitPrice: this.state.unitPrice,
      quantity: this.state.quantity,
      description: this.state.description
    }

    if (body.name.length == 0) body.name = this.state.item.name; 
    else hasEdited = true;
    if (body.supplier.length == 0) body.supplier = this.state.item.supplier;
    else hasEdited = true;
    if (body.unitPrice.length == 0) body.unitPrice = this.state.item.unitPrice; 
    else hasEdited = true;
    if (body.quantity.length == 0) body.quantity = this.state.item.quantity; 
    else hasEdited = true;
    if (body.description.length == 0) body.description = this.state.item.description; 
    else hasEdited = true;

    body.unitPrice = parseFloat(body.unitPrice).toFixed(2);
    body.quantity = parseInt(body.quantity).toFixed(0);

    body.unitPrice = parseFloat(body.unitPrice);
    body.quantity = parseInt(body.quantity);

    if (hasEdited){
      // call API
      editItem(body).then((res) => {
        if (res.data.data === 'SUCCESS'){
          alert(`Successfully edited Item # ${this.state.item.itemCode}`);
          window.location.reload();
        }
      });

    }else{
      alert('No changes were made!');
    }

    this.handleClose();
  }

  
  handleChange = (e) => {

      this.setState({
  			[e.target.name]: e.target.value
  		});
      
  }



  componentDidMount(){

    this.setState({item:this.props.value});

    console.log('your data ', this.props.value);
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
              <label>Item Code</label>
              <input disabled defaultValue = {item.itemCode || ''} name = 'itemCode'/>
            </Form.Field>

            <Form.Field>
              <label>Name</label>
              <input defaultValue = {item.name || ''} name = 'name' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Supplier</label>
              <input defaultValue = {item.supplier || ''} name = 'supplier' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Unit Price</label>
              <input  defaultValue = {item.unitPrice || ''} name = 'unitPrice' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Quantity</label>
              <input defaultValue = {item.quantity || ''} name = 'quantity' onChange = {this.handleChange}/>
            </Form.Field>

            <Form.Field>
              <label>Description</label>
              <input defaultValue = {item.description || ''} name = 'description' onChange = {this.handleChange}/>
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
