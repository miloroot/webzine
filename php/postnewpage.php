<?php

	// require DB/PDO info
	require 'db.php';

	// SQL-questions to add new page
	// atm hardcoded in wich users creates the page
	// this chunk will insert data to pages-table

	$body = [
		'title' => $_REQUEST['title'],
		'body' => $_REQUEST['body'],
		'user_id' => 1,
		'pathen' => $_REQUEST['pathen']
	];

	$sql_postNewPage = 
	'INSERT INTO pages (title, body, user_id) VALUES (:title, :body, :user_id);
	 INSERT INTO  url_alias(pathen) VALUES (:pathen);';

	 $params = [
	 	':title' => $body['title'],
	 	':body' => $body['body'],
	 	':user_id' => $body['user_id'],
	 	':pathen' => $body['pathen']
	 ];

	 $dbh_pnp = $pdo->prepare($sql_postNewPage);
	 $dbh_pnp->execute($params);