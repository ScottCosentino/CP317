<?php

	$servername = "localhost";
	$username = "root";
	$password = "";

	$conn = mysql_connect($servername,$username,$password);

	if(!$conn) {
		die("connection failed" . mysql_error());
	}

	mysql_select_db("Advise",$conn);

	session_start();
	$user = $_POST['Username'];
	$password = $_POST['Password'];

	$Q = "
		SELECT * FROM `accounts` WHERE username =" . "'" . $user . "'
	";

	$query = mysql_query($Q);

	$row = mysql_fetch_assoc($query);

	if ($password === $row['password']) {
		$_SESSION['user_id'] = $row['user_id'];
		mysql_close($conn);
		header('Location: ../main.php');
		exit;
	}else {
		echo "Fail";
	}
?>