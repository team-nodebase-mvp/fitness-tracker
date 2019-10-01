import React from 'react';

const Homepage = (props) => (
  <div>
      <div>This is homepage</div>
      <button value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
      <button value="register" onClick={(e) => props.clickHandler(e)}>Register</button>
  </div>
)
export default Homepage