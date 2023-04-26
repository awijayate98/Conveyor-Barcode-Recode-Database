<?php
 include "login.php";
    $query = mysqli_query($konek,"SELECT * FROM t_logbarang ORDER BY ID ASC");
	$dataloger = array();
	$counter = 0;
	while($row = mysqli_fetch_assoc($query))
	{
		$counter++;
		$row['number'] = $counter;
	  	$dataloger[] = $row;
	}
	//Menampilkan konversi data pada tabel dataloger ke format JSO
	echo json_encode($dataloger);
 ?>
