import Header from "./component/Header";
import React, { useState } from "react";
import Card from "./component/Card";
import "./index.css";
import pubsub from "./pubsub";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [arrayOrder, setArrayOrder] = useState([...Array(10).keys()]);

  let componentArray = [
    <Card updateScore={updateScore} dog="beagle" key="beagle" />,
    <Card updateScore={updateScore} dog="dachshunds" key="dachshunds" />,
    <Card
      updateScore={updateScore}
      dog="german-shepherd"
      key="german-shepherd"
    />,
    <Card
      updateScore={updateScore}
      dog="golden-retriever"
      key="golden-retriever"
    />,
    <Card
      updateScore={updateScore}
      dog="labrador-retriever"
      key="labrador-retriever"
    />,
    <Card updateScore={updateScore} dog="rottweiler" key="rottweiler" />,
    <Card
      updateScore={updateScore}
      dog="tricolor-maltese"
      key="tricolor-maltese"
    />,
    <Card
      updateScore={updateScore}
      dog="yorkshire-terrier"
      key="yorkshire-terrier"
    />,
    <Card updateScore={updateScore} dog="golden-retriever" key="1" />,
    <Card updateScore={updateScore} dog="golden-retriever" key="2" />,
    <Card updateScore={updateScore} dog="golden-retriever" key="3" />,
    <Card updateScore={updateScore} dog="golden-retriever" key="4" />,
  ];

  let displayArray = (
    <React.Fragment>
      {console.log(arrayOrder)}
      {arrayOrder.map((order) => {
        return componentArray[order];
      })}
    </React.Fragment>
  );

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function updateScore(ifClicked) {
    ifClicked ? resetGame() : incrementScore();
    setArrayOrder(shuffleArray(arrayOrder));
  }

  function incrementScore() {
    setCurrentScore(currentScore + 1);
    console.log(currentScore);
  }

  function resetGame() {
    if (currentScore > finalScore) {
      setFinalScore(currentScore);
    }
    resetScore();
    pubsub.publish("resetGame");
  }

  function resetScore() {
    setCurrentScore(0);
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} finalScore={finalScore} />
      {displayArray}
    </div>
  );
}

export default App;
