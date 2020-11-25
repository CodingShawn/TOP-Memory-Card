import Header from './component/Header'
import React, {useState} from 'react'
import Card from './component/Card'
import './index.css'
import pubsub from './pubsub'


function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [finalScore, setFinalScore] = useState(0)

  function incrementScore() {
      setCurrentScore(currentScore + 1)
      console.log(currentScore)
  }

  function resetGame() {
      if (currentScore > finalScore) {
          setFinalScore(currentScore)
      }
      resetScore()
      pubsub.publish("resetGame")
  }

  function resetScore() {
      setCurrentScore(0)
  }

  function updateScore(ifClicked) {
      ifClicked ? resetGame() : incrementScore()
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} finalScore={finalScore}/>
      <Card updateScore={updateScore} dog="beagle"/>
      <Card updateScore={updateScore} dog="dachshunds"/>
      <Card updateScore={updateScore} dog="german-shepherd"/>
      <Card updateScore={updateScore} dog="golden-retriever"/>
      <Card updateScore={updateScore} dog="labrador-retriever"/>
      <Card updateScore={updateScore} dog="rottweiler"/>
      <Card updateScore={updateScore} dog="tricolor-maltese"/>
      <Card updateScore={updateScore} dog="yorkshire-terrier"/>
      <Card updateScore={updateScore} dog="golden-retriever"/>
      <Card updateScore={updateScore} dog="golden-retriever"/>
      <Card updateScore={updateScore} dog="golden-retriever"/>
      <Card updateScore={updateScore} dog="golden-retriever"/>
    </div>
  );
}

export default App;
