$(function() {

	// DOM-Ready and working? : YES.
	console.log('Hello world, this is a webzine.');

	//Just a thing for fun! 
	$('.login').click(function() {
		var pw = prompt('Enter correct password:');
		if(pw == "google") {
			alert('Correct password!'); 
		}
		else {
			alert('Bad password!');
		}
	});

});