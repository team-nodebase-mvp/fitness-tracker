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
    const { email, password } = this.state;
    return(
      <form id="loginForm" email={ email } password={ password } onSubmit={(e) => this.props.loginHandler(e)}>
        <div>This is Login page</div>
        <label className="label is-size-2 $control-padding-horizontal">Email</label>
        <input className="input" type="email" placeholder="e.g. joe@smith.com" onChange={(e) => this.inputHandler(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
        <label className="label is-size-2">Password</label>
        <input className="input" type="password" placeholder="Password" onChange={(e) => this.inputHandler(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
        <input className="button is-link" type="submit" value="Login"></input>
      </form>
    )
  }
}

