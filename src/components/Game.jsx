import React from "react";
import Card from "./Card";
import "./Game.css";
import CARDS from "../data.js";
import * as animationData from "../cokedrink.json";
import rewind from "../rewind.svg";
import back from "../back.svg";
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
        <div className="game-nav">
            <a href="/"><img src={back} width="10px" alt="back" /><span style={{padding: "8px"}}>back</span></a>
        </div>
        <div className="empty-screen">
        <p>Game Over :(</p>
        <a href="/game" ><br /><img src={rewind} width="30px" alt="restart"/><br />Restart</a>
        </div>
      <div className="game-container">
      
        {CARDS.map(createCard)}</div>
        </div>
        
    )
}
export default Game;