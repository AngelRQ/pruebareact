import React from "react";

import classes from "./component.module.css";
import imagen from './cover.png';

export  default class Image extends React.Component{
/*se exporta el componente para que pueda ser usado */
    render(){
        return(
          <div className={classes.img}>
            <img  src={imagen} alt="" />
            </div>  
        );
    }


}//fin clase 