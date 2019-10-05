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

  deleteExercise(e) {
    Axios.put(`/api/pull?email=${this.props.email}`, {
      // Each exercise needs a unique identifier
      timestamp: e.target.attributes[0].nodeValue
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
      <div className="user-profile">
        <div>
          <button className="butn" className="logout" onClick={(e) => this.props.logoutHandler(e)}>Logout</button>
          <div className="welcome">{this.props.userAlert}</div>  
        </div>
        <div className="exercise-form-container">
          <div className="exercise-form">
            <Form email={this.props.email} getExercises={this.getExercises}/>
          </div>
        </div>
        <div>
          <List userHistory={JSON.stringify(this.state.userHistory)} deleteExercise={this.deleteExercise}/>
        </div>
      </div>
    )
  }
}

export default UserProfile;