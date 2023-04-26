<?php
 include "login.php";
    $query = mysqli_query($konek,"SELECT * FROM jmlh_barang ORDER BY ID ASC");
	$dataloger = array();
	while($row = mysqli_fetch_assoc($query))
	{
	  	$dataloger[] = $row;
	}
	//Menampilkan konversi data pada tabel dataloger ke format JSO
	echo json_encode($dataloger);
 ?>
