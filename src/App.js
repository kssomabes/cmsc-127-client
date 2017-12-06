import React, { Component } from 'react';
import Admin from './pages/Admin'
import Home from './pages/Home';
import Login from './pages/Login';
import Normal from './pages/Normal'


import PurchReq from './components/admin/requisition/viewAll';

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'; //gives you access to additional slashes to your address
import { login, getSession } from './api/auth';
                            
                                                                  
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: null,
      isLoggingIn: true
    }
    
  }


  loginUser = credentials => {
    const {history} = this.props;
    login(credentials).then((res, err) => {
      if (err) {
        alert("Error!");
      } else {
        this.setState({ user: res.data.user });
        alert("Logged in!");
      }
    })
    
  }

  componentDidMount() {

    getSession().then((res) => {
      this.setState({
        user: res.data.user,
        isLoggingIn: false
      })
    })
  }

  renderThis = () => {
    if (this.state.isLoggingIn){
      return <h1> Logging In </h1>
    }else{
      if (this.state.user){

        if (this.state.user.accountType === 'ADMIN'){
          return (<div>
            {/*<Route exact path="/user_admin" component={Admin} />*/}
            <Route exact path="/user_admin" render = {() => <Admin appProps = {this.state}/>} />

          </div>)
        }else if (this.state.user.accountType === 'NORMAL'){
          return (<div>
            <Route exact path="/user_normal" render = {() => <Normal appProps = {this.state}/>} />
            <Redirect to="/user_normal" />
          </div>)
        }
      }else{
        return (<div>
          <Route exact path="/" render = {() => <Login handleLogin={this.loginUser} />} />
          <Redirect to="/" />
        </div>)
      }
    }
  }



  render() {

    return (
      <div id="main">
        <title>Purchase Requisition System</title> {/*this will appear in every route since it is outside Router*/}
        <Router>
          <div id="content-container"> {/*the routes will be put here*/}
              {
                this.renderThis()
              }
            <Switch>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
