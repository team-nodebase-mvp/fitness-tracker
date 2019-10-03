import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    const exercise = JSON.parse(this.props.exercise);
    console.log(exercise)
    const date = new Date(exercise.date);

    const formattedDate = date.toLocaleDateString('en-US', { //short, long, 2-digit, numeric
      month: '2-digit', //long, short, 2-digit
      day: '2-digit',
      year: 'numeric', //numeric
      hour: '2-digit',
      timeZone: 'America/Los_Angeles' // 6 hours behind UTC
    });

    return (
      <div>
        <div>
        <table className="table" border="1">
          <tbody>
            <tr>
              <td>{formattedDate}</td>
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


