<?php
include "login.php";
$query1 = mysqli_query($konek,"SELECT * FROM jmlh_barang ORDER BY id DESC");
$query2 = mysqli_query($konek,"SELECT * FROM t_setting");

$row = mysqli_fetch_array($query1);
$jumlah_barang1 = $row['jumlah_barang1'];
$jumlah_barang2 = $row['jumlah_barang2'];
$jumlah_barang3 = $row['jumlah_barang3'];

echo $jumlah_barang3;

$row1 = mysqli_fetch_array($query2);
$namabarang1 = $row1['namabarang1'];
$kodebarang1 = $row1['kodebarang1'];
$namabarang2 = $row1['namabarang2'];
$kodebarang2 = $row1['kodebarang2'];

date_default_timezone_set('Asia/Jakarta');
$update_time = date("Y-j-M H:i:s");
$api_key_value = "tPmAT5Ab3j7F1";
$api_key= $kodebarang= $namabarangu= $jumlah_barangu= "";
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $api_key = test_input($_GET['api_key']);
    if($api_key == $api_key_value) {
            $kodebarang = test_input($_GET['kode']);
            if(($kodebarang == $kodebarang1) || ($kodebarang == $kodebarang2))
            {
                if($kodebarang == $kodebarang1)
                {
                    $namabarangu = $namabarang1;
                    $jumlah_barang1++;
                }elseif($kodebarang == $kodebarang2)
                {
                    $namabarangu = $namabarang2;
                    $jumlah_barang2++;
                }
                $simpan1 = mysqli_query($konek, "INSERT INTO jmlh_barang(jumlah_barang1,jumlah_barang2,jumlah_barang3,update_time) VALUES ('$jumlah_barang1','$jumlah_barang2','$jumlah_barang3','$update_time')");
            }else{
                $jumlah_barang3 = $jumlah_barang3 + 1;
                $namabarangu = "Barang Tidak Dikenal";
                $simpan1 = mysqli_query($konek, "INSERT INTO jmlh_barang(jumlah_barang1,jumlah_barang2,jumlah_barang3,update_time) VALUES ('$jumlah_barang1','$jumlah_barang2','$jumlah_barang3','$update_time')");

            }
            $simpan2 = mysqli_query($konek, "INSERT INTO t_logbarang(nama_barang,kode_barang,update_time)VALUES('$namabarangu','$kodebarang','$update_time')");
            if($simpan1)
            {
                echo $namabarangu;
                echo " berhasil";
            }
        }
    else {
        echo "Wrong API Key provided.";
    }

}
else {
    echo "No data posted with HTTP POST.";
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}