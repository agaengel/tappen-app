import React from "react";
import "./CardBody.css";

const CardBody = (props) => {
return(
    <div className="tappen-card-body">
        <p>{props.content}</p>
    </div>
)

}

export default CardBody;