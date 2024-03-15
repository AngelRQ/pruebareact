import React from "react";

import classes from "./component.module.css";

export default class Title extends React.Component {
  /*se exporta el componente para que pueda ser usado */
  render() {
    return (
      <div>
        <h1 className={classes.h1}>
          THE FUTURE OF MUSIC <br />
          LICENSING
        </h1>
      </div>
    );
  }
} //fin clase
