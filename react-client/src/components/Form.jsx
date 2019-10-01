import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
      <div>
        <select id="exercise-select">
          <option value="">--Please choose an exercise--</option>
          <option value="Weight-Lifting">Weight-Lifting</option>
          <option value="Running/Walking">Running/Walking</option>
          <option value="Cycling">Cycling</option>
          <option value="Swimming">Swimming</option>
        </select>
      </div>
      <div>
        Custom
      </div>
      </div>
    )
  }
}

export default Form;