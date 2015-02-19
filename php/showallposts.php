<?php

	// require DB/PDO info
	require 'db.php';

	$_REQUEST['showAllPosts'];

	$sql_getAllPosts = "SELECT pages.pid, pages.title, pages.body, pages.created, CONCAT(users.fname, ' ', users.lname) as author FROM pages, users ORDER BY pid;";
	$dbh_gap = $pdo->prepare($sql_getAllPosts);
	$dbh_gap->execute();
	$data_gap = $dbh_gap->fetchAll();

	echo json_encode($data_gap);