<?php

	// require DB/PDO info
	require 'db.php';

	$_REQUEST['latestpost'];

	$sql_getLatestPost = "SELECT pages.pid, pages.title, pages.body, pages.created, CONCAT(users.fname, ' ', users.lname) as author FROM pages, users ORDER BY pid DESC LIMIT 1;";
	$dbh_lp = $pdo->prepare($sql_getLatestPost);
	$dbh_lp->execute();
	$data_lp = $dbh_lp->fetchAll();

	if(!$data_lp) {
		echo json_encode("No records!");
	} else {
		echo json_encode($data_lp);
	}

	// SELECT * FROM pages ORDER BY pid DESC LIMIT 1;