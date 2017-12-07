import React, { Component } from 'react';
import { Grid, Message, Header,  Button, Form, Segment } from 'semantic-ui-react'


class Login extends Component{
	constructor(props){
		super(props);

		//initialization of values for the form inputs
		this.state={
			username: '',
			password: '',
	  	message: ''
		}
	}

  
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleLogin = e => {
		e.preventDefault();
		this.props.handleLogin(this.state);
	}

	//form interface
	render(){
		return(
			<div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Purchase Requisition System
        </Header>
        <Form size='large' onSubmit={this.handleLogin}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              name='username'
              placeholder='Username'
              onChange = {this.handleChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              name='password'
              placeholder='Password'
              type='password'
              onChange = {this.handleChange}
            />

            <Button color='teal' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          No account yet?{/* <a href='#'>Sign Up</a>*/}
        </Message>
      </Grid.Column>
    </Grid>
  </div>
		);
	}
}

export default Login;