
function back() {
window.location = "index.html";
}

function getScore()
{
	score = localStorage.getItem("score");	
	document.getElementById("update").innerHTML = "<h1>Puntaje: " + score +"</h1>";
}