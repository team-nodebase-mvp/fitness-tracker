import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import Axios from 'axios';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userHistory: []
    };

    this.getExercises = this.getExercises.bind(this);
  }

  getExercises() {
    const userObj = {
      email: this.props.email,
    }
    Axios.get('/api/user', {params:userObj})
    .then((data) => {
      this.setState({
        userHistory: data.data.userHistory
      })
      console.log(`getdatt`,data)
    })
    .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getExercises();
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={(e) => this.props.logoutHandler(e)}>Logout</button>
        </div>
        {this.props.userAlert}
        <div>
          <Form email={this.props.email} getExercises={this.getExercises}/>
        </div>
        <div>
          <List userHistory={JSON.stringify(this.state.userHistory)}/>
        </div>
      </div>
    )
  }
}

export default UserProfile;