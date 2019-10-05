import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    
  }

  render() {
    const exercise = JSON.parse(this.props.exercise);
    const date = new Date(exercise.date);

    const formattedDate = date.toLocaleDateString('en-US', { //short, long, 2-digit, numeric
      month: '2-digit', //long, short, 2-digit
      day: '2-digit',
      year: 'numeric', //numeric
      hour: '2-digit',
      timeZone: 'America/Los_Angeles' // 6 hours behind UTC
    });

    const rowCollapse = {
      display: 'none'
    }

    let custom, sets, reps, weight, time, distance, speed, incline, resistance, laps;

    if (exercise.custom === null) {
      custom = <td style={rowCollapse}>{exercise.custom}</td>;
    } else {
      custom = <td>{exercise.custom}</td>;
    }

    if (exercise.sets === null) {
      sets = <td style={rowCollapse}>{exercise.sets}</td>;
    } else {
      sets = <td>{exercise.sets}</td>;
    }

    if (exercise.reps === null) {
      reps = <td style={rowCollapse}>{exercise.reps}</td>;
    } else {
      reps = <td>{exercise.reps}</td>;
    }

    if (exercise.incline === null) {
      incline = <td style={rowCollapse}>{exercise.incline}</td>;
    } else {
      incline = <td>{exercise.incline}</td>;
    }

    if (exercise.resistance === null) {
      resistance = <td style={rowCollapse}>{exercise.resistance}</td>;
    } else {
      resistance = <td>{exercise.resistance}</td>;
    }

    if (exercise.laps === null) {
      laps = <td style={rowCollapse}>{exercise.laps}</td>;
    } else {
      laps = <td>{exercise.laps}</td>;
    }

    if (exercise.weight === null) {
      weight = <td style={rowCollapse}>{exercise.weight} {exercise.weightSelect}</td>;
    } else {
      weight = <td>{exercise.weight} {exercise.weightSelect}</td>;
    }

    if (exercise.time === null) {
      time = <td style={rowCollapse}>{exercise.time} {exercise.timeSelect}</td>;
    } else {
      time = <td>{exercise.time} {exercise.timeSelect}</td>;
    }

    if (exercise.distance === null) {
      distance = <td style={rowCollapse}>{exercise.distance} {exercise.distanceSelect}</td>;
    } else {
      distance = <td>{exercise.distance} {exercise.distanceSelect}</td>;
    }

    if (exercise.speed === null) {
      speed = <td style={rowCollapse}>{exercise.speed} {exercise.speedSelect}</td>;
    } else {
      speed = <td>{exercise.speed} {exercise.speedSelect}</td>;
    }

    if (exercise.exerciseCategory === 'weightLifting') {
      exercise.exerciseCategory = 'Weight Lifting';
    } 
    if (exercise.exerciseCategory === 'runningWalking') {
      exercise.exerciseCategory = 'Running & Walking';
    }
    if (exercise.exerciseCategory === 'cycling') {
      exercise.exerciseCategory = 'Cycling';
    }
    if (exercise.exerciseCategory === 'swimming') {
      exercise.exerciseCategory = 'Swimming';
    }

    return (
      <div className="content">
        <table className="table-body" border="1">
          <tbody>
            <tr>
              <td ><div>{formattedDate}</div><div><button data-timestamp={exercise.timestamp} type="button" onClick={this.props.deleteExercise} className="butn">Delete Exercise</button></div></td>
              <td>{exercise.exerciseCategory}</td>
              {/* <td>{exercise.custom}</td> */}
              {custom}
              {/* <td>{exercise.sets}</td> */}
              {sets}
              {/* {/* <td>{exercise.reps}</td> */}
              {reps}
              {/* <td>{exercise.weight} {exercise.weightSelect}</td> */}
              {weight}
              {/* <td>{exercise.time} {exercise.timeSelect}</td> */}
              {time}
              {/* <td>{exercise.distance} {exercise.distanceSelect}</td> */}
              {distance}
              {/* <td>{exercise.speed} {exercise.speedSelect}</td> */}
              {speed}
              {/* <td>{exercise.incline}</td> */}
              {incline}
              {/* <td>{exercise.resistance}</td> */}
              {resistance}
              {/* <td>{exercise.laps}</td> */}
              {laps}
            </tr>
          </tbody>
        </table>
      </div> 
        
    )

  }
}
export default ListItem;


