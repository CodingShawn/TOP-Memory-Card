const Score = (props) => {
    const {currentScore, finalScore} = props
   
    return(
        <div>
            <p>
                Current Score: {currentScore}
            </p>
            <p>
                High Score: {finalScore}
            </p>
        </div>
    )
}

export default Score