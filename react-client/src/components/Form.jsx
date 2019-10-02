import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseCategory: '',
      custom: '',
      sets: 0,
      reps: 0,
      weight: 0,
      time: 0,
      distance: 0,
      speed: 0,
      incline: 0,
      resistance: 0,
      laps: 0,
      weightSelect: 'lbs',
      distanceSelect: 'miles',
      timeSelect: 'minutes',
      speedSelect: 'mph'
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleExerciseChange = this.handleExerciseChange.bind(this);
  }

  handleCategoryChange(event) {
    this.setState({
      exerciseCategory: event.target.value
    })
  }

  handleExerciseChange(event) {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(event.target.value));
  }

  render() {
    let { exerciseCategory, custom, sets, reps, weight, time, distance, speed, incline, resistance, laps, weightSelect, distanceSelect, timeSelect, speedSelect } = this.state;
    let metrics;
    if (exerciseCategory === '') {
      metrics = '';
    } else if (exerciseCategory === 'weightLifting') {
      metrics=
      <form className="form">
        <span>
          <label>Sets: </label>
          <input name="sets" onChange={(event) => this.handleExerciseChange(event)} type="text"/>
        </span>
        <span>
          <label>Reps: </label>
          <input name="reps" onChange={(event) => this.handleExerciseChange(event)} type="text"/>
        </span>
        <span>
          <label>Weight: </label>
          <input name="weight" onChange={(event) => this.handleExerciseChange(event)} type="text" />
        <span>
          <select className="weight-select" name="weightSelect" onChange={(event) => this.handleExerciseChange(event)}>
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
          <input name="time" onChange={(event) => this.handleExerciseChange(event)} type="text"/>
        </span>
        <span>
          <select className="time-select" name="timeSelect" onChange={(event) => this.handleExerciseChange(event)}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </span>
        <span>
          <label>Distance: </label>
          <input name="distance" onChange={(event) => this.handleExerciseChange(event)} type="text"/>
        </span>
        <span>
          <select className="distance-select" name="distanceSelect" onChange={(event) => this.handleExerciseChange(event)}>
            <option value="miles" >mi</option>
            <option value="kilometers" >km</option>
          </select>
        </span>
        <span>
          <label>Speed: </label>
          <input name="speed" onChange={(event) => this.handleExerciseChange(event)} type="text"/>
        </span>
        <span>
          <select className="speed-select" name="speedSelect" onChange={(event) => this.handleExerciseChange(event)}>
            <option value="mph" >mph</option>
            <option value="kmph" >km/h</option>
          </select>
        </span>
        <span>
          <label>Incline: </label>
          <input name="incline" onChange={(event) => this.handleExerciseChange(event)} type="text"/>
        </span>
      </form>;
    } else if (exerciseCategory === 'cycling') {
      metrics=
      <form className="form">
        <span>
          <label>Time: </label>
          <input name="time" onChange={(event) => this.handleExerciseChange(event)} type="text"/>
        </span>
        <span>
          <select className="time-select" name="timeSelect" onChange={(event) => this.handleExerciseChange(event)}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </span>
        <span>
          <label>Distance: </label>
          <input name="distance" onChange={(event) => this.handleExerciseChange(event)} type="text"/>
        </span>
        <span>
          <select className="distance-select" name="distanceSelect" onChange={(event) => this.handleExerciseChange(event)}>
            <option value="miles" >mi</option>
            <option value="kilometers" >km</option>
          </select>
        </span>
        <span>
          <label>Speed: </label>
          <input type="text" name="speed" onChange={(event) => this.handleExerciseChange(event)}/>
        </span>
        <span>
          <select className="speed-select" cname="speedSelect" onChange={(event) => this.handleExerciseChange(event)}>
            <option value="mph" >mph</option>
            <option value="kmph" >km/h</option>
          </select>
        </span>
        <span>
          <label>Resistance: </label>
          <input type="text" name="resistance" onChange={(event) => this.handleExerciseChange(event)}/>
        </span>
      </form>;
    } else {
      metrics=
      <form className="form">
        <span>
          <label>Time: </label>
          <input type="text" name="time" onChange={(event) => this.handleExerciseChange(event)}/>
        </span>
        <span>
          <select className="time-select" name="timeSelect" onChange={(event) => this.handleExerciseChange(event)}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </span>
        <span>
          <label>Laps: </label>
          <input type="text" name="distance" onChange={(event) => this.handleExerciseChange(event)}/>
        </span>
        <span>
          <label>Distance: </label>
          <input type="text" name="speed" onChange={(event) => this.handleExerciseChange(event)}/>
        </span>
        <span>
          <select className="distance-select" name="distanceSelect" onChange={(event) => this.handleExerciseChange(event)}>
            <option value="miles" >mi</option>
            <option value="kilometers" >km</option>
          </select>
        </span>
        <span>
          <label>Speed: </label>
          <input type="text" name="laps" onChange={(event) => this.handleExerciseChange(event)}/>
        </span>
        <span>
          <select className="speed-select" name="speedSelect" onChange={(event) => this.handleExerciseChange(event)}>
            <option value="mph" >mph</option>
            <option value="kmph" >km/h</option>
          </select>
        </span>
      </form>;
    }

    return (
      <div>
        <div className="dropdown">
          <select className="exercise-select" name="exerciseSelect" onChange={this.handleCategoryChange}>
            <option value=""  >--Please choose an exercise--</option>
            <option value="weightLifting" >Weight-Lifting</option>
            <option value="runningWalking" >Running/Walking</option>
            <option value="cycling" >Cycling</option>
            <option value="swimming" >Swimming</option>
          </select>
        </div>
        <div>
          <form className="form">
            <div id="custom">
              <label>Custom: </label>
              <input name="custom" onChange={(event) => this.handleExerciseChange(event)} type="text"/>
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