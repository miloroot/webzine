$(function() {

	// DOM-Ready and working? : YES.
	console.log('Hello world, this is a webzine.');

	//Just a thing for fun! 
	$('.login').click(function() {
		var pw = prompt('Enter correct password:');
		if(pw == "google") {
			$('body').load('admin.html', function() {
				alert('You logged in successfully!');
			});
		}
		else {
			alert('Bad password!');
		}
	});

});