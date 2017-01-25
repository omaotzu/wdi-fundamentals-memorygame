var cards = ['ace', 'ace', 'king', 'king', 'queen', 'queen', 'jack', 'jack', 'ten', 'ten', 'nine', 'nine', 'eight', 'eight', 'seven', 'seven', 'six', 'six', 'five', 'five', 'four', 'four', 'three', 'three', 'two', 'two'];
var cardsInPlay = [];

/* if (cardTwo==cardOne) {
	alert("You found a match!");
}
else {
	alert("Sorry try again");
} 
*/


var board = document.getElementById('gameBoard');

function shuffleCards () {
	var i = 0, j=0, temp=null;
	for (var i=cards.length-1; i>0; i--) {
		j=Math.floor(Math.random()*(i+1));
		temp=cards[i];
		cards[i]=cards[j];
		cards[j]=temp;
	}
} 
function createCards (){
		for (var i=0 ; i<cards.length ; i++) {
			shuffleCards();
			var cardDiv = document.createElement('div');
			cardDiv.className = 'card';
			cardDiv.setAttribute('data-card', cards[i]);
			cardDiv.addEventListener('click', isTwoCards);
			board.appendChild(cardDiv);
	}
}
/* I stumbled across the Fisher-Yates Shuffle and thought
	I'd see if it would work in my game. Intention is to add more cards
	and see if I can have a half deck game of random cards which would be fun.
	Might have to make the cards a bit smaller though....
*/



function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
		if (this.getAttribute('data-card')==='queen') {
			this.innerHTML="<img src='http://i.imgur.com/eO9Qt1K.png'>";
		}
		else if (this.getAttribute('data-card')==='king') {
			this.innerHTML="<img src = 'http://i.imgur.com/gExrkx4.png'>";
		}
		else if (this.getAttribute('data-card')==='ace') {
			this.innerHTML="<img src = 'http://i.imgur.com/zlToZnK.png'>";
	    }
	    else if (this.getAttribute('data-card')==='jack') {
			this.innerHTML="<img src = 'http://i.imgur.com/KHyZQUw.png'>";
	    }
	    else if (this.getAttribute('data-card')==='ten') {
			this.innerHTML="<img src = 'http://i.imgur.com/AGt5mbk.png'>";
	    }
	    else if (this.getAttribute('data-card')==='nine') {
			this.innerHTML="<img src = 'http://i.imgur.com/KU6OS6e.png'>";
	    }
	    else if (this.getAttribute('data-card')==='eight') {
			this.innerHTML="<img src = 'http://i.imgur.com/y4RS6C7.png'>";
	    }
	    else if (this.getAttribute('data-card')==='seven') {
			this.innerHTML="<img src = 'http://i.imgur.com/BFDRlOL.png'>";
	    }
	    else if (this.getAttribute('data-card')==='six') {
			this.innerHTML="<img src = 'http://i.imgur.com/leWLZHn.png'>";
	    }
	    else if (this.getAttribute('data-card')==='five') {
			this.innerHTML="<img src = 'http://i.imgur.com/vzCxdrR.png'>";
	    }
	    else if (this.getAttribute('data-card')==='four') {
			this.innerHTML="<img src = 'http://i.imgur.com/He51NfG.png'>";
	    }
	    else if (this.getAttribute('data-card')==='three') {
			this.innerHTML="<img src = 'http://i.imgur.com/rh93gXb.png'>";
	    }
	    else if (this.getAttribute('data-card')==='two') {
			this.innerHTML="<img src = 'http://i.imgur.com/fDGAScI.png'>";
	    }
		if(cardsInPlay.length===2) {
		setTimeout (isMatch(cardsInPlay) , 1000);
		cardsInPlay= [];
	}
}

function resetCards() {
		for (var i=0 ; i<cards.length; i++) {
		if (document.getElementsByClassName('card')[i]) {
			document.getElementsByClassName('card')[i].innerHTML="";
		}
	}
}

function isMatch(cardMatch){
	if (cardMatch[0] === cardMatch[1]){ 
	alert('You found a match!!');
	} 
	else {
		resetCards();
		alert('Sorry try again!');
		cardsInPlay= [];
	}
}

createCards();
shuffleCards();