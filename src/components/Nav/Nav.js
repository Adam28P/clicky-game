import React from "react";
import "./Nav.css";

const Nav = props => (

<nav className="navbar navbar-light bg-light">
<ul>
  <li><a href="/clicky-game/">{props.title}</a></li>
  <li>Current Score: {props.score} | Top Score: {props.topScore}</li>
</ul>
</nav>

);

export default Nav;