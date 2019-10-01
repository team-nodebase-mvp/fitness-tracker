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
  }

  componentDidMount() {
    
  }

  render () {
    switch(this.state.page){
      case 'homepage':
        return (<div><Homepage /></div>);
      case 'userprofile':
        return (<div><UserProfile /></div>);
      case 'login':
        return (<div><Login /></div>);
      case 'registration':
          return (<div><Registration /></div>);
    }
    // return (
    // <div>
    //   <UserProfile />
    // </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));