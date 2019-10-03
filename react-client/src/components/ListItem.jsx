import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    // console.log('exercise object parsed',JSON.parse(this.props.exercise));
    // console.log('data I want',JSON.parse(this.props.exercise).sets);
    const exercise = JSON.parse(this.props.exercise);
    console.log(exercise.date);
    
    // exercise.date = Date.parse(exercise.date);
    return (
      <div>
        <div>
        <table className="table" border="1">
          <tbody>
            <tr>
              <td>{exercise.date}</td>
              <td>{exercise.exerciseCategory}</td>
              <td>{exercise.custom}</td>
              <td>{exercise.sets}</td>
              <td>{exercise.reps}</td>
              <td>{exercise.weight} {exercise.weightSelect}</td>
              <td>{exercise.time} {exercise.timeSelect}</td>
              <td>{exercise.distance} {exercise.distanceSelect}</td>
              <td>{exercise.speed} {exercise.speedSelect}</td>
              <td>{exercise.incline}</td>
              <td>{exercise.resistance}</td>
              <td>{exercise.laps}</td>
            </tr>
          </tbody>
        </table>
        </div> 
      </div>
    )

  }
}
export default ListItem;


