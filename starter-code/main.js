var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

/* if (cardTwo==cardOne) {
	alert("You found a match!");
}
else {
	alert("Sorry try again");
} 
*/


var board = document.getElementById('gameBoard');
function createCards (){
		for (var i=0 ; i<cards.length ; i++) {
			var cardDiv = document.createElement('div');
			cardDiv.className = 'card';
			cardDiv.setAttribute('data-card', cards[i]);
			cardDiv.addEventListener('click', isTwoCards);
			board.appendChild(cardDiv);
	}
}



function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
		if (this.getAttribute('data-card')==='queen') {
			this.innerHTML="<img src='http://i.imgur.com/eO9Qt1K.png'>";
		}
		else {
			this.innerHTML="<img src = 'http://i.imgur.com/gExrkx4.png'>";
		}
		if(cardsInPlay.length===2) {
		isMatch(cardsInPlay);
		cardsInPlay= [];
	}
}
	
function isMatch(cardMatch){
	if (cardMatch[0] === cardMatch[1]){ 
	alert('You found a match!!');
	} 
	else {
		alert('Sorry try again!');
	}
}
// I can't for the life of me figure out how to reset the cards.
createCards()