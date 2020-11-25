const Score = (props) => {
    const {currentScore, finalScore} = props
   
    return(
        <div>
            <p>
                Current Score: {currentScore}
            </p>
            <p>
                Final Score: {finalScore}
            </p>
        </div>
    )
}

export default Score