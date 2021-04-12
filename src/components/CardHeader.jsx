import React from "react";
import "./CardHeader.css";
import drink from "../drink.svg";





const CardHeader = () => {
 
return(
        <div className="tappen-card-header">
    <img src={drink} alt="drink" width="75px" />
        </div>
    )

}

export default CardHeader;