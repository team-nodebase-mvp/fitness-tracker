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
    this.deleteExercise = this.deleteExercise.bind(this);
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

  deleteExercise() {
    axios.put(`/api/pull?email=node@nodebase.com`, {
      // Each exercise needs a unique identifier
      exerciseCategory: 'weightLifting'
    })
    .then((response) => {
      console.log(response);
      this.getExercises();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getExercises();
  }

  render() {
    return (
      <div>
        {this.props.userAlert}
        <div>
          <Form email={this.props.email} getExercises={this.getExercises}/>
        </div>
        <div>
          <List userHistory={JSON.stringify(this.state.userHistory)}/>
        </div>
        <button type="button" onClick={this.addExercise}>THIS BUTTON ADDS AN EXERCISE</button>
        <button type="button" onClick={this.deleteExercise}>THIS BUTTON REMOVES AN EXERCISE</button>
      </div>
    )
  }
}

export default UserProfile;