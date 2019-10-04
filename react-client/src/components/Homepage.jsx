import React from 'react';
import dumbbellicon from "../../dist/dumbbell-light.png";

const Homepage = (props) => (
  <div id="homepage" className="page is-size-7-mobile is-size-7-tablet has-text-centered">
      <div id="spacer-big"></div>
      <div id="dumbbellicon"><img src={dumbbellicon} width={300}/></div>
      <h1 className="title main-font" id="homepage_title">Fitness Tracker</h1>
      <div>
        <button className="butn is-primary" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
      </div>
      <div id="spacer-small"></div>
      <div>
        <button className="butn is-primary" value="register" onClick={(e) => props.clickHandler(e)}>Register</button>
      </div>
      <div id="spacer-big"></div>
  </div>
)
export default Homepage