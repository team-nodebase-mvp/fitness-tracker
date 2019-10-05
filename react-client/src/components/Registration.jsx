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
      <form className="loginpage" email={ email } password={ password } password_two={ password_two } onSubmit={(e) => this.props.registerHandler(e)}>
        <div className="grid-container">
            <div className="item0"></div>
            <div className="item1 main-font">
              Register
            </div>
            <div className="item11"></div>
            <div className="item2 medium-font">
              Please register below.
              <div>{this.props.userAlert}</div>  
            </div>    
            <div className="item3 label-font">* Email</div>
            <div className="item4"><input className="item4" type="email" name="email" placeholder="e.g. joe@smith.com" onChange={(e) => this.inputHandler(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></input>
            </div>
            <div className="item5 label-font">* Password</div><br/>
            <div className="item6"><input className="item6" type="password" name="password" placeholder="Password" onChange={(e) => this.inputHandler(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
            </div>
            <div className="item7 label-font">* Confirm Password</div><br/>
            <div className="item8"><input className="item8" type="password" name="password_two" onChange={(e) => this.inputHandler(e)} pattern={this.state.password} title="Must match first password field" required></input>        
            </div>
            <div className="item9">
              <button className="butn-corner is-primary item9" value="register" type="submit">Register</button>
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

