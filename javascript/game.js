var captAmerica = {name: "Captain America", hp: 100, attack: 20, counter: 15};
var hulk = {name: "Hulk", hp: 100, attack: 15, counter: 5,},
var ironMan = {name: "Iron Man", hp: 100, attack: 20, counter: 10,},
var thor = {name: "Thor", hp: 100, attack: 15, counter: 10,},
var antMan = { name: "Ant Man", hp: 100, attack: 15, counter: 10,},
var blackPanther = { name: "Black Panther", hp: 100, attack: 15, counter: 10,}



$("#captAmericaInfo").prepend(captAmerica.name);

$(document).ready(function() {
$(".allCharas").on("click", function(){
	$("#enemies").append($(this));
		});
});