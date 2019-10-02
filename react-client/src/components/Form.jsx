import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseCategory: '',
      custom: '',
      sets: '',
      reps: '',
      weight: '',
      time: '',
      distance: '',
      speed: '',
      incline: '',
      resistance: '',
      laps: '',
      weightSelect: 'lbs',
      distanceSelect: 'miles',
      timeSelect: 'minutes',
      speedSelect: 'mph'
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleExerciseChange = this.handleExerciseChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('clicked');
    this.props.addExercise();
    this.setState({
      custom: '',
      sets: '',
      reps: '',
      weight: '',
      time: '',
      distance: '',
      speed: '',
      incline: '',
      resistance: '',
      laps: ''
    })
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
          <input name="sets" value={sets} onChange={this.handleExerciseChange} placeholder="number of sets" type="number"/>
        </span>
        <span>
          <label>Reps: </label>
          <input name="reps" value={reps} onChange={this.handleExerciseChange} placeholder="number of reps" type="number"/>
        </span>
        <span>
          <label>Weight: </label>
          <input name="weight" value={weight} onChange={this.handleExerciseChange} placeholder="weight" type="number"/>
        <span>
          <select className="weight-select" name="weightSelect" onChange={this.handleExerciseChange}>
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
          <input name="time" value={time} onChange={this.handleExerciseChange} placeholder="minutes or hours" type="number"/>
        </span>
        <span>
          <select className="time-select" name="timeSelect" onChange={this.handleExerciseChange}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </span>
        <span>
          <label>Distance: </label>
          <input name="distance" value={distance} placeholder="miles or kilometers" onChange={this.handleExerciseChange} type="number"/>
        </span>
        <span>
          <select className="distance-select" name="distanceSelect" onChange={this.handleExerciseChange}>
            <option value="miles" >mi</option>
            <option value="kilometers" >km</option>
          </select>
        </span>
        <span>
          <label>Speed: </label>
          <input name="speed" value={speed} placeholder="mph or kmph" onChange={this.handleExerciseChange} type="number"/>
        </span>
        <span>
          <select className="speed-select" name="speedSelect" onChange={this.handleExerciseChange}>
            <option value="mph" >mph</option>
            <option value="kmph" >kmph</option>
          </select>
        </span>
        <span>
          <label>Incline: </label>
          <input name="incline" value={incline} placeholder="incline setting" onChange={this.handleExerciseChange} type="number"/>
        </span>
        <span>
          <label>Laps: </label>
          <input name="laps" value={laps} placeholder="number of laps" onChange={this.handleExerciseChange} type="number"/>
        </span>
      </form>;
    } else if (exerciseCategory === 'cycling') {
      metrics=
      <form className="form">
        <span>
          <label>Time: </label>
          <input name="time" value={time} placeholder="minutes or hours" onChange={this.handleExerciseChange} type="number"/>
        </span>
        <span>
          <select className="time-select" name="timeSelect" onChange={this.handleExerciseChange}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </span>
        <span>
          <label>Distance: </label>
          <input name="distance" value={distance} placeholder="miles or kilometers" onChange={this.handleExerciseChange} type="number"/>
        </span>
        <span>
          <select className="distance-select" name="distanceSelect" onChange={this.handleExerciseChange}>
            <option value="miles" >mi</option>
            <option value="kilometers" >km</option>
          </select>
        </span>
        <span>
          <label>Speed: </label>
          <input name="speed" value={speed} placeholder="mph or kmph" onChange={this.handleExerciseChange} type="number"/>
        </span>
        <span>
          <select className="speed-select" name="speedSelect" onChange={this.handleExerciseChange}>
            <option value="mph" >mph</option>
            <option value="kmph" >km/h</option>
          </select>
        </span>
        <span>
          <label>Resistance: </label>
          <input name="resistance" value={resistance} placeholder="resistance setting" onChange={this.handleExerciseChange} type="number"/>
        </span>
      </form>;
    } else {
      metrics=
      <form className="form">
        <span>
          <label>Time: </label>
          <input name="time" value={time} placeholder="minutes or hours" onChange={this.handleExerciseChange} type="number"/>
        </span>
        <span>
          <select className="time-select" name="timeSelect" onChange={this.handleExerciseChange}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </span>
        <span>
          <label>Laps: </label>
          <input name="laps" value={laps} placeholder="number of laps" onChange={this.handleExerciseChange} type="number"/>
        </span>
        <span>
          <label>Distance: </label>
          <input name="distance" value={distance} placeholder="miles or kilometers" onChange={this.handleExerciseChange} type="number"/>
        </span>
        <span>
          <select className="distance-select" name="distanceSelect" onChange={this.handleExerciseChange}>
            <option value="miles" >mi</option>
            <option value="kilometers" >km</option>
          </select>
        </span>
        <span>
          <label>Speed: </label>
          <input name="speed" value={speed} placeholder="mph or kmph" onChange={this.handleExerciseChange} type="number"/>
        </span>
        <span>
          <select className="speed-select" name="speedSelect" onChange={this.handleExerciseChange}>
            <option value="mph" >mph</option>
            <option value="kmph" >km/h</option>
          </select>
        </span>
      </form>;
    }

    return (
      <div>
        <h3>Add an Exercise!</h3>
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
              <input name="custom" value={custom} onChange={this.handleExerciseChange} placeholder="type of exercise, etc." type="text"/>
            </div>
          </form>
        </div>
        <div className="metrics">
        {metrics}
        </div>
        <div>
          <button className="add-button" onClick={this.handleSubmit} type="button">
            Add Exercise
          </button>
        </div>
      </div>
    )
  }
}

export default Form;