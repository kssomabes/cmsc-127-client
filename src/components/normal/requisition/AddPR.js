import React, { Component} from "react";
import { Button, Modal, Checkbox, Form, Dropdown, Table } from 'semantic-ui-react';
import { showItems } from '../../../api/items';
import { addPR } from '../../../api/normal';

// this.props.value holds the userId

let someVar = []; 

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
    this.state.requests = someVar;

    addPR(someVar).then((res)=> {
      if (!res.data.data){
        alert('Internal server error. Failed to add PR');
      }else {
        if (res.data.data === 'SUCCESS'){
          console.log('here na me');
          alert('Successfully added a purchase request');
        }else{
          alert('Failed to add PR');
        }
      }
    });
    window.location.reload();
  }

  
  handleChange = (itemCode, e) => {
    let exist;

    console.log(itemCode, ' = ', e.target.value);
    let newElement = {'itemCode':itemCode, 'quantity':parseInt(e.target.value)};

    for (var i = 0; i<someVar.length; i++){

      if (someVar[i].itemCode == newElement.itemCode){
        exist = true;
        someVar.splice(i, 0, newElement);
        break;
      }else exist = false;
    }

    if (!exist) someVar.push(newElement);
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
                            <input name='quantity' onChange={(e) => this.handleChange(`${item.itemCode}`, e)}  placeholder='Request Quantity'/>
                          </Table.Cell> 
                        </Form.Field>

                        <Table.Cell collapsing></Table.Cell>
                       </Table.Row>
                    );
                  })
                }

              </Table.Body>  
            </Table>



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
