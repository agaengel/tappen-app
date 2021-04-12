import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import "./Card.css";
import TinderCard from 'react-tinder-card';


const Card = (props) => {
    return(
        <div className="tappen-card-container">
        <TinderCard>
        <div className="tappen-card">
        <CardHeader 
            options={props.options}
        />
<CardBody 
    content={props.content}
/>
        </div>
        </TinderCard>
</div>
        
    )
}

export default Card;