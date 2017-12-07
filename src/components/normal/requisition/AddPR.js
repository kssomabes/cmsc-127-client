import React, { Component} from "react";
import { Button, Modal, Checkbox, Form, Dropdown, Table } from 'semantic-ui-react';
import { showItems } from '../../../api/items';
// this.props.value holds the userId

export default class AddPR extends Component {


  state = {
    modalOpen: false,
    items: [],
    requests: []
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  submitPR = (e) => {
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
    showItems().then((res) => {
      this.setState({items:res.data.data});
    });
  }

   render() {

    let options = [];

    const {items} = this.state;
    for (var i=0; i<items.length; i++){
      let x = {key:items[i].itemCode, text:items[i].name, value:items[i].itemCode}
      options.push(x);
    }

    return (
      <div>
        <Modal trigger={<Button icon='add' onClick={this.handleOpen}> Add Purchase Requisition</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
          <Modal.Header>Add Purchase Requisition</Modal.Header>
          <Modal.Content>

          <Form onSubmit = {this.submitPR}>
            

            <Table singleLine striped color='teal'>
              <Table.Header >
              </Table.Header>
              <Table.Header >
                <Table.Row >
                  <Table.HeaderCell>Item <br/> Name</Table.HeaderCell>
                  <Table.HeaderCell>Current <br/> Quantity</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>

                </Table.Row>
              </Table.Header>

              <Table.Body>

                {
                items.map((item) => {
                    return (
                      <Table.Row key = {item.itemCode} >
                        <Table.Cell> {item.name}</Table.Cell>
                        <Table.Cell> {item.quantity}</Table.Cell>

                        <Form.Field>
                          <Table.Cell>
                            <input name='reqQty' onChange={this.handleChange} placeholder='Request Quantity'/>
                          </Table.Cell> 
                        </Form.Field>

                        <Table.Cell collapsing></Table.Cell>
                        <Table.Cell collapsing></Table.Cell>
                       </Table.Row>
                    );
                  })
                }

              </Table.Body>  
            </Table>



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
