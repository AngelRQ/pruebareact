import React from "react";

import classes from "./component.module.css";

export  default class Footer extends React.Component{
/*se exporta el componente para que pueda ser usado */
    render(){
        return(
            <div className={classes.carrusel}>
            <div className={classes.text}>HE MEMBERS-ONLY TOP-TIER MUSIC SUPERVISION PLATFORM COMING SOON A HYPER-CURATED SYNC MARKETPLACE WITH THE BEST LABELS.</div>
          </div>  
        );
    }


}//fin clase

