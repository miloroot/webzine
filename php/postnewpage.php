<?php

	// require DB/PDO info
	require 'db.php'

	// SQL-questions to add new page
	// atm hardcoded in wich users creates the page
	$user_id = "CoderJS";

	$sql_postNewPage = 'INSERT INTO pages (title, body, user_id) VALUES (:title, :body, :user_id)';
	$dbh_pnp = $pdo->prepare($sql_postNewPage);
	$dbh_pnp->execute(
		array(
			[':title' => "title"],
			[':body' => "body"],
			[':user_id' => $user_id],
		)
	);