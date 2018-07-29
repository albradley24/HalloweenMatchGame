var value1 = 0;
var value2 = 0;

function startCountdown() // On-click of 'Go!' button, timer and game both start
{
	var timeleft = 20;
    var timer = setInterval(function()	
	{
		timeleft--;
		document.getElementById("timeRemaining").textContent = timeleft;
		
		if(timeleft <= 0)
			clearInterval(timer);
		
		if (timeleft == 0) // When timer hits 0, reset all elements to hidden
		{
			document.getElementById("tiles").style.visibility = "hidden";
		}
		if (timeleft == 5) // When timer hits 5, timer turns red
		{
			document.getElementById("timeRemaining").style.color = "red";
		}
		
    },1000);
}

function setValues(myValue)	// Store click values into global variables - so they can be compared in next function
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

function compare()	// Compare first click with second click to see if the cards matched
{
	console.log("Attempting compare");
	console.log("Value1:" + value1);
	console.log("Value2:" + value2);
	if(value1 == value2)
	{
		// Keep both images visible
		console.log("Match found");
		value1 = 0;
		value2 = 0;
		console.log("Values cleared");  // --> keep them shown;
	}
	else
	{
		// Hide both images again
		console.log("Match not found");
		value1 = 0;
		value2 = 0;
		console.log("Values cleared");  //--> hide them again;
	}
	
	/* document.getElementsByTagName("img").onclick()
	{
		document.getElementsByTagName("img").style.visibility = "visible";
	}
	
	if value1 != value2 
	{
		document.getElementsByTagName("img").style.visibility = "hidden";
	}
	//else, do nothing and image will stay visible */
}

/*
	Functionality to add:
		-randomize how the pictures appear - they are currently hard-coded but should be dynamic
		-error checking (user clicked same card twice, user clicks 'Go!' button again, etc.
		-as user passes each level, it will get harder and more pictures will be shown to match
		-depending on the time of year (closest holiday), display the corresponding cards
			-closest holiday is Halloween? show these cards; closest holiday is Christmas? show these cards instead
			-update background and styles to match
*/