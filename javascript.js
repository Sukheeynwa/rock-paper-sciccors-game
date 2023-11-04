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
    if (userInput === "Rock" && computerInput === "Sciccors" || 
        userInput === "Paper" && computerInput === "Rock" ||
        userInput === "Sciccors" && computerInput === "Paper") {
            userScore ++
            result = `You won! ${userInput} beats ${computerInput}`
    } else if (computerInput === "Rock" && userInput === "Sciccors" ||
        computerInput === "Paper" && userInput === "Rock" ||
        computerInput === "Sciccors" && userInput === "Paper") {
            computerScore ++
            result = `You lose! ${computerInput} beats ${userInput}`
    } else {
        result = "Tied!"
    }; 
    userChoice = userInput
    computerChoice = computerInput
};

function gameStart (i) {
    getResult(getUserChoice(i), getComputerChoice())

    userScoreId.textContent = "User Score: " + userScore;
    computerScoreId.textContent = "Computer Score: " + computerScore;
    userChoiceId.textContent = "User Choice: " + userChoice;
    computerChoiceId.textContent = "Computer Choice: " + computerChoice;
    gameResult.textContent = "Result: " + result;

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

/* let btn = document.querySelectorAll("button")

btn.forEach((button, i) => {
    button.addEventListener("click", (i) => {
        gameStart(i)
    })
}); */

rock.addEventListener("click", () => {
    gameStart(0)
});

paper.addEventListener("click", () => {
    gameStart(1)
});

sciccors.addEventListener("click", () => {
    gameStart(2)
});