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
			url: "php/search.php",
			dataType: "json",
			data: {
				makeASearch: $('.searchField').val()
			},
			success: function(data) {
				console.log('Success data: ', data);
				console.log('User ID/name: ', data.author);

				var title = '<h2>' + data.title + '</h2>';
				var body = '<p>' + data.body + '</p>';
				var timestamp = '<small>Post created on: ' + data.created + '</small> <br>';
				var author = '<small>Authored by: ' + data.author + '</small>';

				$('.searchResult').html(title + body + timestamp + author);
			},
			error: function(data) {
				console.log('Error data: ', data);
			}
		})

		return false;
	})


	// creating a new page
	$('.postPageForm').submit(function() {
		$.ajax({
			url: "php/postnewpage.php",
			data: {
				title: $('.titleField').val(),
				body: $('.pageBody').val(),
				pathen: $('.pageURLField').val(),
				pid: $('.pageID').val()
			},
			success: function(data) {
				console.log('Create new page success data: ', data);
			},
			error: function(data) {
				console.log('Create new page error data: ', data);
			}
		});

		return false;
	});


	// getting pageURL and pageID
	$('.postPageForm').submit(function() {
		$.ajax({
			url: "php/pageurlid.php",
			data: {
				pathen: $('.pageURLField').val(),
			},
			success: function(data) {
				console.log('PageURL and ID success: ', data); 
			},
			error: function(data) {
				console.log('PageURL and ID error: ', data);
			}
		});

		return false;
	});

});