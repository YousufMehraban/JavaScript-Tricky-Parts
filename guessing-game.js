function guessingGame() {
    const num = Math.floor(Math.random()*100);
    let guessCount = 0;
    let won = false;
    function guess(x){
        guessCount ++;
        if (won) return 'The game is over, you already won!';
        if(x === num) {
            won = true;
            return `You win! You found ${x} in ${guessCount} guesses.`;
        } else if (x > num){
            return `${x} is too high!`;
        } else {
            return `${x} is too low!`;
        }
    }
    return guess;
}

module.exports = { guessingGame };
