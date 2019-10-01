import React, { Component } from 'react';

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    //bind yo functions
  }
  //functions here
  render() {
    return(
      <form>
        <div>This is Login page</div>
        <label>Email:</label>
        <input type="email"></input>
        <label>Password:</label>
        <input type="password"></input>
        <input type="submit" value="Login" name={this.state} onClick={(e) => this.props.loginHandler(e)}></input>
      </form>
    )
  }
}

