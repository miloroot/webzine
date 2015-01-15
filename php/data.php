<?php

	// connect to DB and set-up PDO
	$host = 'mysql:host=127.0.0.1;dbname=nerdzine;';
	$dbname = 'root';
	$dbpass = 'mysql';
	$options = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'");

	try {
		$pdo = new PDO($host, $dbname, $dbpass, $options);

		// SQL-questions to search after a page
		$sql_getPages = 'SELECT * FROM pages WHERE title = ":search_param"';
		$dbh = $pdo->prepare($sql_getPages);
		$dbh->execute([':search_param' => $search_param]);
		// $dbh->execute([':search_param' => $_REQUEST['search_param']]);
		$data = $dbh->fetchAll();
		echo json_encode($data);
		// print_r($data);
	} catch(PDOException $e) {
		echo $e->getMessage();
	}
