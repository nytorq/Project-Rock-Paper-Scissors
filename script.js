const playRPS = (function() {
    let choices = ["rock", "paper", "scissors"];
    let userScore = 0;
    let computerScore = 0;
    let rounds = 0;
    let buttonChoices = document.querySelectorAll('.selection');
    const makeSelection = (event) => {
        userChoice = event.srcElement.id;
        roundEvaluation();
    }
    for (i = 0 ; i < buttonChoices.length ; i++) {
        buttonChoices[i].addEventListener('click', makeSelection);
    }
    const roundEvaluation = () => {
        console.log(`%cROUND ${playRPS.rounds}: READY! FIGHT!`, 'color: lightblue');
        const choiceGenerator = () => {
            return choices[Math.floor(Math.random() * choices.length)];
        }
        let computerChoice = choiceGenerator();
        const gameEvaluation = () => {
            if (playRPS.computerScore === 5) {
                console.log("%cSorry, you've lost the game.", 'color:red')
                ScreenController.displayedStatus.textContent = "Sorry, you've lost the game."
                ScreenController.displayedStatus.style.color = "red"
            } else if (playRPS.userScore === 5) {
                console.log('%cYou win the game!', 'color:green')
                ScreenController.displayedStatus.textContent = "You win the game!"
                ScreenController.displayedStatus.style.color = "green"
            }
        }
        if (userChoice === computerChoice) {
            console.log(`It's a tie. Both of you chose ${userChoice}`)
        } else if (userChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win! Rock beats scissors.');
            playRPS.userScore += 1;
        } else if (userChoice === 'scissors' && computerChoice === 'rock') { 
            console.log("You lose. Rock beats scissors.");
            playRPS.computerScore += 1;
        } else if (userChoice === 'scissors' && computerChoice === 'paper') {
            console.log("You win! Scissors beats paper.");
            playRPS.userScore += 1;
        } else if (userChoice === 'paper' && computerChoice === 'scissors') {
            console.log("You lose. Scissors beats paper.");
            playRPS.computerScore += 1;
        } else if (userChoice === 'paper' && computerChoice === 'rock') {
            console.log("You win! Paper beats rock.");
            playRPS.userScore += 1;
        } else if (userChoice === 'rock' && computerChoice === 'paper') {
            console.log("You lose. Paper beats rock.");
            playRPS.computerScore += 1;
        } else {
            console.log("Huh, something weird happened. Didn't recognize your input.")
        }
        console.log(`You have ${playRPS.userScore} points and the computer has ${playRPS.computerScore}`)
        playRPS.rounds += 1;
        ScreenController.displayedRound.textContent = playRPS.rounds;
        ScreenController.displayedUserScore.textContent = playRPS.userScore;
        ScreenController.displayedComputerScore.textContent = playRPS.computerScore;
        if (playRPS.rounds >= 5) {
            gameEvaluation();
        }
    }
    return {choices, userScore, computerScore, rounds, buttonChoices}
})();

const ScreenController = (function() {
    const displayedRound = document.querySelector('#roundValue');
    const displayedUserScore = document.querySelector('#userScoreValue');
    const displayedComputerScore = document.querySelector('#computerScoreValue');
    const displayedStatus = document.querySelector('#gameStatus');
    return {displayedRound, displayedUserScore, displayedComputerScore, displayedStatus}
})();