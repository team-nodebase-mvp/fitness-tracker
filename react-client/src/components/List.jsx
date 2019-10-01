import React from 'react';
import ListItem from './ListItem.jsx';

const List = ( { exercises } ) => (
  <div>
    <h4> List Component </h4>
    There are { exercises.length } exercises.
    { exercises.map((exercise, i)=> <ListItem exercise={exercise} key={i} />)}
  </div>
)

export default List;