<?php
include_once 'connexion.php';

class dialogbd
{
	
	public static function getToutLesMots()
	{
		$conn= Connexion::getConnexion();
		$sql= "SELECT * FROM `motus` where LENGTH(mots) = 8";
		$sth=$conn->prepare($sql);
		$sth->execute();
		$mots=$sth->fetchAll(PDO::FETCH_CLASS);
	
		return $mots;
	}
	
	/*public static function getLesMedecins()
	{
		$conn= Connexion::getConnexion();
		$sql= "select * from medecin order by nom" ;
		$sth=$conn->prepare($sql);
		$sth->execute();
		$medecins=$sth->fetchAll(PDO::FETCH_CLASS);
	
		return $medecins;
	}
	public static function getLeMedecin($nom)
	{
		$conn= Connexion::getConnexion();
		$sql= "select * from medecin where nom like :nom";
		$sth=$conn->prepare($sql);
		$sth->bindParam(':nom',$nom,PDO::PARAM_STR,30);
		$sth->execute();
		$medecins=$sth->fetchAll(PDO::FETCH_CLASS);
		return $medecins;
	}
	public static function getLeMedecinParId($id)
	{
		$conn= Connexion::getConnexion();
		$sql= "select * from medecin where id = :id";
		$sth=$conn->prepare($sql);
		$sth->bindParam(':id',$id,PDO::PARAM_INT,11);
		$sth->execute();
		$medecins=$sth->fetchAll(PDO::FETCH_CLASS);
		return $medecins;
	}
	public static function insertRapport($date,$motif,$bilan,$idVisiteur,$idMedecin)
	{
		$conn= Connexion::getConnexion();
		$sql= "insert into rapport VALUES(default,:date,:motif,:bilan,:idVisiteur,:idMedecin)";
		$sth=$conn->prepare($sql);
		$sth->bindParam(':date',$date,PDO::PARAM_STR,20);
		$sth->bindParam(':motif',$motif,PDO::PARAM_STR,100);
		$sth->bindParam(':bilan',$bilan,PDO::PARAM_STR,100);
		$sth->bindParam(':idVisiteur',$idVisiteur,PDO::PARAM_STR,4);
		$sth->bindParam(':idMedecin',$idMedecin,PDO::PARAM_INT,11);
		$sth->execute();
		$sqql= "select MAX(id) as max from rapport";
		$sty=$conn->prepare($sqql);
		$sty->execute();
		$idRapport=$sty->fetchAll(PDO::FETCH_CLASS);
		return $idRapport;
		
	}
	public static function getLesMedicaments()
	{
		$conn= Connexion::getConnexion();
		$sql= "select * from medicament" ;
		$sth=$conn->prepare($sql);
		$sth->execute();
		$medicaments=$sth->fetchAll(PDO::FETCH_CLASS);
	
		return $medicaments;
	}
	public static function getRapportsMedecin($idMedecin){
		$conn= Connexion::getConnexion();
		$sql = "select date, motif, bilan,nom  from rapport inner join visiteur on rapport.idVisiteur = visiteur.id  where idMedecin = :idMedecin";
		$sth=$conn->prepare($sql);
		$sth->bindParam(':idMedecin',$idMedecin,PDO::PARAM_INT,11);
		$sth->execute();
		$rapports=$sth->fetchAll(PDO::FETCH_CLASS);
		
		return $rapports;
		
	}
	public static function getRapportsParDate($laDate){
		$conn= Connexion::getConnexion();
		$sql = "select *  from rapport   where date = :date";
		$sth=$conn->prepare($sql);
		$sth->bindParam(':date',$laDate,PDO::PARAM_STR,30);
		$sth->execute();
		$rapports=$sth->fetchAll(PDO::FETCH_CLASS);
		
		return $rapports;
	}
	public static function updateRapport($motif,$bilan,$id){
		$conn= Connexion::getConnexion();
		$sql = "update rapport set bilan = :bilan, motif= :motif  where id = :id";
		$sth=$conn->prepare($sql);
		$sth->bindParam(':bilan',$bilan,PDO::PARAM_STR,100);
		$sth->bindParam(':motif',$motif,PDO::PARAM_STR,100);
		$sth->bindParam(':id',$id,PDO::PARAM_INT,11);
		$sth->execute();
		
	}
	public static function getVisiteurs(){
		$conn= Connexion::getConnexion();
		$sql = "select nom , prenom , login , adresse, cp , ville from visiteur";
		$sth = $conn->prepare($sql);
		$sth->execute();
		$visiteurs = $sth->fetchAll(PDO::FETCH_CLASS);
		
		return $visiteurs;
	}
	public static function insertOffre($idRapport,$idMedicament,$quantite)
	{
		$conn= Connexion::getConnexion();
		$sql = "insert into offrir VALUES(:idRapport,:idMedicament,:quantite)";
		$sth = $conn->prepare($sql);
		$sth->bindParam(':idRapport',$idRapport,PDO::PARAM_INT,11);
		$sth->bindParam(':idMedicament',$idMedicament,PDO::PARAM_STR,30);
		$sth->bindParam(':quantite',$quantite,PDO::PARAM_INT,2);
		$sth->execute();
	}
	public static function getModifMedecin($specialite,$telephone,$adresse)
	{
		$conn= Connexion::getConnexion();
		$sql="";
		if($specialite!="" && $telephone !="" && $adresse !="")
		{
			$sql="update medecin set adresse =:adresse , tel =:telephone , 	specialitecomplementaire=:specialite";
		}
		else if($specialite!="" && $adresse !="")
		{
			$sql="update medecin set adresse =:adresse, specialitecomplementaire=:specialite";
		}
		else if($telephone=="" && $adresse =="")
		{
			$sql="update medecin set tel =:telephone, adresse =:adresse";
		}
		
		
	}*/
}
?>