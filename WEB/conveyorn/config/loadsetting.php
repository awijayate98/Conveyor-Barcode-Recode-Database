<?php
 include "login.php";
    $query = mysqli_query($konek,"SELECT * FROM t_setting ORDER BY ID ASC");
	$queryjumlah = mysqli_query($konek,"SELECT * FROM t_logbarang ");
	$jumlah = mysqli_num_rows($queryjumlah);
	//$row_query = mysqli_fetch_array($query);
	//Membuat variabel dataloger dengan jenis Array
	$dataloger = array();
	while($row = mysqli_fetch_assoc($query))
	{
	  $dataloger[] = $row;
	}
	//Menampilkan konversi data pada tabel dataloger ke format JSON
	//echo json_encode($dataloger);
	echo $jumlah;
 ?>
