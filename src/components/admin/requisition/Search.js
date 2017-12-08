import React, { Component} from "react";
import { Button, Modal, Checkbox, Form, Dropdown, Table } from 'semantic-ui-react';
import { findPr } from '../../../api/admin';

export default class SearchPR extends Component {


  state = {
    modalOpen: false,
    prs: [], 
    search: ''
  }

  handleClose = () => this.setState({ modalOpen: false, search: '' })

  handleSubmit = (e) => {
    findPr(this.state.search).then((res) => {
      this.setState({ prs:res.data.data, modalOpen:true });

    });
   }

  handleOnChange = (e) => {
    // this.setState({searchInv: value});
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(this.state.search);
  }

   render() {


    const {prs, search, modalOpen} = this.state;

    return (
      <div>
        <Modal open={modalOpen} onClose={this.handleClose}>
          <Modal.Header>Searching for PRs that start with "{search}"</Modal.Header>
          <Modal.Content>

            <Table singleLine striped color='teal'>
              <Table.Header >
                <Table.Row >
                  <Table.HeaderCell>Request <br/> ID</Table.HeaderCell>
                  <Table.HeaderCell>User <br/> ID</Table.HeaderCell>
                  <Table.HeaderCell>Date <br/> Submitted</Table.HeaderCell>


                </Table.Row>
              </Table.Header>

              <Table.Body>

                {
                prs.map((pr) => {
                    return (
                      <Table.Row key = {pr.requestID} >
                        <Table.Cell collapsing> {pr.requestID}</Table.Cell>
                        <Table.Cell collapsing>{pr.userID}</Table.Cell>
                        <Table.Cell collapsing> {pr.dateSubmitted}</Table.Cell>

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

        <Form onSubmit = {this.handleSubmit}>
          <Form.Input placeholder="Search PR..." name="search" onChange={this.handleOnChange}/> 
        </Form>
      </div>
    );
  }
}
