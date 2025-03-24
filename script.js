// Jeu 1 : Devine le nombre
document.getElementById("game1Button").addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("game1Result").textContent = "Le nombre à deviner est : " + randomNumber;
});

// Jeu 2 : Change la couleur
document.getElementById("game2Button").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#F0F033"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementById("game2Result").textContent = "La couleur a changé!";
});

// Jeu 3 : Quiz
document.getElementById("game3Button").addEventListener("click", function() {
    const question = "Quel est le langage utilisé pour le web ?";
    const answer = prompt(question);
    if (answer.toLowerCase() === "javascript") {
        document.getElementById("game3Result").textContent = "Bonne réponse !";
    } else {
        document.getElementById("game3Result").textContent = "Mauvaise réponse, essaye encore.";
    }
});