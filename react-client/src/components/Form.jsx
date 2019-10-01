import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseCategory: ''
    }
  }

  

  render() {
    const exerciseCategory = this.state.exerciseCategory;
    let metrics;
    if (this.state.exerciseCategory === '') {
      metrics = ''
    } else if (this.state.exerciseCategory === 'weightLifting') {

    }

    return (
      <div>
        <div className="dropdown">
          <select className="exercise-select">
            <option value="">--Please choose an exercise--</option>
            <option value="weight-lifting">Weight-Lifting</option>
            <option value="running/walking">Running/Walking</option>
            <option value="cycling">Cycling</option>
            <option value="swimming">Swimming</option>
          </select>
        </div>
        <div>
          <form className="form">
            <div >
              <label for="name">Custom: </label>
              <input type="text" name="custom" id="custom" required />
            </div>
          </form>
        </div>
        <div className="metrics">
          <form className="form">
            <span>
              <label for="name">Sets: </label>
              <input type="text" name="sets" id="metric" required />
            </span>
            <span>
              <label for="name">Reps: </label>
              <input type="text" name="weight" id="metric" required />
            </span>
            <span>
              <label for="name">Weight: </label>
              <input type="text" name="weight" id="metric" required />
            </span>
          </form>
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