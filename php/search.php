<?php

	// require DB/PDO info
	require 'db.php';

	// SQL-questions to search after a page
	$search_param = $_REQUEST['makeASearch'];

	$sql_getPages = 'SELECT * FROM pages WHERE title LIKE :search_param';
	$dbh = $pdo->prepare($sql_getPages);
	$dbh->execute([':search_param' => "%".$search_param."%"]);
	$data = $dbh->fetch();

	echo json_encode($data);