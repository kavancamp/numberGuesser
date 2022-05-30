let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}
//added calculation to find the difference
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess) //compare absolute value
    const computerDifference = Math.abs(targetGuess - computerGuess)

    return humanDifference <= computerDifference;
  }
  
  const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
  const advanceRound = () => currentRoundNumber++;