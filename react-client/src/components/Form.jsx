import React from 'react';
import Axios from 'axios';

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
    const s = this.state;
    const userObj = {
      email: this.props.email,
      userHistoryObj: {
        date: new Date(),
        timestamp: Date.now(),
        exerciseCategory: s.exerciseCategory,
        custom: s.custom,
        sets: s.sets,
        reps: s.reps,
        weight: s.weight,
        time: s.time,
        distance: s.distance,
        speed: s.speed,
        incline: s.incline,
        resistance: s.resistance,
        laps: s.laps,
        weightSelect: s.weightSelect,
        distanceSelect: s.distanceSelect,
        timeSelect: s.timeSelect,
        speedSelect: s.speedSelect
      }
    }

    Axios.put('/api/user', {params:userObj})
      .then((data) => {
        
      },()=>console.log('clicked', userObj))
      .then(() => {
        this.props.getExercises();
      })
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
      });
  }

  getExercises() {
    axios
    .get('/user')
    .then(() => {
      this.setState({
        userHistory: userHistory.data
      }, () => console.log(userHistory.data));
    })
    .catch(err => console.error(err));
  }

  render() {
    let { exerciseCategory, custom, sets, reps, weight, time, distance, speed, incline, resistance, laps, weightSelect, distanceSelect, timeSelect, speedSelect } = this.state;
    let metrics;
    if (exerciseCategory === '') {
      metrics = '';
    } else if (exerciseCategory === 'weightLifting') {
      metrics=
      <form className="form">
        <div>
          <label>Sets: </label>
          <input name="sets" value={sets} onChange={this.handleExerciseChange} placeholder="number of sets" type="number"/>
        </div>
        <div>
          <label>Reps: </label>
          <input name="reps" value={reps} onChange={this.handleExerciseChange} placeholder="number of reps" type="number"/>
        </div>
        <div>
          <label>Weight: </label>
          <input name="weight" value={weight} onChange={this.handleExerciseChange} placeholder="weight" type="number"/>
          <select className="weight-select" name="weightSelect" onChange={this.handleExerciseChange}>
            <option value="lbs" >lbs</option>
            <option value="kgs" >kgs</option>
          </select>
        </div>
        {/* <span>
        </span> */}
      </form>;
    } else if (exerciseCategory === 'runningWalking') {
      metrics=
      <form className="form">
        <div>
          <label>Time: </label>
          <input name="time" value={time} onChange={this.handleExerciseChange} placeholder="minutes or hours" type="number"/>
          <select className="time-select" name="timeSelect" onChange={this.handleExerciseChange}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </div>
        <div>
          <label>Distance: </label>
          <input name="distance" value={distance} placeholder="miles or kilometers" onChange={this.handleExerciseChange} type="number"/>
          <select className="distance-select" name="distanceSelect" onChange={this.handleExerciseChange}>
            <option value="miles" >mi</option>
            <option value="kilometers" >km</option>
          </select>
        </div>
        <div>
          <label>Speed: </label>
          <input name="speed" value={speed} placeholder="mph or kmph" onChange={this.handleExerciseChange} type="number"/>
          <select className="speed-select" name="speedSelect" onChange={this.handleExerciseChange}>
            <option value="mph" >mph</option>
            <option value="kmph" >kmph</option>
          </select>
        </div>
        <div>
          <label>Incline: </label>
          <input name="incline" value={incline} placeholder="incline setting" onChange={this.handleExerciseChange} type="number"/>
        </div>
        <div>
          <label>Laps: </label>
          <input name="laps" value={laps} placeholder="number of laps" onChange={this.handleExerciseChange} type="number"/>
        </div>
      </form>;
    } else if (exerciseCategory === 'cycling') {
      metrics=
      <form className="form">
        <div>
          <label>Time: </label>
          <input name="time" value={time} placeholder="minutes or hours" onChange={this.handleExerciseChange} type="number"/>
          <select className="time-select" name="timeSelect" onChange={this.handleExerciseChange}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </div>
        <div>
          <label>Distance: </label>
          <input name="distance" value={distance} placeholder="miles or kilometers" onChange={this.handleExerciseChange} type="number"/>
          <select className="distance-select" name="distanceSelect" onChange={this.handleExerciseChange}>
            <option value="miles" >mi</option>
            <option value="kilometers" >km</option>
          </select>
        </div>
        <div>
          <label>Speed: </label>
          <input name="speed" value={speed} placeholder="mph or kmph" onChange={this.handleExerciseChange} type="number"/>
          <select className="speed-select" name="speedSelect" onChange={this.handleExerciseChange}>
            <option value="mph" >mph</option>
            <option value="kmph" >km/h</option>
          </select>
        </div>
        <div>
          <label>Resistance: </label>
          <input name="resistance" value={resistance} placeholder="resistance setting" onChange={this.handleExerciseChange} type="number"/>
        </div>
      </form>;
    } else {
      metrics=
      <form className="form">
        <div>
          <label>Time: </label>
          <input name="time" value={time} placeholder="minutes or hours" onChange={this.handleExerciseChange} type="number"/>
          <select className="time-select" name="timeSelect" onChange={this.handleExerciseChange}>
            <option value="minutes" >minutes</option>
            <option value="hours" >hours</option>
          </select>
        </div>
        <div>
          <label>Laps: </label>
          <input name="laps" value={laps} placeholder="number of laps" onChange={this.handleExerciseChange} type="number"/>
        </div>
        <div>
          <label>Distance: </label>
          <input name="distance" value={distance} placeholder="miles or kilometers" onChange={this.handleExerciseChange} type="number"/>
          <select className="distance-select" name="distanceSelect" onChange={this.handleExerciseChange}>
            <option value="miles" >mi</option>
            <option value="kilometers" >km</option>
          </select>
        </div>
        <div>
          <label>Speed: </label>
          <input name="speed" value={speed} placeholder="mph or kmph" onChange={this.handleExerciseChange} type="number"/>
          <select className="speed-select" name="speedSelect" onChange={this.handleExerciseChange}>
            <option value="mph" >mph</option>
            <option value="kmph" >km/h</option>
          </select>
        </div>
      </form>;
    }

    return (
      <div>
        <h3>Add an Exercise!</h3>
        <div className="dropdown">
          <select className="exercise-select" name="exerciseSelect" onChange={this.handleCategoryChange}>
            <option value="">--Please choose an exercise--</option>
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