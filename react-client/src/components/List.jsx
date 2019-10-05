import React from 'react';
import ListItem from './ListItem.jsx';

// let message;
// if ((JSON.parse(props.userHistory)).length === 1) {
// message = `You've done ${ (JSON.parse(userHistory)).length } exercise in the last 30 days.`
// }
// message = `You've done ${ (JSON.parse(userHistory)).length } exercises in the last 30 days.`

const List = ( { userHistory, addExercise, deleteExercise } ) => (

  <div className="list">
    <h3> Your Exercises </h3>
    
    <h5>You've done { (JSON.parse(userHistory)).length } exercise in the last 30 days.</h5>
    {/* {message} */}
    <div className="table-container">
        <table className="table-header" border="1">
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
      { (JSON.parse(userHistory)).reverse().map((exercise, i) => <ListItem exercise={JSON.stringify(exercise)} key={i} deleteExercise={deleteExercise} />) }
      {/* { userHistory.map((exercise, i)=> <ListItem exercise={exercise} key={i} />)} */}
    </div>
  </div>
)

export default List;