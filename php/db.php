<?php

	// connect to DB and set-up PDO
	$host = 'mysql:host=127.0.0.1;dbname=nerdzine;';
	$dbname = 'root';
	$dbpass = 'mysql';
	$options = array(
		PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'",
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
	);

	$pdo = new PDO($host, $dbname, $dbpass, $options);