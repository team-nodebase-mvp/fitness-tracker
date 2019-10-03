import React from 'react';
import ListItem from './ListItem.jsx';

const List = ( { userHistory, addExercise, deleteExercise } ) => (
  <div>
    <h3> Exercises </h3>
    You've done { (JSON.parse(userHistory)).length } exercises in the last 30 days.
    { (JSON.parse(userHistory)).map((exercise, i) => <ListItem exercise={JSON.stringify(exercise)} key={i} />) }
    {/* { userHistory.map((exercise, i)=> <ListItem exercise={exercise} key={i} />)} */}
  </div>
)

export default List;