import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './components/UserProfle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    
  }

  render () {
    return (
    <div>
      <UserProfile />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));