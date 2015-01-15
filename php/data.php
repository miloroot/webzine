<?php

	// connect to DB and set-up PDO
	$host = 'mysql:host=127.0.0.1;dbname=nerdzine;';
	$dbname = 'root';
	$dbpass = 'mysql';
	$options = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'");

	$pdo = new PDO($host, $dbname, $dbpass, $options);

	// SQL-questions to search after a page
	$sql_getPages = 'SELECT * FROM pages WHERE title LIKE ":search_param"';
	$dbh = $pdo->prepare($sql_getPages);
	$dbh->execute([':search_param' => $search_param]);
