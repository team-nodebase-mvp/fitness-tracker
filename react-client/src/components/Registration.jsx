import React, { Component } from 'react';

export default class Registration extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_two: ''
    }
    //bind yo functions
    this.inputHandler = this.inputHandler.bind(this);
  }
  //functions here
  inputHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, password, password_two } = this.state;
    return(
      <form email={ email } password={ password } password_two={ password_two } onSubmit={(e) => this.props.registerHandler(e)}>
        <div>This is Registration page</div>
        <label>Email:</label>
        <input type="email" name="email" onChange={(e) => this.inputHandler(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
        <label>Password:</label>
        <input type="password" name="password" onChange={(e) => this.inputHandler(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
        <input type="password" name="password_two" onChange={(e) => this.inputHandler(e)} pattern={this.state.password} title="Must match first password field" required></input>        
        <input type="submit" name="submit" value="Register"></input>
      </form>
    )
  }
}

