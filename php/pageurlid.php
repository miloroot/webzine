<?php

	// require DB/PDO info
	require 'db.php';

	$pathen = $_REQUEST['pathen'];
	$pid = $_REQUEST['pid'];

	$sql_urlalias = 'INSERT INTO url_alias (pathen, pid) VALUES (:pathen, :pid)';
	$dbh_ua = $pdo->prepare($sql_urlalias);
	$dbh_ua->execute([
		':pathen' => $pathen,
		':pid' => $pid,
	]);
