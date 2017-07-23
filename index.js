var cards =     [ { name: "first", img: "images/first.png", id: 1 },
				  { name: "second", img: "images/second.jpg", id: 2 },
				  { name: "third", img: "images/third.png", id: 3 },
				  { name: "fourth", img: "images/fourth.png", id: 4 }, 
				  { name: "fifth", img: "images/fifth.jpg", id: 5 },
				  { name: "sixth", img: "images/sixth.png", id: 6 },
				  { name: "sevnth", img: "images/seventh.png", id: 7 },
				  { name: "eight", img: "images/eigth.png", id: 8 }];

var setup = function(){
	var doubleCards = $.merge(cards, cards);
	doubleCards = shuffle(doubleCards);
	var gameArea = $(".game_area");
	var addBox = '';
	$.each(doubleCards, function(k,v){
		addBox += '<div class="cards" id="'+v.id+'">\
		<div class="inside"><div class="front">\
		<img src="'+v.img+'" name="'+v.name+'"/>\
		</div></div></div>';
	});
	gameArea.html(addBox);
};

var shuffle = function(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

setup();
var on = false;
var firstName = null;
var firstEle = null;
var delayMillis = 500;
var cardClick = function(){
	var x;
	x = $(this)[0].getElementsByClassName("front")[0];
	x.style.display = "block";
	// debugger;
	if(firstName === null){
		// debugger;
		firstName = x.firstElementChild.getAttribute("name");
		firstEle = x;
	}else{
		var secondName = x.firstElementChild.getAttribute("name");
		var secondEle = x;
		// debugger;
		if(firstName !== secondName){
			setTimeout(function() {
	  			firstEle.style.display = "none";
				secondEle.style.display = "none";
				firstName = null;
				firstEle = null;
			}, delayMillis);
		}else{
			firstName = null;
			firstEle = null;
		}
	}
}

$(".cards").click(cardClick);

var gameStart = function(){
	var on = false;

}