import React from 'react';
import ListItem from './ListItem.jsx';

const List = ( { userHistory, addExercise, deleteExercise } ) => (
  <div>
    <div className="content">
      <h3> Exercises </h3>
      You've done { userHistory.length } exercises in the last 30 days.
      { userHistory.map((exercise, i) => <ListItem exercise={exercise} key={i} />)}
    </div>
    <button className="button" type="button" onClick={addExercise}>THIS BUTTON ADDS AN EXERCISE</button>
    <button className="button" type="button" onClick={deleteExercise}>THIS BUTTON REMOVES AN EXERCISE</button>
  </div>
)

export default List;