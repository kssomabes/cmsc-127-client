import React, { Component } from "react";
import { deleteItem } from '../../../api/admin';
import { Icon, Button } from 'semantic-ui-react';

export default class DeleteItem extends Component {

  handleClick = (e) => {
    deleteItem(this.props.value).then((res) => {
      if (res.data.data === 'DELETED') alert('Successfully deleted item');
      window.location.reload();
    });
  }

  render(){

    return (
      <Button icon='delete' onClick = {this.handleClick}/>
    );

  }
}