import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import "./Card.css";
import TinderCard from 'react-tinder-card';


const Card = (props) => {
    return(
    
        <TinderCard>
        <div className="tappen-card">
        <CardHeader 
    
        />
<CardBody 
    content={props.content}
/>
        </div>
        </TinderCard>

        
    )
}

export default Card;