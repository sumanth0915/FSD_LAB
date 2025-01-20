class Game {
    constructor() {
      this.num = null;
      this.attempts = 0;
      this.gameOver = false;
    }
    start() {
      this.num = this.random();
      this.attempts = 0;
      this.gameOver = false;
      console.log("Guess a number between 1 and 100.");
    }
    random() {
      return Math.floor(Math.random() * 100) + 1;
    }
    checkGuess(userGuess) {
      if (this.gameOver) {
        console.log("The game is over. Start a new game!");
        return;
      }
      this.attempts++;
      if (userGuess < 1 || userGuess > 100) {
        console.log("Please guess a number between 1 and 100.");
        return;
      }
  
      if (userGuess < this.num) {
        console.log("Higher!");
      } else if (userGuess > this.num) {
        console.log("Lower!");
      } else {
        this.gameOver = true;
        console.log(`Congratulations! You guessed the correct number ${this.num} in ${this.attempts} attempts.`);
        console.log("Game Over!");
      }
    }
    resetGame() {
      if (!this.gameOver) {
        console.log("The game is still ongoing. Please guess it.");
      } else {
        this.start();
      }
    }
  }  
const game = new Game();
game.start();
game.checkGuess(50);
game.checkGuess(75); 
game.checkGuess(87); 
game.checkGuess(93); 
game.resetGame();