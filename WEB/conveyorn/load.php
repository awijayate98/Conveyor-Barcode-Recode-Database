<?php
 include "config/login.php";
    $query = mysqli_query($konek,"SELECT * FROM t_setting ORDER BY ID ASC");
	$queryjumlah = mysqli_query($konek,"SELECT * FROM t_logbarang ");
	$jumlah = mysqli_num_rows($queryjumlah);
	//$row_query = mysqli_fetch_array($query);
	//Membuat variabel dataloger dengan jenis Array
	$dataseting = array();
	while($row = mysqli_fetch_assoc($query))
	{
	  $dataseting[] = $row;
	}
	//$jsonArray = json_decode($contents,true);
	$dataseting['jumlah']="$jumlah";
	echo json_encode($dataseting);
 ?>
