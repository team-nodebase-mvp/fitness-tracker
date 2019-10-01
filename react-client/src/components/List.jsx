import React from 'react';
import ListItem from './ListItem.jsx';

const List = ( { exercises } ) => (
  <div>
    <h4> Exercises </h4>
    You've done { exercises.length } exercises in the last 30 days.
    { exercises.map((exercise, i)=> <ListItem exercise={exercise} key={i} />)}
  </div>
)

export default List;