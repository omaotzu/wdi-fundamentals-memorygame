var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay [];

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* if (cardTwo==cardOne) {
	alert("You found a match!");
}
else {
	alert("Sorry try again");
} 
*/


var boardDiv = document.getElementById('game-board');
function createBoard (){
		for (var i=0 ; i<cards.length ; i++) {
			var cardDiv = document.createElement('div');
			cardDiv.className = 'card';
			boardDiv.appendChild(cardDiv);
			boardDiv.appendChild(cardDiv);
	}
};

createCards();