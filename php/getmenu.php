<?php

	// require DB/PDO info
	require 'db.php';

	// SQL to get menu to nav-bar
	$_REQUIRE['getMenuLinks'];

	$sql_getmenu = 'SELECT * FROM menu;';
	$dbh_gm = $pdo->prepare($sql_getmenu);
	$dbh_gm->execute();
	$data_gm = $dbh_gm->fetchAll();

	echo json_encode($data_gm);