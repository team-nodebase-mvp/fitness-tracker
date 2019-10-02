import React from 'react';
import ListItem from './ListItem.jsx';

const List = ( { userHistory } ) => (
  <div>
    <h4> Exercises </h4>
    You've done { userHistory.length } exercises in the last 30 days.
    { userHistory.map((exercise, i)=> <ListItem exercise={exercise} key={i} />)}
  </div>
)

export default List;