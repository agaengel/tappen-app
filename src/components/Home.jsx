import React from "react";
import "./Home.css";
import Card from './Card';


const Home = () => {
    return(
        <div id="home-screen">
       <h1 style={{fontSize: "1em", marginTop:"0.5rem"}}>Prepare to get wrecked!</h1>
       <Card
       onSwipe={event =>  window.location.replace("/game")}
      content={"Swipe to start!"}
      className="starter-card"
       />
      
         
       
        
        <div className="home-content">
        <p>Soon available for</p>
        <button type="button" className="store-button"><i class="fab fa-apple"></i> App Store</button>
          <button type="button" className="store-button"><i class="fab fa-google-play"></i> Play Store</button>
            
        </div>
     
        </div>
    )
}
export default Home;