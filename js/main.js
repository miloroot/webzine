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
			data: {
				makeASearch: $('.searchField').val()
			},
			success: function(data) {
				console.log('Success data: ', data);
				$('.searchResult').html(data.title + '<br>' + data.body);
			},
			error: function(data) {
				console.log('Error data: ', data);
			}
		})

		return false;
	})

});