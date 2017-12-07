import React, { Component} from "react";
import { Button, Modal, Form } from 'semantic-ui-react';

export default class EditPR from extends Component {


  state = {
    modalOpen: false,
    items: [],
    requests: []
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  editPR = (e) => {
    e.preventDefault();
    // Call API for submit
    console.log(this.state);
    console.log('where api');
  }

  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount(){
  	// get the PR to be editted
    viewItemsInPr(this.props.value).then((res) => {
      this.setState({items:res.data.data});
    });
  }

   render() {

    return (
      <div>
        <Modal trigger={<Button icon='add' onClick={this.handleOpen}> Add Purchase Requisition</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
          <Modal.Header>Edit 	Purchase Requisition</Modal.Header>
          <Modal.Content>

          <Form onSubmit = {this.editPR}>

          </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button type='submit'>SUBMIT</Button>
            <Button primary onClick={this.handleClose}>BACK</Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
