import React from 'react';

const Login = (props) => (
  <form>
      <div>This is Login page</div>
      <label>Email:</label>
      <input type="email"></input>
      <label>Password:</label>
      <input type="password"></input>
      <input type="submit" value="Login" onClick={(e) => props.loginHandler(e)}></input>
  </form>
)
export default Login