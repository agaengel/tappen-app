import React from "react";
import "./Home.css";
import {
    Link
  } from "react-router-dom";

const Home = () => {
    return(
        <div id="home-screen">
       <h1>Prepare to get wrecked!</h1>
        <Link to="/game"> <div className="game-start-button"><h1>Play now!</h1></div></Link>
        <div className="home-content">
        <p>Soon available for</p>
        <button type="button" className="store-button"><i class="fab fa-apple"></i> App Store</button>
          <button type="button" className="store-button"><i class="fab fa-google-play"></i> Play Store</button>
            
        </div>
     
        </div>
    )
}
export default Home;