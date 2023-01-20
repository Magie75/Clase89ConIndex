
score = 0;

function updateScore() {
	score = score + 1;
	document.getElementById("score").innerHTML = "Puntuación: " + score;

	console.log(score);
}
//setItem (key, value)
//key nombre de la variable
function saveScore() {
	localStorage.setItem("score", score);
}


function nextPage() {
	window.location = "activity_2.html";
}
