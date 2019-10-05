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
      <React.Fragment>
      <form className="page" email={ email } password={ password } onSubmit={(e) => this.props.loginHandler(e)}>
        <div className="grid-container-login">
        <div className="item0"></div>
        <div className="item1 main-font">
          Login
        </div>
        <div className="item11"></div>
        <div className="item2 medium-font">
          Please login below.
        </div>
        <div className="item3 label-font">* Email</div>
        <div className="item4"><input className="item4" type="email" name="email" placeholder="e.g. joe@smith.com" onChange={(e) => this.inputHandler(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input></div>
        <div className="item5 label-font">* Password</div><br/>
        <div className="item6"><input className="item6" type="password" name="password" placeholder="Password" onChange={(e) => this.inputHandler(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input></div>
        <div className="item9">
              <button className="butn-corner is-primary item9" value="Login" type="submit">Login</button>
        </div>
        <div className="item12">
              <button className="butn-corner is-primary item12" value="homepage" onClick={(e) => this.props.backHomeHandler(e)}>Cancel</button>
        </div>
        <div className="item10"></div>
        </div>
      </form>
      </React.Fragment>
    )
  }
}

