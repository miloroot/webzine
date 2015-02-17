<?php

	// require DB/PDO info
	require 'db.php';

	$links = [
		'text' => $_REQUEST['text'],
		'path' => $_REQUEST['path']
	];

	$sql_modlinks = 
	'INSERT INTO menu (text, path) VALUES (:text, :path);';

	$param_links = [
		':text' => $links['text'],
		':path' => $links['path']
	];

	$dbh_ml = $pdo->prepare($sql_modlinks);
	$dbh_ml->execute($param_links);
