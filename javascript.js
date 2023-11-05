let userScore = 0;
let computerScore = 0;
let result = "";

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

    rockComputer.style.backgroundColor = "";
    sciccorsComputer.style.backgroundColor = "";
    paperComputer.style.backgroundColor = "";

    rock.style.backgroundColor = "";
    paper.style.backgroundColor = "";
    sciccors.style.backgroundColor = "";

    if (userInput === "Rock") {
        rock.style.backgroundColor = "coral";
    } else if (userInput === "Paper") {
        paper.style.backgroundColor = "coral";
    } else {
        sciccors.style.backgroundColor = "coral";
    } 

    if (computerInput === "Rock") {
        rockComputer.style.backgroundColor = "teal";
    } else if (computerInput === "Paper") {
        paperComputer.style.backgroundColor = "teal";
    } else {
        sciccorsComputer.style.backgroundColor = "teal";
    } 

    userScoreId.textContent = userScore;
    computerScoreId.textContent = computerScore;
    gameResult.textContent = "Result: " + result;

};

function gameStart (i) {
    getResult(getUserChoice(i), getComputerChoice())

    if (userScore === 5) {
        gameResult.textContent = "You won the game!"
    } else if (computerScore === 5) {
        gameResult.textContent = "You lost the game!"
    } 

    if (userScore === 5 || computerScore === 5) {
        let tryAgain = document.querySelector("#try-again")
        let btn = document.createElement("button");
        btn.setAttribute("href", "index.html")
        btn.textContent = "Try Again!"
        tryAgain.appendChild(btn);
    }
}

// Add event listeners to choice buttons
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let sciccors = document.querySelector("#sciccors");

let rockComputer = document.querySelector("#rock-computer");
let paperComputer = document.querySelector("#paper-computer");
let sciccorsComputer = document.querySelector("#sciccors-computer");

let userScoreId = document.querySelector("#user-score");
let computerScoreId = document.querySelector("#computer-score");
let gameResult = document.querySelector("#result");

/* rock.addEventListener("click", () => {
    gameStart(0)
});

paper.addEventListener("click", () => {
    gameStart(1)
});

sciccors.addEventListener("click", () => {
    gameStart(2)
}); */

let img = document.querySelectorAll("#user-choices img")

img.forEach((img, i) => {
    img.addEventListener("click", () => {
        gameStart(i)
    })
})







