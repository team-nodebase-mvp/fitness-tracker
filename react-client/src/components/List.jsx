import React from 'react';
import ListItem from './ListItem.jsx';

const tableStyle = {
  overflow: 'auto'
};

// let message;
// if ((JSON.parse(props.userHistory)).length === 1) {
// message = `You've done ${ (JSON.parse(userHistory)).length } exercise in the last 30 days.`
// }
// message = `You've done ${ (JSON.parse(userHistory)).length } exercises in the last 30 days.`

const List = ( { userHistory, addExercise, deleteExercise } ) => (

  <div>
    <h3> Exercises </h3>
    
    You've done { (JSON.parse(userHistory)).length } exercises in the last 30 days.
    {/* {message} */}
    <div style={tableStyle}>
      <div>
        <table className="table" border="1">
          <thead>
            <tr>
              <th>Date</th>
              <th>Exercise Category</th>
              <th>Custom</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Weight</th>
              <th>Time</th>
              <th>Distance</th>
              <th>Speed</th>
              <th>Incline</th>
              <th>Resistance</th>
              <th>Laps</th>
            </tr>
          </thead>
        </table>
      </div>
      { (JSON.parse(userHistory)).reverse().map((exercise, i) => <ListItem exercise={JSON.stringify(exercise)} key={i} deleteExercise={deleteExercise} />) }
      {/* { userHistory.map((exercise, i)=> <ListItem exercise={exercise} key={i} />)} */}
    </div>
  </div>
)

export default List;