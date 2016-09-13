var possibleAnswers = ['YES!', 'NO!'];
function randomAnswr(){
	var answer = possibleAnswers[Math.floor(Math.random()*possibleAnswers.length)];
	document.getElementById('answer').innerHTML = answer;
}
