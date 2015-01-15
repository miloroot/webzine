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

	// getting the search function working
	$('.searchForm').submit(function() {
		$.ajax({
			url: "php/data.php",
			dataType: "json",
			data: $('.searchField').val(),
			success: function(data) {
				console.log('Success data: ', data);
				for(var i in data) {
					console.log('Loop data: ', data);
				}
			},
			error: function(data) {
				console.log('Error data: ', data);
			}
		})

		return false;
	})

});