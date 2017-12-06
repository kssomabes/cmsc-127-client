import React, { Component } from "react";
import axios from 'axios';
import { deleteMyPurchReq } from '../../../api/normal';
import { Icon, Button } from 'semantic-ui-react';

export default class ApprovePR extends Component {

  handleClick = (e) => {
    deleteMyPurchReq(this.props.value).then((res) => {
      window.location.reload();
    });
  }

  render(){

    return (
      <Button icon='delete' onClick = {this.handleClick}/>
    );

  }
}