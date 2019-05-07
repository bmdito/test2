import React from "react";
import "./style.css";

function CharTile (props){
    
            
        return(
            <>
                <div className="card" onClick={() => props.clickedHero(props.id)}>
                    <div className="img-container">
                        <img alt={props.id} src={props.image}/>
                    </div>
                </div>
            </>
        )
    
}

export default CharTile;