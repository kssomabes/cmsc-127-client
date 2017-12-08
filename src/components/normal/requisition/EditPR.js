import React, { Component} from "react";
import { Table, Button, Modal, Form } from 'semantic-ui-react';
import { editPR } from '../../../api/normal';

let someVar = [];

export default class EditPR extends Component {


  state = {
    modalOpen: false,
    items: [],
    requests: []
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })



  editPR = (e) => {
    
    e.preventDefault();
    let hasEdited = false;


    let body = {
      itemCode: this.state.item.itemCode,
      quantity: this.state.quantity
    }
    
    if (body.itemCode.length == 0) body.itemCode = this.state.item.itemCode; 
    else hasEdited = true;
    if (body.quantity.length == 0) body.quantity = this.state.item.quantity; 
    else hasEdited = true;

    body.quantity = parseInt(body.quantity).toFixed(0);

    body.itemCode = parseInt(body.unitPrice);
    body.quantity = parseInt(body.quantity);

    if (hasEdited){
      // call API
      editPR(body).then((res) => {
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
    console.log('he');
    // console.log(this.props.value);
    this.setState({item: this.props.value});

    console.log(this.state);
  }

   render() {


    const {items} = this.state;

    return (
      <div>
        <Modal trigger={<Button icon='edit' onClick={this.handleOpen}> Edit PR</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
          <Modal.Header>Edit PR</Modal.Header>
          <Modal.Content>

          <Form onSubmit = {this.editPR}>
            

            <Table singleLine striped color='teal'>
              <Table.Header >
              </Table.Header>
              <Table.Header >
                <Table.Row >
                  <Table.HeaderCell>Item <br/> Code</Table.HeaderCell>
                  <Table.HeaderCell>Requested <br/> Quantity</Table.HeaderCell>
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
