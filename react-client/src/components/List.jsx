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
    
    <h5>You've done { (JSON.parse(userHistory)).length } exercises in the last 30 days.</h5>
    {/* {message} */}
    <div className="table-container">
        <table className="table-header" border="1">
          <thead>
            <tr>
              <th width="10%">Date</th>
               <th width="10%">Exercise Category</th>
               <th width="30%">Custom</th>
               <th width="5%">Sets</th>
               <th width="5%">Reps</th>
               <th width="5%">Weight</th>
               <th width="10%">Time</th>
               <th width="5%">Distance</th>
               <th width="5%">Speed</th>
               <th width="5%">Incline</th>
               <th width="5%">Resistance</th>
               <th width="5%">Laps</th>
            </tr>
          </thead>
        </table>
      { (JSON.parse(userHistory)).reverse().map((exercise, i) => <ListItem exercise={JSON.stringify(exercise)} key={i} deleteExercise={deleteExercise} />) }
      {/* { userHistory.map((exercise, i)=> <ListItem exercise={exercise} key={i} />)} */}
    </div>
  </div>
)

export default List;