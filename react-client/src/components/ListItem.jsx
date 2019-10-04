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

    if (exercise.weight === null) {
      exercise.weightSelect = '';
    } 
    if (exercise.time === null) {
      exercise.timeSelect = '';
    }
     if (exercise.distance === null) {
       exercise.distanceSelect = '';
     }
     if (exercise.speed === null) {
       exercise.speedSelect = '';
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
              <td width="10%"><div>{formattedDate}</div><div><button data-timestamp={exercise.timestamp} type="button" onClick={this.props.deleteExercise} className="butn">Delete Exercise</button></div></td>
              <td width="10%">{exercise.exerciseCategory}</td>
              <td width="30%">{exercise.custom}</td>
              <td width="5%">{exercise.sets}</td>
              <td width="5%">{exercise.reps}</td>
              <td width="5%">{exercise.weight} {exercise.weightSelect}</td>
              <td width="10%">{exercise.time} {exercise.timeSelect}</td>
              <td width="5%">{exercise.distance} {exercise.distanceSelect}</td>
              <td width="5%">{exercise.speed} {exercise.speedSelect}</td>
              <td width="5%">{exercise.incline}</td>
              <td width="5%">{exercise.resistance}</td>
              <td width="5%">{exercise.laps}</td>
            </tr>
          </tbody>
        </table>
      </div> 
        
    )

  }
}
export default ListItem;


