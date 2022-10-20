const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 37

let checkGuess = function(num){
    if(num > secretNumber){
        console.log("Too high")
        return false


    } if(num < secretNumber){
        console.log("Too low")
        return false
    } if(num === secretNumber){
        console.log("Correct")
        return true
    }

}

let askGuess = function(){
    rl.question("Guess what number?",guess => {

      let result = checkGuess(Number(guess))




     if(result === true){
        console.log("You win!")
        rl.close()


    }

     else {
        askGuess()

        }

     })
    }




    // rl.question("Guess what number?",guess => {
    //     rl.close()
    //     checkGuess(Number(guess))










askGuess()


// console.log(checkGuess(37))
