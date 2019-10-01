import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './components/UserProfle.jsx';
import Homepage from './components/Homepage.jsx';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      page: 'homepage'
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  componentDidMount() {
    
  }

  clickHandler(e) {
    const { value } = e.target;
    this.setState({
      page: value
    })
  }

  loginHandler(e) {
    //get email and password input from login page
    e.preventDefault();
    const email = e.target.getAttribute('email');
    const password = e.target.getAttribute('password');
    console.log('email',e.target.getAttribute('email'))
    console.log('pw',e.target.getAttribute('password'))
  }

  render () {
    switch(this.state.page){
      case 'homepage':
        return (<div><Homepage clickHandler={this.clickHandler}/></div>);
      case 'userprofile':
        return (<div><UserProfile /></div>);
      case 'login':
        return (<div><Login loginHandler={this.loginHandler}/></div>);
      case 'register':
          return (<div><Registration /></div>);
    }
    // return (
    // <div>
    //   <UserProfile />
    // </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));