<?php
include_once"persistance/dialogueBD.php";
class Mots
{
	public function getObjectmots(){
		try
		{
			$lesMots = dialogbd::getToutLesMots();

			$motsJson= json_encode($lesMots,JSON_UNESCAPED_UNICODE);
		}
		catch(Exception $e)
		{
			$motsJson= $e->getMessage();
		}
		return $motsJson;
	}
}
?>