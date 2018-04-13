import React, { Component } from "react";
import PicCard from "./components/PicCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import pictures from "./cities.json";
import './App.css';

class App extends Component {

  state = {
    currentScore: 0,
    highScore: 0,
    pictures: pictures
  };

  renderGame = id => {
    this.state.pictures.forEach((image) => {
      if(image.id === id) {
        if(image.click) {
          alert("Clicked too many times...Game over :(");
          this.setState({});
          this.restartGame();
          return false;
        } else {
          this.updateScore();
          image.click = true;
        }
        if(this.state.currentScore >= this.state.highScore) {
          this.newHighScore();
        }
      }
    });
  }

  reorganize = (array) => {
    let copy = [], i = array.length, j;
    while(i) {
      j = Math.floor(Math.random() * array.length);
      if(j in array) {
        copy.push(array[j]);
        delete array[j];
        i--;
      }
    }
    this.setState({ pictures: copy });
  }

  updateScore = () => {
    this.setState((newState) => ({
      currentScore: newState.currentScore + 1
    }), () => this.winGame())
  }

  newHighScore = () => {
    this.setState((newState) => ({
      highScore: newState.currentScore
    }))
  }

  winGame = () => {
    if(this.state.currentScore === this.state.pictures.length) {
      alert("You rock! Now go book your trip, then come back and play again!");
      this.setState({});
      this.restartGame();;
    } else {
      setTimeout(() => {
        this.reorganize(this.state.pictures)
      }, 100);
    }
  }

  restartGame = () => {
    this.state.pictures.forEach((image) => {
      image.click = false;
    })
    this.setState({ currentScore: 0 })
    this.reorganize(this.state.pictures)
  }
  
  render() {
    return (
      <div>
        <Nav 
          currentScore = {this.state.currentScore}
          highScore = {this.state.highScore} 
        />
        <Hero />
        <Wrapper>
          {this.state.pictures.map(picture => {
            return <PicCard
              {...picture}
              key = {picture.id}
              renderGame = {this.renderGame}
              reorganize = {() => this.reorganize(this.state.pictures)}
            />
          })}
        </Wrapper>
      </div>
    );
  }
}

export default App;