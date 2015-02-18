<?php

	// require DB/PDO info
	require 'db.php';

	// SQL to retrieve footer info
	$_REQUEST['footerInfo'];

	$sql_getfooter = 'SELECT * FROM footer;';
	$dbh_fi = $pdo->prepare($sql_getfooter);
	$dbh_fi->execute();
	$data_fi = $dbh_fi->fetchAll();

	echo json_encode($data_fi);