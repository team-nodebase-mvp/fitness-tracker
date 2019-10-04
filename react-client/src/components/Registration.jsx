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
      <React.Fragment>
      <form className="page" email={ email } password={ password } password_two={ password_two } onSubmit={(e) => this.props.registerHandler(e)}>
          <div id="register-card">
            
          </div>
          <div id="register-title" class="main-font">Register</div>
          <div><label className="form-label">Email</label></div><br/>
          <div><input type="email" name="email" onChange={(e) => this.inputHandler(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
          </div>
          <div><label className="form-label">Password</label></div><br/>
          <div><input type="password" name="password" onChange={(e) => this.inputHandler(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
          </div>
          <div><label className="form-label">Confirm Password</label></div><br/>
          <div><input type="password" name="password_two" onChange={(e) => this.inputHandler(e)} pattern={this.state.password} title="Must match first password field" required></input>        
          </div>
          <div>
            <button className="butn-corner is-primary" value="register" type="submit">Register</button>
          </div>
          <div>{this.props.userAlert}</div>
          
      </form>

      </React.Fragment>

    )
  }
}

