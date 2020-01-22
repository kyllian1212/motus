<?php
class Connexion{
	private $cnx;
	public static function getConnexion()
	{
		$user="root";
		$pwd="";
		try
		{
			$cnx = new PDO('mysql:host=localhost;dbname=mots_francais',$user,$pwd);
			$cnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$cnx->exec("SET CHARACTER  SET utf8");
		}
		catch(PDOException $e)
		{
			$erreur= $e->getMessage();
		}
		return $cnx;
	}
	public static function deConnexion()
	{
		try
		{
				$cnx=null;
		}
		catch(PDOException $e)
		{
			$erreur= $e->getMessage();
		}
	}
}
?>