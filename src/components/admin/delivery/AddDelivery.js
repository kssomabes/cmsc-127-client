import React, { Component} from "react";
import { Button, Modal, Checkbox, Form, Dropdown, Table } from 'semantic-ui-react';
import { showItems } from '../../../api/items';
import { addDelivery } from '../../../api/admin';

export default class AddDelivery extends Component {


  state = {
    modalOpen: false,
    items: [],
    requestID: ''
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  submitItem = (e) => {

    var b = parseInt(this.state.requestID).toFixed(0);

    let body = {
      requestID: b
    }

    addDelivery(body).then((res) => {
      if (res.data.data === 'SUCCESS') alert("Successfully added delivered material");
      else alert("Failed to add delivered material");
    });
    
    this.handleClose();
    window.location.reload();
  }

  
  handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
  }

  componentDidMount(){
    showItems().then((res) => {
      this.setState({items:res.data.data});
    });
  }

   render() {



    return (
      <div>
        <Modal trigger={<Button icon='add' onClick={this.handleOpen}> Add Delivery</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
          <Modal.Header>Add Delivery</Modal.Header>
          <Modal.Content>

          <Form onSubmit = {this.submitItem}>
            
          <Form.Field required>
            <label>Request ID</label>
            <input placeholder='Request ID' name = 'requestID' onChange = {this.handleChange}/>
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
