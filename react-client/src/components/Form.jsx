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
        <div className="dropdown">
          <select className="exercise-select">
            <option value="">--Please choose an exercise--</option>
            <option value="Weight-Lifting">Weight-Lifting</option>
            <option value="Running/Walking">Running/Walking</option>
            <option value="Cycling">Cycling</option>
            <option value="Swimming">Swimming</option>
          </select>
        </div>
        <div>
          <form className="form">
            <div class="form-example">
              <label for="name">Custom: </label>
              <input type="text" name="custom" id="custom" required />
            </div>
          </form>
        </div>
        <div className="metrics">
          
        </div>
        <div>
          <button className="add-button" type="button">
            Add Exercise
          </button>
        </div>
      </div>
    )
  }
}

export default Form;