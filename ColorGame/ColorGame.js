/*
var game ={}

game.init = function()
{
	setUpModeBtns();
	setUpSquareBtns();
	resetFun();
}

game.init();
*/

var numSquares = 6;
var colors     = [];
var pickedColor ;
var squares        = document.querySelectorAll(".square");
var colorDisplay   = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1             = document.querySelector("h1");
var resetBtn       = document.querySelector("#reset");
var modeBtns       = document.querySelectorAll(".mode");

var ModeBtnEnum = {
  Easy: 1,
  Hard: 2
};

var ModeBtnStatus = ModeBtnEnum.Hard;

init();

function init()
{
	setUpModeBtns();
	setUpResetBtn();
	setUpSquareBtns();

	//reset
	resetFun();
}

function setUpModeBtns()
{
	for(var i=0;i < modeBtns.length ;i++)
	{
		modeBtns[i].addEventListener("click",function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			this.textContent === "Easy" ? CheckModeBtn(ModeBtnEnum.Easy):CheckModeBtn(ModeBtnEnum.Hard);
		});
	}
}

function CheckModeBtn(NextModeBtnsStatus)
{
	if(NextModeBtnsStatus == ModeBtnStatus)
		 return;
	ModeBtnStatus = NextModeBtnsStatus;	
	resetFun();
}

function setUpResetBtn()
{
	resetBtn.addEventListener("click",function(){
		resetFun();
	});
}

function setUpSquareBtns()
{
	//square Btns event listeners
	for(var i=0;i < squares.length;i++)
	{
		squares[i].addEventListener("click",function()
		{
			var clickedColor = this.style.backgroundColor ;

			if(clickedColor ===pickedColor){
				messageDisplay.textContent ="Correct!";
				resetBtn.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent ="Try Again";
			}
		});
	}
}

function changeColors(color)
{
	for(var i=0;i < squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickedColorFun()
{
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//array
function generateRandomColors(num)
{
	var arr=[];

	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}

	return arr;
}

function randomColor()
{
	//pick a "red" from 0 -255
	var r =  randomInt(256);
	//pick a "green" from 0 -255
	var g = randomInt(256);
	//pick a "blue" from 0 -255
	var b = randomInt(256);

	return "rgb("+r+", "+ g +", "+b+")";
}

function randomInt(Max)
{
 	return Math.floor(Math.random() * Max);
}

function resetFun()
{
	colors         =  generateRandomColors(numSquares);
	pickedColor    =  pickedColorFun();
	colorDisplay.textContent   = pickedColor;
	messageDisplay.textContent ="";
	h1.style.backgroundColor   = "steelblue";
	resetBtn.textContent       = "New Colors";
	for(var i=0;i < squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display ="block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display ="none";
		}

	}
}