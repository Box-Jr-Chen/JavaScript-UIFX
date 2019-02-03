/*
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = Number(prompt("What is your age?"));

var fullName = firstName +" " + lastName;


if(age >15)
	alert("Your full name is "+fullName +", "+ age + " years old");

var secretNumber = 4;

var stringGuess = Number(prompt("Guess a number"));

if(stringGuess == secretNumber)
{
	alert("You Got it!!");
}
else if (stringGuess > secretNumber)
{
	alert("Too High!!");
}
else if (stringGuess < secretNumber)
{
	alert("Too Low!!");
}

console.log("start");
var count =1;

while(count <= 20)
{
	if(count % 4 ===0)
	{
		console.log(count);
	}
	count++;
}
*/
var answer = prompt("are we there yet?" );

while(answer.indexOf("yes") === -1){
	console.log(answer.indexOf("yes"));
	answer=prompt(answer.indexOf("yes") +"; are we there yet?");
}

alert("YAY,We made it!!!");