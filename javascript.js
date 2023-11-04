let userScore = 0;
let computerScore = 0;
let result = "";
let userChoice = "";
let computerChoice = "";

const choices = ["Rock", "Paper", "Sciccors"]
// Create get user choice function

function getUserChoice (i) {
    return choices[i];
};

// Create get computer choice function

function getComputerChoice () {
    return choices[Math.floor(Math.random() * 3)];
};

// Create get result function

function getResult (userInput, computerInput) {
    if (userInput === "Rock" && computerInput === "Sciccors") {
        userScore ++
        result = "You won! Rock beats Sciccors"
        userChoice = userInput
        computerChoice = computerInput
        return result
    } else if (userInput === "Paper" && computerInput === "Rock") {
        userScore ++
        result = "You won! Paper beats Rock"
        userChoice = userInput
        computerChoice = computerInput
        return result        
    } else if (userInput === "Sciccors" && computerInput === "Paper") {
        userScore ++
        result = "You won! Sciccors beats Paper"
        userChoice = userInput
        computerChoice = computerInput
        return result        
    } else if (computerInput === "Rock" && userInput === "Sciccors") {
        computerScore ++
        result = "You lose! Rock beats Sciccors"
        userChoice = userInput
        computerChoice = computerInput
        return result       
    } else if (computerInput === "Paper" && userInput === "Rock") {
        computerScore ++
        result = "You lose! Paper beats Rock"
        userChoice = userInput
        computerChoice = computerInput
        return result     
    } else if (computerInput === "Sciccors" && userInput === "Paper") {
        computerScore ++
        result = "You lose! Sciccors beats Paper"
        userChoice = userInput
        computerChoice = computerInput
        return result     
    } else if (computerInput ===  userInput) {
        result = "Tied!"
        userChoice = userInput
        computerChoice = computerInput
        return result        
    }; 
          
};



function gameStart () {

    getResult(getUserChoice(i), getComputerChoice())
    
    if (userScore === 5) {
        alert("You won the game!")
    } else if (computerScore === 5) {
        alert("You lost the game!")
    }
}

// Add event listeners to choice buttons

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let sciccors = document.querySelector("#sciccors");

let userScoreId = document.querySelector("#user-score");
let computerScoreId = document.querySelector("#computer-score");
let gameResult = document.querySelector("#result");
let userChoiceId = document.querySelector("#user-choice");
let computerChoiceId = document.querySelector("#computer-choice");

rock.addEventListener("click", () => {
    i = 0;
    gameStart()
    userScoreId.textContent = "User Score: " + userScore;
    computerScoreId.textContent = "Computer Score: " + computerScore;
    userChoiceId.textContent = "User Choice: " + userChoice;
    computerChoiceId.textContent = "Computer Choice: " + computerChoice;
    gameResult.textContent = "Result: " + result;
});

paper.addEventListener("click", () => {
    i = 1;
    gameStart()
    userScoreId.textContent = "User Score: " + userScore;
    computerScoreId.textContent = "Computer Score: " + computerScore;
    userChoiceId.textContent = "User Choice: " + userChoice;
    computerChoiceId.textContent = "Computer Choice: " + computerChoice;
    gameResult.textContent = "Result: " + result;
});

sciccors.addEventListener("click", () => {
    i = 2;
    gameStart()
    userScoreId.textContent = "User Score: " + userScore;
    computerScoreId.textContent = "Computer Score: " + computerScore;
    userChoiceId.textContent = "User Choice: " + userChoice;
    computerChoiceId.textContent = "Computer Choice: " + computerChoice;
    gameResult.textContent = "Result: " + result;
});