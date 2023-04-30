

var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess; // undefined
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
	guess = prompt("Ты готов играть, тогда вводи цифру? (введи цифру 0-6):"); // null
	if(guess < 0 || guess > 6){
		alert("Будь внимательнее, вводи цифры от 0 до 6!");
	}else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
			hits = hits + 1;
			if(hits == 3){
				isSunk = true;
				alert("Мои поздравления, ты победил в игре!");
			}
		}else{
			alert("Надо лучше стараться))) МИМО))");
		}
	}
}
var status = "Вы выстрелили " + guesses + " для того чтобы попавсть по кораблю, " +
 "это показывает уровень твоей меткости, как: " + (3/guesses);
 alert(status);
