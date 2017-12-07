import React, { Component} from "react";
import { Button, Modal, Checkbox, Form, Dropdown, Table } from 'semantic-ui-react';
import { showItems } from '../../../api/items';

export default class AddDelivery extends Component {


  state = {
    modalOpen: false,
    items: []
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  submitItem = (e) => {


  }

  
  handleChange = (itemCode, e) => {
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


    const {items} = this.state;

    return (
      <div>
        <Modal trigger={<Button icon='add' onClick={this.handleOpen}> Add Delivery</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
          <Modal.Header>Add Delivery</Modal.Header>
          <Modal.Content>

          <Form onSubmit = {this.submitItem}>
            

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
