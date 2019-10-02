import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseCategory: ''
    }

    this.handleExerciseChange = this.handleExerciseChange.bind(this);
  }

  handleExerciseChange(event) {
    this.setState({
      exerciseCategory: event.target.value
    }, () => console.log(this.state.exerciseCategory));
  }

  render() {
    const exerciseCategory = this.state.exerciseCategory;
    let metrics;
    if (exerciseCategory === '') {
      metrics = '';
    } else if (exerciseCategory === 'weightLifting') {
      metrics=
      <form className="form">
        <span>
          <label>Sets: </label>
          <input type="text" name="sets" className="metric" required />
        </span>
        <span>
          <label>Reps: </label>
          <input type="text" name="reps" className="metric" required />
        </span>
        <span>
          <label>Weight: </label>
          <input type="text" name="weight" className="metric" required />
        <span>
          <select className="weight-select" onChange={this.handleExerciseChange}>
            <option value="lbs" >lbs</option>
            <option value="kgs" >kgs</option>
          </select>
        </span>
        </span>
      </form>;
    } else if (exerciseCategory === 'runningWalking') {
      metrics=
      <form className="form">
        <span>
          <label>Time: </label>
          <input type="text" name="time" className="metric" />
        </span>
        <span>
          <select className="time-select" onChange={this.handleExerciseChange}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </span>
        <span>
          <label>Distance: </label>
          <input type="text" name="distance" className="metric" />
        </span>
        <span>
          <select className="distance-select" onChange={this.handleExerciseChange}>
            <option value="miles" >mi</option>
            <option value="km" >km</option>
          </select>
        </span>
        <span>
          <label>Speed: </label>
          <input type="text" name="speed" className="metric" />
        </span>
        <span>
          <select className="speed-select" onChange={this.handleExerciseChange}>
            <option value="mph" >mph</option>
            <option value="kmph" >km/h</option>
          </select>
        </span>
        <span>
          <label>Incline: </label>
          <input type="text" name="incline" className="metric" />
        </span>
      </form>;
    } else if (exerciseCategory === 'cycling') {
      metrics=
      <form className="form">
        <span>
          <label>Time: </label>
          <input type="text" name="time" className="metric" />
        </span>
        <span>
          <select className="time-select" onChange={this.handleExerciseChange}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </span>
        <span>
          <label>Distance: </label>
          <input type="text" name="distance" className="metric" />
        </span>
        <span>
          <select className="distance-select" onChange={this.handleExerciseChange}>
            <option value="miles" >mi</option>
            <option value="km" >km</option>
          </select>
        </span>
        <span>
          <label>Speed: </label>
          <input type="text" name="speed" className="metric" />
        </span>
        <span>
          <select className="speed-select" onChange={this.handleExerciseChange}>
            <option value="mph" >mph</option>
            <option value="kmph" >km/h</option>
          </select>
        </span>
        <span>
          <label>Resistance: </label>
          <input type="text" name="resistance" className="metric" />
        </span>
      </form>;
    } else {
      metrics=
      <form className="form">
        <span>
          <label>Time: </label>
          <input type="text" name="time" className="metric" />
        </span>
        <span>
          <select className="time-select" onChange={this.handleExerciseChange}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </span>
        <span>
          <label>Laps: </label>
          <input type="text" name="distance" className="metric" />
        </span>
        <span>
          <label>Distance: </label>
          <input type="text" name="speed" className="metric" />
        </span>
        <span>
          <select className="distance-select" onChange={this.handleExerciseChange}>
            <option value="miles" >mi</option>
            <option value="km" >km</option>
          </select>
        </span>
        <span>
          <label>Speed: </label>
          <input type="text" name="laps" className="metric" />
        </span>
        <span>
          <select className="speed-select" onChange={this.handleExerciseChange}>
            <option value="mph" >mph</option>
            <option value="kmph" >km/h</option>
          </select>
        </span>
      </form>;
    }

    return (
      <div>
        <div className="dropdown">
          <select className="exercise-select" onChange={this.handleExerciseChange}>
            <option value=""  >--Please choose an exercise--</option>
            <option value="weightLifting" >Weight-Lifting</option>
            <option value="runningWalking" >Running/Walking</option>
            <option value="cycling" >Cycling</option>
            <option value="swimming" >Swimming</option>
          </select>
        </div>
        <div>
          <form className="form">
            <div >
              <label>Custom: </label>
              <input type="text" name="custom" id="custom" required />
            </div>
          </form>
        </div>
        <div className="metrics">
        {metrics}
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