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
    this.deleteExercise = this.deleteExercise.bind(this);
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
    // Make email dynamic (grab from state)
    axios.put(`/api/user?email=node@nodebase.com`, {
      // Make object dynamic (grab from state)
      exerciseCategory: 'weightLifting',
      custom: 'benchPress',
      sets: '5',
      reps: '8',
      weight: '100',
      time: null,
      distance: null,
      speed: null,
      incline: null,
      resistance: null,
      laps: null,
      weightSelect: 'lbs',
      distanceSelect: 'miles',
      timeSelect: 'minutes',
      speedSelect: 'mph'
    })
    .then((response) => {
      console.log(response);
      this.getExercises();
    })
    .catch((error) => {
      console.log(error);
    })
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
          <Form />
        </div>
        <div>
          <List 
          userHistory={this.state.userHistory}
          addExercise={this.addExercise}
          deleteExercise={this.deleteExercise}
          />
        </div>
      </div>
    )
  }
}

export default UserProfile;