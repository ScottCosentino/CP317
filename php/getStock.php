<?php
	$symbol = $_GET['symbol'];
	$results = array();
	$format = ;
	$s = file_get_contents("http://finance.yahoo.com/d/quotes.csv?s=$stock&f=$format&e=.csv");
	$data = explode(",",$s);
	$results[$stock] = $data;
?>