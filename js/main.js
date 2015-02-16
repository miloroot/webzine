$(function() {

	// DOM-Ready and working? : YES.
	console.log('Hello world, this is a webzine.');

	// Just a thing for fun! 
	// If pw is google, a template will be loaded
	$('.login').on("click", (function() {
		var pw = prompt('Enter correct password:');
		if(pw == "google") {

			$.ajax({
				url: "templates/search_template.html",
				dataType: "html",
				cache: false,
				success: function(html) {
					$('body').html(html);
				}
			});
		}
		else {
			alert('Bad password!');
		}
	}));


	// getting latest "post"/"page", and showing it
	// in the "latest"-section in index.html
	$.ajax({
		url: "php/latestpost.php",
		dataType: "json",
		data: "latestpost",
		success: function(data) {
			console.log("Success data latest post: ", data);

			for (var i in data) {
				console.log("Latest loop data: ", data[i].title);

				var latest_title = data[i].title;
				var latest_body = data[i].body;
				var latest_author = data[i].author;
				var latest_timestamp = data[i].created;

				$('.latestTitle').append(latest_title);
				$('.latestBody').append(latest_body);
				$('.latestAuthor').append('- ' + latest_author + '.' + ' ' + latest_timestamp);
			}
		},
		error: function(data) {
			console.log("Error data latest post: ", data);
		}
	});


	// getting the search function working
	$(document).on("submit", '.searchForm', function() {
		$.ajax({
			url: "php/search.php",
			dataType: "json",
			data: {
				makeASearch: $('.searchField').val()
			},
			success: function(data) {

				$('.searchResult').html(" ");
				for (var i in data) {
					if (data[i].title == undefined) {
						$('.searchResult').html("<h3>No results matching search query.</h3>");

					}
					else {
						console.log('Loop data: ', data[i].title);

						var title = '<h2>' + data[i].title + '</h2>';
						var body = '<p>' + data[i].body + '</p>';
						var timestamp = '<small>Post created on: ' + data[i].created + '</small> <br>';
						var author = '<small>Authored by: ' + data[i].author + '</small>';

						$('.searchResult').append(title + body + timestamp + author);
					}
				}
			},
			error: function(data) {
				console.log('Error data: ', data);
			}
		})

		return false;
	});


	// creating a new page
	// and giving it a "url"
	$('.postPageForm').submit(function() {
		$.ajax({
			url: "php/postnewpage.php",
			data: {
				title: $('.titleField').val(),
				body: $('.pageBody').val(),
				pathen: $('.pageURLField').val()
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

});