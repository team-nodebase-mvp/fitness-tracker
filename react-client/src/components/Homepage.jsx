import React from 'react';
// import Icon from "../../dist/dumbbell-icon.svg";
import Icon2 from "../../dist/dumbbell-icon.png";

const Homepage = (props) => (
  <div id="homepage" className="page is-size-7-mobile is-size-7-tablet has-text-centered">
      <h1 className="title is-family-monospace main-font" id="homepage_title">Fitness Tracker</h1>
      <div>
        <button className="button is-primary" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
      </div>
      <div>
        <img src={Icon2} width={50}/>
      </div>
      <div>
        <button className="button is-primary" value="register" onClick={(e) => props.clickHandler(e)}>Register</button>
      </div>
<br/>
<br/>
      <div>
        <button className="button is-primary" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
        <button className="button is-dark" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
        <button className="button is-light" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
        <button className="button is-black" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
        <button className="button is-white" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
        <button className="button is-link" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
        <button className="button is-info" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
        <button className="button is-success" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
        <button className="button is-warning" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
        <button className="button is-info" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
        <button className="button is-danger" value="login" onClick={(e) => props.clickHandler(e)}>Login</button>
      </div>
  </div>
)
export default Homepage