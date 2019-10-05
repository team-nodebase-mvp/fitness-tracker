import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './components/UserProfile.jsx';
import Homepage from './components/Homepage.jsx';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      page: 'homepage',
      email: '',
      userAlert: '',
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.backHomeHandler = this.backHomeHandler.bind(this);
  }

  componentDidMount() {
    
  }

  clickHandler(e) {
    const { value } = e.target;
    this.setState({
      page: value,
      userAlert: value === 'login' ? 'Please login below.' : 'Please register below.'
    })
  }

  loginHandler(e) {
    //get email and password input from login page
    e.preventDefault();
    const email = e.target.getAttribute('email');
    const password = e.target.getAttribute('password');
    const form = document.getElementsByTagName('form')[0];
    //check database to authenticate username and password
    const userObj = {
      email: email,
      password: password
    }
    Axios.get('/api/user', {params:userObj})
      .then((data) => {
        if(data.data.password === password){
          this.setState({
            page: 'userprofile',
            email: email,
            userAlert: `Welcome ${email}!`
          }, () => console.log(`post success`, data.data))
        }else {
          form.reset();
          this.setState({
            page: 'login',
            userAlert: `Login credentials were incorrect!`
          })
        }
      })
      .catch((err) => {
        this.setState({
          page: 'login',
          userAlert: `Login credentials were incorrect!`
        })//() => form.reset())
      })
  }

  logoutHandler(e) {
    e.preventDefault();
    this.setState({
      page: 'login',
      userAlert: `You are now logged out!`
    })
  }
  backHomeHandler(e) {
    e.preventDefault();
    this.setState({
      page: 'homepage',
      userAlert: 'Please login to continue.'
    })
  }

  registerHandler(e) {
    e.preventDefault();
    const email = e.target.getAttribute('email');
    const password = e.target.getAttribute('password');
    // const type = document.getElementsByClassName('grid-container').length > 0 ? 'register' : 'login';

    const userObj = {
      email: email,
      password: password,
      userHistory: []
    }
    //check database to make sure email doesn't already exist
    Axios.post('/api/user', {params:userObj})
      .then((data) => {
        this.setState({
          page: 'userprofile',
          email: email,
          userAlert: `Welcome ${email}!`
        }, () => console.log(`post success`, data.data))
      })
      .catch((err) => {
        this.setState({
          page: 'register',
          userAlert: `User ${email} already exists!`,      
        });
      })
  }


  render () {
    switch(this.state.page){
      case 'homepage':
        return (<div><Homepage clickHandler={this.clickHandler}/></div>);
      case 'userprofile':
        return (<div><UserProfile userAlert={this.state.userAlert} email={this.state.email}logoutHandler={this.logoutHandler}/></div>);
      case 'login':
        return (<div><Login userAlert={this.state.userAlert} loginHandler={this.loginHandler} email={this.state.email} backHomeHandler={this.backHomeHandler}/></div>);
      case 'register':
        return (<div><Registration registerHandler={this.registerHandler} userAlert={this.state.userAlert} email={this.state.email} backHomeHandler={this.backHomeHandler}/></div>);
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app')); 