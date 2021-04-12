import React from "react";
import Card from "./Card";
import "./Game.css";
import CARDS from "../data.js";
import * as animationData from "../cokedrink.json";


const Game = (props) => {
    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }}

function createCard(data){
    return(
        <Card 
        options={defaultOptions}
            emoji={data.emoji}
            content={data.content}
        />
    )

}

    return(
        <div id="tappen-game">
        {CARDS.map(createCard)}
        </div>
        
    )
}
export default Game;