<?php
header("Access-Control-Allow-Origin: *");

	include_once 'ws/mots.php';
	$lesMots= new Mots();
	$result= $lesMots->getObjectmots();
	echo($result);
?>