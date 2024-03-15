import React from "react";

import classes from "./component.module.css";
import logo from './logo.png';

export default class Menu extends React.Component {
  /*se exporta el componente para que pueda ser usado */
  render() {
    return (
      <div className={classes.menu}>
        <div className={classes.logo}>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">hello@catalog.ac</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
} //fin clase
