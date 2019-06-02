// $(function () {
	var player;
	var computer;
	var deck;

	var playerScore = 0; 
	var computerScore  = 0;





function resetGame() {
	
	deck = getNewDeck();
	removeAllCards();
	$('.gameTextWrapper').html(" ");
	/////////////////
	computerCards();
	playerCards();
}

	
	deck = getNewDeck();


function getNewDeck() {
	return [
		  {"value":"sA","point":1},
		  {"value":"s2","point":2},
		  {"value":"s3","point":3},
		  {"value":"s4","point":4},
		  {"value":"s5","point":5},
		  {"value":"s6","point":6},
		  {"value":"s7","point":7},
		  {"value":"s8","point":8},
		  {"value":"s9","point":9},
		  {"value":"s10","point":10},
		  {"value":"sJ","point":10},
		  {"value":"sQ","point":10},
		  {"value":"sK","point":10},
		  {"value":"hA","point":1},
		  {"value":"h2","point":2},
		  {"value":"h3","point":3},
		  {"value":"h4","point":4},
		  {"value":"h5","point":5},
		  {"value":"h6","point":6},
		  {"value":"h7","point":7},
		  {"value":"h8","point":8},
		  {"value":"h9","point":9},
		  {"value":"h10","point":10},
		  {"value":"hJ","point":10},
		  {"value":"hQ","point":10},
		  {"value":"hK","point":10},
		  {"value":"cA","point":1},
		  {"value":"c2","point":2},
		  {"value":"c3","point":3},
		  {"value":"c4","point":4},
		  {"value":"c5","point":5},
		  {"value":"c6","point":6},
		  {"value":"c7","point":7},
		  {"value":"c8","point":8},
		  {"value":"c9","point":9},
		  {"value":"c10","point":10},
		  {"value":"cJ","point":10},
		  {"value":"cQ","point":10},
		  {"value":"cK","point":10},
		  {"value":"dA","point":1},
		  {"value":"d2","point":2},
		  {"value":"d3","point":3},
		  {"value":"d4","point":4},
		  {"value":"d5","point":5},
		  {"value":"d6","point":6},
		  {"value":"d7","point":7},
		  {"value":"d8","point":8},
		  {"value":"d9","point":9},
		  {"value":"d10","point":10},
		  {"value":"dJ","point":10},
		  {"value":"dQ","point":10},
		  {"value":"dK","point":10}
	  ]
	}


	playerCards ();
	computerCards();
	twentyOne();


	function standBtn () {

		// this is my stand button
		$('#standBtn').on('click' , function (event) {
		});

	}



	function removeAllCards () {
		$('.card').remove();
		$('.Ccard').remove();
	}

	var theCards = appendPlayerCard;

	function appendPlayerCard (value) {
		var $newCard = $("<div class='card " + value + "'></div>");
		var $container = $('.player-card-container');


		var playerTotalCards = $container.find('.card').length;

		$newCard.css({
			'z-index': playerTotalCards + 1,
			'left': (playerTotalCards + 1) * 90 + 'px'
		});

		$container.append($newCard);





	}

		function appendComputerCard (value) {
		var $newCard = $("<div class='Ccard " + value + "'></div>");

		var $container = $('.computer-card-container');

		var computerTotalCards = $container.find('.Ccard').length;

		$newCard.css({
			'z-index': computerTotalCards + 1,
			'left': (computerTotalCards + 1) * 90 + 'px'
		});

		$container.append($newCard);

	}

	function playerCards () {

		var randomCard = drawCard();
  		var randomCard2 = drawCard();

		appendPlayerCard(randomCard.value);
	 

		appendPlayerCard(randomCard2.value);


		$('.card').addClass('originalCard');

		player = (randomCard.point) + (randomCard2.point);
		
	};


	
	function computerCards () {
		 
		var randomCard3 = drawCard()
		var randomCard4 = drawCard();


		    // $('#firstCard').addClass(randomCard.value)
		appendComputerCard(randomCard3.value);
		
		   
		  	// $('#secondCard').addClass(randomCard2.value)
		appendComputerCard(randomCard4.value);
		

		$('.Ccard').addClass('originalCard');

		computer = (randomCard3.point) + (randomCard4.point)
		

	}

	function drawCard () {

	    var index = Math.floor(Math.random() * deck.length - 1) + 1  ;
		var card = deck[index];
		deck.splice(index, 1);

		return card;
	    
	    }

	function twentyOne () {
		if (computer === 21 && player < 21 ) {
			$('.gameTextWrapper').append('<h1>The Dealer has 21 :( UNLUCKY!!</h1>');
			
			computerScore += 1;
			checkScore ();

			// alert ('The Dealer Has 21')
		}  else if (player === 21 && computer < 21) {
			$('.gameTextWrapper').append('<h1>21! You Win</h1>');
	
			playerScore += 1;
			checkScore ();
		}
	}

	function bust () {
		if (player > 21 && computer < 21) {
			$('.gameTextWrapper').append('<h1>Computer Wins</h1>');
			
			computerScore += 1;
			checkScore ();
			// alert ('computer wins')
		}	else if (computer > 21 && player < 21) {
			$('.gameTextWrapper').append('<h1>Player Wins</h1>');
			
			// alert ('player wins')
			playerScore += 1;
			checkScore ();
		}	
	}

	function winOrLose () {
		if (computer > player && computer <= 20) {
			$('.gameTextWrapper').append('<h1>Computer Wins</h1>');
			computerScore += 1;
			checkScore ();
		}  else if (player > computer && player <= 20) {
			$('.gameTextWrapper').append('<h1>Player Wins</h1>');
			playerScore += 1;
			checkScore ();
			
		}	else if (player === computer) {
			$('.gameTextWrapper').append('<h1>Push/Draw</h1>');
		}

	}

	function computerDraw () {
		var newCard = drawCard();
		// alert (newCard.point);
		

    	computer += newCard.point;
    	// alert (computer);    
    	  
    	return newCard;  		
	}

	$("#standBtn").click(function(){
		var refreshIntervalId = setInterval (function () {
			if (computer <= 16) {
        		var newCard = computerDraw();
				appendComputerCard(newCard.value);
				$('.Ccard').each (function (i, v) {
	    		if (!v.classList.value.includes('originalCard')) {	
	    			v.classList.add('added');
	    			$(".added").hide();
	    			$(".added").fadeIn();
	    			$(".added").addClass('originalCard');
	    			$(".added").removeClass('added');
	    		}
	    	})


			} else {
				winOrLose();
				bust();
				twentyOne();
				clearInterval(refreshIntervalId);
			}
		}, 500)		
    }); 

    $("#hitBtn").click(function(){
       	if (player < 21) {
	    	var newCard = drawCard();
	   
	    	player += newCard.point;  
	    	
	    	appendPlayerCard(newCard.value);
	    	var cards = $('.card');
	    	
	    	$('.card').each (function (i, v) {
	    		if (!v.classList.value.includes('originalCard')) {	
	    			v.classList.add('added');
	    			$(".added").hide();
	    			$(".added").fadeIn();
	    			$(".added").addClass('originalCard');
	    			$(".added").removeClass('added');
	    		}
	    	})  
 			bust ();
 			twentyOne(); 
 		}
    }); 

    $(function() {
    	var $card = $('.card');

    	$('body').on('mouseover', '.card', function () {
      		$(this).css('top', '-50px'); 		
    	})
   		// $card.hover( function(){
     //  		$(this).css('top', '-50px'); 		
   		// });
   		  $('body').on('mouseleave', '.card', function () {
      		$(this).css('top', '0px'); 		
    	})
   		// $card.mouseleave(function() {
   		// 	$(this).css('top', '0px');
   		// });
	});


$('#playAgainBtn').click(resetGame);

function checkScore () {
 	$('#pScore').html(playerScore);
 	$('#cScore').html(computerScore);
 }

// });
