( function ()
{
	var map = [];

	map[ 0 ] = "A well-lit room.";
	map[ 1 ] = "A sparse kitchen.";

	var input = document.querySelector( "#input" );
	var output = document.querySelector( "#output" );
	var button = document.querySelector( "button" );
	button.addEventListener( "click", clickHandler, false );

	var mapLocation = 0;
	var message = "";
	narrate();

	function clickHandler()
	{
		var action = input.value;
		
		message = "";
		switch( action )
		{
			case "north":
				if( mapLocation < 1 )
				{
					mapLocation++;
				}
				else
				{
					message = "You can't go that way!";
				}
				break;
			
			case "east":
				message = "You can't go that way!";
				break;
				
			case "south":
				if( mapLocation >= 1 )
				{
					mapLocation--;
				}
				else
				{
					message = "You can't go that way!";
				}
				break;
			
			case "west":
				message = "You can't go that way!";
				break;
				
			default:
				message = "I don't understand you.";
		}
		narrate();
	}

	function narrate()
	{
		output.innerHTML = map[ mapLocation ];
		output.innerHTML += "<br />" + message;
	}
}() );
