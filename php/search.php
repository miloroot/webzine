<?php

	// require DB/PDO info
	require 'db.php';

	// SQL-questions to search after a page
	$search_param = $_REQUEST['makeASearch'];

	$sql_getPages = "SELECT pages.pid, pages.title, pages.body, pages.created, CONCAT(users.fname, ' ', users.lname) as author FROM pages, users WHERE pages.title LIKE :search_param";
	$dbh = $pdo->prepare($sql_getPages);
	$dbh->execute([':search_param' => "%".$search_param."%"]);
	$data = $dbh->fetchAll();

	if (!$data) {
		echo json_encode("No records!");
	} else {
		echo json_encode($data);
	}

