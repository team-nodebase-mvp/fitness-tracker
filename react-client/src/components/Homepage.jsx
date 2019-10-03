import React from 'react';

const Homepage = (props) => (
  <div id="homepage" className="page">
      <div id="homepage_title">Fitness Tracker</div>
      <div>
        <button value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
      </div>
      <div>
        <button value="register" onClick={(e) => props.clickHandler(e)}>Register</button>
      </div>
      <button value="userprofile" onClick={(e) => props.clickHandler(e)}>UserProfile</button>
  </div>
)
export default Homepage