<?php
include "login.php";
      $kode = $_POST['kode'];
      if($kode == "set_user")
      {
        $first_name = mysqli_real_escape_string($konek, $_POST["first_name"]);
        $last_name = mysqli_real_escape_string($konek, $_POST["last_name"]);
        $email = mysqli_real_escape_string($konek, $_POST["email"]);
        $school = mysqli_real_escape_string($konek, $_POST["school"]);
        $prodi = mysqli_real_escape_string($konek, $_POST["prodi"]);
        $about = mysqli_real_escape_string($konek, $_POST["about"]);
        $nim = mysqli_real_escape_string($konek, $_POST["nim"]);
        $userid = mysqli_real_escape_string($konek, $_POST["id"]);
        $query= "UPDATE `t_user` SET firstname='$first_name',lastname ='$last_name', email ='$email', school ='$school', prodi='$prodi',about ='$about',nim ='$nim' where id = '$userid'";
      }elseif ($kode == "set_data") {
        $id = mysqli_real_escape_string($konek, $_POST["id"]);
        $parameter1 = mysqli_real_escape_string($konek, $_POST["parameter1"]);
        $parameter2 = mysqli_real_escape_string($konek, $_POST["parameter2"]);
        $parameter3 = mysqli_real_escape_string($konek, $_POST["parameter3"]);
        $parameter4 = mysqli_real_escape_string($konek, $_POST["parameter4"]);
        $parameter5 = mysqli_real_escape_string($konek, $_POST["parameter5"]);
        $query= "UPDATE `t_setting` SET namabarang1='$parameter1',kodebarang1 ='$parameter2' ,namabarang2='$parameter3',kodebarang2 ='$parameter4', kecepatan ='$parameter5'  where id = '$id'";
      }

      mysqli_query($konek, $query);
      if($query)
      {
          echo "TERKIRIM";
      }


?>