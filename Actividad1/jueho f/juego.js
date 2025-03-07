let randomNumber = Math.floor(Math.random() * 11); // Número aleatorio entre 0 y 10

function checkGuess() {
    let userGuess = parseInt(document.getElementById("userGuess").value);
    let message = document.getElementById("message");

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
        message.textContent = "please, enter a  number betwen  0 and 10.";
    } else if (userGuess === randomNumber) {
        message.textContent = "🎉 Congratulations! guess the number. 🎉";
    } else {
        message.textContent = "❌ Wrong. Try again.";
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 11); // Genera un nuevo número aleatorio
    document.getElementById("message").textContent = "";
    document.getElementById("userGuess").value = "";
}