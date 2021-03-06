<?php

	// connect to DB and set-up PDO
	$host = 'mysql:host=127.0.0.1;dbname=nerdzine;';
	$dbname = 'root';
	$dbpass = 'mysql';
	$options = array(
		PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'UTF8'",
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
	);

	$pdo = new PDO($host, $dbname, $dbpass, $options);


			// SQL-questions to search after a page
			$search_param = $_REQUEST['makeASearch'];

			$sql_getPages = 'SELECT * FROM pages WHERE title LIKE :search_param';
			$dbh = $pdo->prepare($sql_getPages);
			$dbh->execute([':search_param' => "%".$search_param."%"]);
			$data = $dbh->fetch();

			echo json_encode($data);


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