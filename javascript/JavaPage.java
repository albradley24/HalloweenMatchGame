var value1 = 0;
var value2 = 0;

function startCountdown() 	//on-click of 'Go!' button, countdown timer starts
{
    var timeleft = 20;
    var timer = setInterval(function()	
	{
		timeleft--;
		document.getElementById("timeRemaining").textContent = timeleft;
		
		if(timeleft <= 0)
			clearInterval(timer);
		
    },1000);
}

function setValues(myValue)	//store click values into global variables - so they can be compared in next function
{
	if(value1 == 0)
	{
		value1 = myValue;
		console.log("Value1 has been set");
	}
	else
	{
		value2 = myValue;
		console.log("Value2 has been set");
		compare();
	}
}

function compare()	//compare first click with second click to see if the cards matched
{
	console.log("Attempting compare");
	console.log("Value1:" + value1);
	console.log("Value2:" + value2);
	if(value1 == value2)
	{
		//keep both images visible
		console.log("Match found");
		value1 = 0;
		value2 = 0;
		console.log("Values cleared");
			//where document.getElementsByTagName("img").value = value1  --> keep them shown;
	}
	else
	{
		//hide both images again
		console.log("Match not found");
		value1 = 0;
		value2 = 0;
		console.log("Values cleared");
			//where document.getElementsByTagName("img").value = value1  --> hide them again;
	}
}

/*
	Functionality to add:
		-when timer hits 0, hide all elements so go restarts
		-start timer on page load (3..2..1..Go!  **timer starts**)
		-timer flashes red when it reaches 5 seconds
		-randomize how the pictures appear - they are currently hard-coded but should be dynamic
		-error checking (user clicked same card twice, user clicks 'Go!' button again, etc.
		-as user passes each level, it will get harder and more pictures will be shown to match
		-get rid of fixed screen --> change, relative to screen size
*/