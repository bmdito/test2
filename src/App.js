import React, {Component} from 'react';
import characters from "./characters.json";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"

import './App.css';
import CharTile from './components/CharTile/index.js';

function shuffleArray(arr) {

  for(let i = arr.length-1; i>0 ; i-- ){
      let j = Math.floor(Math.random() * (i +1));
      [arr[i], arr[j]] = [arr[j], arr[i]] 
      
  }
  console.log("array shuffled")
  return arr;
  
}


class App extends Component {

  state = {
    characters,
    notClicked: characters,
    currentScore:0,
    highScore:0
  };

  
  clickedHero = id => {
    
    //sets variable findClicked to search for id in notClicked array
    const findClicked= this.state.notClicked.find(clicked => clicked.id === id)
    
    //if undefined, id is not listed in unclicked, so HAS BEEN CLICKED
    if(findClicked=== undefined){
      console.log("failed!")
       
      //reset current score
      this.setState({
         currentScore:0,
         notClicked:characters,
         
         
      })
      //check to see if the current score is the new highscore, if so set highscore
      if(this.state.currentScore> this.state.highScore){
        this.setState({
          highScore: this.state.currentScore,
          
        })
        console.log("highschore", this.state.highScore)
      }

      

    } else {
    
      console.log("success");
    const stillNotClicked = this.state.notClicked.filter(character => character.id !== id);

      this.setState({
        notClicked:stillNotClicked,
        currentScore:this.state.currentScore+1,
        characters:shuffleArray(characters)

      });
      console.log("current score", this.state.currentScore)
            
      console.log(this.state.notClicked);

    }
  }
  

  render(){

    
    
    return (
      
        <>
          <Nav 
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
          />
          <Wrapper>
            
            {this.state.characters.map(character => 
                  <CharTile
                      key={character.id}
                      id={character.id}
                      image={character.image}
                      clickedHero = {this.clickedHero}
                      
                      
                  />
              )}
          </Wrapper>
          <Footer/>
        </>

      );
    }

 }

export default App;
