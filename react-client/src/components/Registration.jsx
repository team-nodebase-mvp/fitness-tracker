import React, { Component } from 'react';

export default class Registration extends Component{
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
    const { email, password } = this.state;
    return(
      <form email={ email } password={ password } onSubmit={(e) => this.props.loginHandler(e)}>
        <div>This is Registration page</div>
        <label>Email:</label>
        <input type="email" onChange={(e) => this.inputHandler(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
        <label>Password:</label>
        <input type="password" onChange={(e) => this.inputHandler(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
        <input type="submit" value="Register"></input>
      </form>
    )
  }
}

