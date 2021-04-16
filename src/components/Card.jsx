import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import "./Card.css";
import TinderCard from 'react-tinder-card';


const Card = (props) => {
    return(
      
        <TinderCard onSwipe={props.onSwipe}>
         <div className={`tappen-card ${props.className}`
}>
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