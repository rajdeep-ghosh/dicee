document.addEventListener("keydown", function (eve) {
    if(eve.key == "r" || eve.key == "R") {
        rollDice();
    }
});

document.querySelector(".btn").addEventListener("click", function() {
    rollDice();
});

function rollDice() {
    var randomVariable1 = Math.floor(Math.random() * 6) + 1;
    var randomVariable2 = Math.floor(Math.random() * 6) + 1;
    var result;

    if(randomVariable1 > randomVariable2) {
        result = "🥇Player 1 Wins!";
    }
    else if(randomVariable1 < randomVariable2) {
        result = "Player 2 Wins!🥇";
    }
    else {
        result = "Draw!";
    }

    document.querySelector("h1").textContent = result;

    var randomImageSource1 = "images/dice" + randomVariable1 + ".png";
    var randomImageSource2 = "images/dice" + randomVariable2 + ".png";

    document.querySelector(".img1").setAttribute("src", randomImageSource1);
    document.querySelector(".img2").setAttribute("src", randomImageSource2);
}