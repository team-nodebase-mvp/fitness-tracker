import React, { Component } from 'react';

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    //bind yo functions
    this.inputHandler = this.inputHandler.bind(this);
  }
  //functions here
  inputHandler(e) {
    const { type, value } = e.target;
    this.setState({
      [type]: value
    })
  }

  render() {
    return(
      <form>
        <div>This is Login page</div>
        <label>Email:</label>
        <input type="email" onChange={(e) => this.inputHandler(e)}></input>
        <label>Password:</label>
        <input type="password" onChange={(e) => this.inputHandler(e)}></input>
        <input type="submit" value="Login" name={this.state} onClick={(e) => this.props.loginHandler(e)}></input>
      </form>
    )
  }
}

