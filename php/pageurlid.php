<?php

	// require DB/PDO info
	require 'db.php';

	$pathen = $_REQUEST['pathen'];

	$sql_urlalias = 'INSERT INTO url_alias (pathen) VALUES (:pathen)';
	$dbh_ua = $pdo->prepare($sql_urlalias);
	$dbh_ua->execute([
		':pathen' => $pathen
	]);
