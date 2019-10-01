import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
    <div>
      { this.props.exercise } { this.props.exercise }
    </div>
    )
  }
}

export default ListItem;