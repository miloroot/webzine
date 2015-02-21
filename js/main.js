$(function() {

	// DOM-Ready and working? : YES.
	console.log('Hello world, this is a webzine. But still more of a blog!');

	// Just a thing for fun! 
	// If pw is google, a template will be loaded
	$(document).on("click", '.login', function() {
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
	});


	/*
	//
	// SECTION BELOW IS AJAX's THAT LOAD WHEN DOM IS READY.
	//
	*/


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

	// get footer info from DB
	$.ajax({
		url: "php/footerinfo.php",
		dataType: "json",
		data: "footerInfo",
		success: function(data) {
			console.log("Success Footer data: ", data);

			for (var i in data) {
				var name = data[i].name;
				var info = data[i].info;

				$('.footerArea').append(name + '. ' + info);
			}
		},
		error: function(data) {
			console.log("Error Footer data: ", data);
		}
	});

	// workaround to get footer info from DB when pages are loaded via ajax.
	// not pretty, but it works.
	$(document).on("click", function() {
		$.ajax({
			url: "php/footerinfo.php",
			dataType: "json",
			data: "footerInfo",
			success: function(data) {
				console.log("Success Footer data: ", data);

				for (var i in data) {
					var name = data[i].name;
					var info = data[i].info;

					$('.footerArea').html(name + '. ' + info);
				}
			},
			error: function(data) {
				console.log("Error Footer data: ", data);
			}
		});
	});


	// fetching the data that builds the nav-bar
	$.ajax({
		url: "php/getmenu.php",
		dataType: "json",
		data: "getMenuLinks",
		success: function(data) {
			console.log("Success data for main nav-bar: ", data);

			for (var i in data) {
				console.log("Success data for main nav-bar loop: ", data[i]);

				$('.nav').append('<li role="presentation">' + '<a href="' + data[i].link + '">' + data[i].title + '</a>' + '</li>');
			}
		},
		error: function(data) {
			console.log("Error data for main nav-bar: ", data);
		}
	});


	/*
	//
	// SECTION BELOW IS AJAX's CONNECTED TO BUTTONS.
	//
	*/


	$(document).on("click", '.showthem', function() {
		$.ajax({
			url: "php/showallposts.php",
			dataType: "json",
			data: "showAllPosts",
			success: function(data) {
				console.log("Success LatestPosts data: ", data);

				$('.showAllPosts').html(" ");
				for (var i in data) {
					var title = '<h2>' + data[i].title + '</h2>';
					var body = '<p>' + data[i].body + '</p>';
					var author = '<small>' + data[i].author + '</small>';
					var created = '<small>' + data[i].created + '</small>';

					$('.showAllPosts').prepend(title + body + author + ' - ' + created + '<br> <br>');
				}
			},
			error: function(data) {
				console.log("Error LatestPosts data: ", data);
			}
		});
	});


	/*
	//
	// SECTION BELOW IS AJAX's FOR FORMS.
	//
	*/


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
	$(document).on("submit", '.postPageForm', function() {
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


	// modify/add links to main-nav
	$(document).on("submit", '.editLinksForm', function() {
		$.ajax({
			url: "php/editlinks.php",
			data: {
				title: $('.linkOne').val(),
				path: $('.linkOneURL').val()
			},
			success: function(data) {
				console.log('Edit links success-data: ', data);
			},
			error: function(data) {
				console.log('Edit links error-data: ', data);
			}
		});

		return false;
	});


	/*
	//
	// SECTION BELOW IS AJAX's FOR LOADING SITES VIA LINKS.
	//
	*/


	// ajax to load Admin Tools tab
	$(document).on("click", '#adminTools', function() {
		$.ajax({
			url: "templates/newpage_template.html",
			dataType: "html",
			cache: false,
			success: function(html) {
				$('body').html(html);

				history.pushState(null, null, "new_page");
			}
		});

		return false;
	});


	// ajax to load Search tab
	$(document).on("click", '#search', function() {
		$.ajax({
			url: "templates/search_template.html",
			dataType: "html",
			cache: false,
			success: function(html) {
				$('body').html(html);

				history.pushState(null, null, "search");
			}
		});

		return false;
	});


	// ajax to load Edit links tab
	$(document).on("click", '#editLinks', function() {
		$.ajax({
			url: "templates/editlinks_template.html",
			dataType: "html",
			cache: false,
			success: function(html) {
				$('body').html(html);

				history.pushState(null, null, "modify_links");
			}
		});

		return false;
	});


	// ajax to load all posts view
	$(document).on("click", '.allPosts', function() {
		$.ajax({
			url: "templates/allposts_template.html",
			dataType: "html",
			cache: false,
			success: function(html) {
				$('body').html(html);

				history.pushState(null, null, "all_posts");
			}
		});

		return false;
	});


	/*
	//
	// SECTION BELOW MAKES BACK AND FORWARD BUTTONS IN BROWSER WORK.
	// BUT YOU NEED TO HAVE THE SITE-FILES IN DIRECTORY "/gitrepos/webzine/".
	//
	*/


	window.onpopstate = function(event) {
		console.log('pathname: ' + location.pathname);

		if (location.pathname == "/gitrepos/webzine/modify_links") {
			$.ajax({
				url: "templates/editlinks_template.html",
				dataType: "html",
				cache: false,
				success: function(html) {
					$('body').html(html);

					//history.pushState(null, null, "modify_links");
				}
			});

			return false;
		}
		else if (location.pathname == "/gitrepos/webzine/search") {
			$.ajax({
				url: "templates/search_template.html",
				dataType: "html",
				cache: false,
				success: function(html) {
					$('body').html(html);

					//history.pushState(null, null, "search");
				}
			});

			return false;
		}
		else if (location.pathname == "/gitrepos/webzine/new_page") {
			$.ajax({
				url: "templates/newpage_template.html",
				dataType: "html",
				cache: false,
				success: function(html) {
					$('body').html(html);

					//history.pushState(null, null, "new_page");
				}
			});

			return false;
		}
		else if (location.pathname == "/gitrepos/webzine/all_posts") {
			$.ajax({
				url: "templates/allposts_template.html",
				dataType: "html",
				cache: false,
				success: function(html) {
					$('body').html(html);

					//history.pushState(null, null, "all_posts");
				}
			});

			return false;
		}
	}

});
