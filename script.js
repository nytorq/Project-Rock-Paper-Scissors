const playRPS = (function() {
    let choices = ["rock", "paper", "scissors"];
    let userScore;
    let computerScore;
    let rounds;
    const startGame = () => {
        event.preventDefault();
        rounds = 0;
        userScore = 0;
        computerScore = 0;
        for (i=0 ; i < 5 ; i++) {
            console.log(`%cROUND ${rounds}: READY! FIGHT!`, 'color: lightblue')
            let userChoice = prompt("Rock, paper or scissors?").toLowerCase();
            const choiceGenerator = () => {
                return choices[Math.floor(Math.random() * choices.length)];
            }
            let computerChoice = choiceGenerator();
            const gameEvaluation = () => {
                if (computerScore === userScore) {
                    console.log('%cLooks like you tied with the computer!', "color: yellow")
                } else {
                    userScore > computerScore ? console.log('%cYou win the game!', 'color:green') : console.log("%cSorry, you've lost the game.", 'color:red')
                }
            }
            const roundEvaluation = () => {
                if (userChoice === computerChoice) {
                    console.log(`It's a tie. Both of you chose ${userChoice}`)
                } else if (userChoice === 'rock' && computerChoice === 'scissors') {
                    console.log('You win! Rock beats scissors.');
                    userScore += 1;
                } else if (userChoice === 'scissors' && computerChoice === 'rock') { 
                    console.log("You lose. Rock beats scissors.");
                    computerScore += 1;
                } else if (userChoice === 'scissors' && computerChoice === 'paper') {
                    console.log("You win! Scissors beats paper.");
                    userScore += 1;
                } else if (userChoice === 'paper' && computerChoice === 'scissors') {
                    console.log("You lose. Scissors beats paper.");
                    computerScore += 1;
                } else if (userChoice === 'paper' && computerChoice === 'rock') {
                    console.log("You win! Paper beats rock.");
                    userScore += 1;
                } else if (userChoice === 'rock' && computerChoice === 'paper') {
                    console.log("You lose. Paper beats rock.");
                    computerScore += 1;
                } else {
                    console.log("Huh, something weird happened. Didn't recognize your input.")
                }
                console.log(`You have ${userScore} points and the computer has ${computerScore}`)
                rounds += 1;
                if (rounds === 5) {
                    gameEvaluation();
                }
            }
            roundEvaluation();
        }
    }
    return {choices, userScore, computerScore, rounds, startGame}
})();