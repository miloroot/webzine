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
	'INSERT INTO pages (title, body, user_id) VALUES (:title, :body, :user_id);';

	 $params_pages = [
	 	':title' => $body['title'],
	 	':body' => $body['body'],
	 	':user_id' => $body['user_id']
	 ];

	 $dbh_pnp = $pdo->prepare($sql_postNewPage);
	 $dbh_pnp->execute($params_pages);
	 $pid = $pdo->lastInsertId();


	 // this chunk will send to url_alias table
	 $sql_newPageUrl =
	 'INSERT INTO url_alias (pathen, pid) VALUES (:pathen, :pid);';

	 $params_url_alias = [
	 	':pathen' => $body['pathen'],
	 	':pid' => $pid
	 ];

	 $dbh_pnp = $pdo->prepare($sql_newPageUrl);
	 $dbh_pnp->execute($params_url_alias);