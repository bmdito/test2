import React from "react";
import "./style.css"

 function Nav(props){

   

        return (
            <>
                
                    <ul className="navStyle">
                        <li><span className="logo">Get Clicky!</span></li>
                        <li>Current Score : <span className="nums">{props.currentScore}</span></li>
                        <li>High Score : <span className="nums">{props.highScore}</span></li>
                    </ul>
                
            </>
        )
    
}

export default Nav;
