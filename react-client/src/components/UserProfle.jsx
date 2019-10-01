import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: ['exercise1', 'exercise2', 'exercise3']
    };

  }
  render() {
    return (
      <div>
        <div>
          {/* Form */}
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