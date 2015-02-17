<?php

	// require DB/PDO info
	require 'db.php';

	$links = [
		'title' => $_REQUEST['title'],
		'path' => $_REQUEST['path']
	];

	$sql_modlinks = 
	'INSERT INTO menu (title, path) VALUES (:title, :path);';

	$param_links = [
		':title' => $links['title'],
		':path' => $links['path']
	];

	$dbh_ml = $pdo->prepare($sql_modlinks);
	$dbh_ml->execute($param_links);
