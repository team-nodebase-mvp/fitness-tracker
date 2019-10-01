import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import axios from 'axios';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: ['exercise1', 'exercise2', 'exercise3']
    };

    this.getExercises = this.getExercises.bind(this);
    this.addExercise = this.addExercise.bind(this);
  }

  getExercises() {
    axios
    .get('/exercises')
    .then(() => {
      this.setState({
        exercises: exercises.data
      });
    })
    .catch(err => console.error(err));
  }

  addExercise(date, exerciseCategory, custom, sets, reps, weight, time, distance, speed, incline, resistance, laps) {
    axios
    .post(`exercises${email}`, { date, exerciseCategory, custom, sets, reps, weight, time, distance, speed, incline, resistance, laps })
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
          <List exercises={this.state.exercises}/>
        </div>
      </div>
    )
  }
}

export default UserProfile;