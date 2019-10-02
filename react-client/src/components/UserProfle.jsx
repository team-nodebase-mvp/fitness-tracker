import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import axios from 'axios';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userHistory: []
    };

    this.getExercises = this.getExercises.bind(this);
    this.addExercise = this.addExercise.bind(this);
  }

  getExercises() {
    axios
    .get('/user')
    .then(() => {
      this.setState({
        userHistory: userHistory.data
      }, () => console.log(userHistory.data));
    })
    .catch(err => console.error(err));
  }

  addExercise() {
    axios
    .put(`/api/user?email=${this.props.email}`,
      updateUserInfo(query, body)
    )
    .then(() => {
      this.getExercises();
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
          <Form />
        </div>
        <div>
          <List userHistory={this.state.userHistory}/>
        </div>
      </div>
    )
  }
}

export default UserProfile;