let userScore = 0;
let computerScore = 0;
let result = ""
let userChoice = ""
let computerChoice = ""

const choices = ["Rock", "Paper", "Sciccors"]
// Create get user choice function

function getUserChoice () {
    return choices[0];
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
        userChoice = userInput;
        computerChoice = computerInput;
        return result
    } else if (userInput === "Paper" && computerInput === "Rock") {
        userScore ++
        result = "You won! Paper beats Rock"
        userChoice = userInput;
        computerChoice = computerInput;
        return result        
    } else if (userInput === "Sciccors" && computerInput === "Paper") {
        userScore ++
        result = "You won! Sciccors beats Paper"
        userChoice = userInput;
        computerChoice = computerInput;
        return result        
    } else if (computerInput === "Rock" && userInput === "Sciccors") {
        computerScore ++
        result = "You lose! Rock beats Sciccors"
        userChoice = userInput;
        computerChoice = computerInput;
        return result       
    } else if (computerInput === "Paper" && userInput === "Rock") {
        computerScore ++
        result = "You lose! Paper beats Rock"
        userChoice = userInput;
        computerChoice = computerInput;
        return result     
    } else if (computerInput === "Sciccors" && userInput === "Paper") {
        computerScore ++
        result = "You lose! Sciccors beats Paper"
        userChoice = userInput;
        computerChoice = computerInput;
        return result     
    } else if (computerInput ===  userInput) {
        result = "Tied!"
        userChoice = userInput;
        computerChoice = computerInput;
        return result        
    }; 
          
};



function gameStart () {
    

    getResult(getUserChoice(), getComputerChoice())
    console.log(`User: ${userChoice}`)
    console.log(`Computer: ${computerChoice}`)
    console.log(`User score: ${userScore}`)
    console.log(`Computer score: ${computerScore}`)
    console.log(`Result: ${result}`)
    console.log("-----------")
    
    if (userScore === 5) {
        console.log("You won the game!")
    } else if (computerScore === 5) {
        console.log("You lost the game!")
    console.log("-----------")        
}
}


// Create count score function



