( function ()
{
	var map = [];

	map[ 0 ] = "A well-lit room.";
	map[ 1 ] = "A sparse kitchen.<br /> There is a toaster here.";
	
	actions = [ "north", "south", "east", "west" ];
	
	var theInput = "";
	var theAction = "";
	
	var items = [ "flat pastry" ];
	var itemLocations = [ 0 ];
	
	var input = document.querySelector( "#input" );
	input.focus();
	
	var output = document.querySelector( "#output" );
	var button = document.querySelector( "button" );
	button.addEventListener( "click", clickHandler, false );

	var mapLocation = 0;
	var message = "";
	narrate();

	function clickHandler()
	{
		theInput = input.value.toLowerCase();
		
		// detect if there is a game action in the user's input
		for( var i = 0, ii = actions.length; i < ii; i++ )
		{
			if( theInput.indexOf( actions[ i ] ) !== -1 )
			{
				theAction = actions[ i ];
				break;
			}
		}
		
		// player movement
		message = "";
		switch( theAction )
		{
			case "north":
				if( mapLocation < 1 )
				{
					mapLocation++;
				}
				else
				{
					message = "<br />You can't go that way!";
				}
				break;
			
			case "east":
				message = "<br />You can't go that way!";
				break;
				
			case "south":
				if( mapLocation >= 1 )
				{
					mapLocation--;
				}
				else
				{
					message = "<br />You can't go that way!";
				}
				break;
			
			case "west":
				message = "<br />You can't go that way!";
				break;
				
			/*case "take":
				take();
				break;
				
			case "use":
				use();
				break;
				*/
			default:
				message = "I don't understand you.";
		}
		narrate();
		// erase text field and return focus to it
		input.value = "";
		input.focus();
	}
	
	function take()
	{
		
	}

	function narrate()
	{
		// output description of location
		output.innerHTML = map[ mapLocation ];
		//description of item at current location (if applicable)
		for( var i = 0, ii = items.length; i < ii; i++ )
		{
			if( mapLocation === itemLocations[ i ] )
				output.innerHTML += "<br />You see a " + items[ i ] + ".";
		}
		output.innerHTML += "<br />" + message;
	}
}() );
