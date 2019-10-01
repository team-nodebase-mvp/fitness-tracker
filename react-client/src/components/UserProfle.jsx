import React from 'react';
import List from './List.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }
  render() {
    return (
      <div>
        <div>
          Form
          {/* <Form /> */}
        </div>
        <div>
          List
          {/* <List /> */}
        </div>
      </div>
    )
  }
}

export default UserProfile;