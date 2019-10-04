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
        <div className="grid-container">
            <div className="item0">spacer</div>
            <div className="item10">spacer2</div>
            <div className="item1">
              Register
            </div>
            <div className="item2">
              Please register below
            </div>        
            <div className="item3">Email</div>
            <div className="item4"><input className="item4" type="email" name="email" onChange={(e) => this.inputHandler(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
            </div>
            <div className="item5"><label className="form-label item5">Password</label></div><br/>
            <div className="item6"><input className="item6" type="password" name="password" onChange={(e) => this.inputHandler(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
            </div>
            <div className="item7"><label className="form-label item7">Confirm Password</label></div><br/>
            <div className="item8"><input className="item8" type="password" name="password_two" onChange={(e) => this.inputHandler(e)} pattern={this.state.password} title="Must match first password field" required></input>        
            </div>
            <div className="item9">
              <button className="butn-corner is-primary item9" value="register" type="submit">Register</button>
            </div>
            {/* <div>{this.props.userAlert}</div> */}
        </div>    
      </form>

      </React.Fragment>

    )
  }
}

