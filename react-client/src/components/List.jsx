import React from 'react';
import ListItem from './ListItem.jsx';

const List = ( { userHistory, addExercise, deleteExercise } ) => (
  <div>
    <h3> Exercises </h3>
    You've done { (JSON.parse(userHistory)).length } exercises in the last 30 days.
    <div>
      <table className="table" border="1">
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
      </table>
    </div>
    { (JSON.parse(userHistory)).map((exercise, i) => <ListItem exercise={JSON.stringify(exercise)} key={i} />) }
    {/* { userHistory.map((exercise, i)=> <ListItem exercise={exercise} key={i} />)} */}
  </div>
)

export default List;