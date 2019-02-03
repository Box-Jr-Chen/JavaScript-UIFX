var button =document.querySelector("button");

button.addEventListener("click",function ()
{
	alert(document.body.classList.toggle("purple"));
});

