import React, { Component} from "react";
import { Table, Icon, Button, Modal, Header } from 'semantic-ui-react';
import { viewItemsInPr } from '../../../api/normal';

export default class ViewPR extends Component {

	state = {
    modalOpen: false,
		items : []
	}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  componentDidMount(){
    viewItemsInPr(this.props.value).then((res) => {
      this.setState({items: res.data.data})
    });
  }

   render() {
    const {items} = this.state;

    return (
      <div>
        <Modal trigger={<Button onClick={this.handleOpen}>View</Button>} open={this.state.modalOpen} onClose={this.handleClose}>
          <Modal.Header>Items in PR #{this.props.value}</Modal.Header>
          <Modal.Content>

            <Table singleLine striped color='teal'>
              <Table.Header >
                <Table.Row >
                  <Table.HeaderCell>Item <br/> Code</Table.HeaderCell>
                  <Table.HeaderCell>Request <br/> Qty</Table.HeaderCell>
                  <Table.HeaderCell>Item <br/> Name</Table.HeaderCell>
                  <Table.HeaderCell>Item <br/> Supplier</Table.HeaderCell>
                  <Table.HeaderCell>Item <br/> Unit Price</Table.HeaderCell>
                  <Table.HeaderCell>Inventory <br/> Qty</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>


                </Table.Row>
              </Table.Header>

              <Table.Body>

                {
                items.map((item) => {
                    return (
                      <Table.Row key = {item.itemCode} >
                        <Table.Cell collapsing> {item.itemCode}</Table.Cell>
                        <Table.Cell collapsing> {item.reqQuantity}</Table.Cell>
                        <Table.Cell collapsing>{item.name}</Table.Cell>
                        <Table.Cell collapsing> {item.supplier}</Table.Cell>
                        <Table.Cell collapsing>{item.unitPrice}</Table.Cell>
                        <Table.Cell collapsing>{item.curQuantity}</Table.Cell>
                        <Table.Cell collapsing>{item.description}</Table.Cell>

                       </Table.Row>
                    );
                  })
                }
              </Table.Body>  
            </Table>

          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.handleClose}>
              BACK 
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
