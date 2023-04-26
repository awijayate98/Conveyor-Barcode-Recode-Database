-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 10 Sep 2022 pada 16.53
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_conveyor`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `jmlh_barang`
--

CREATE TABLE `jmlh_barang` (
  `id` int(11) NOT NULL,
  `jumlah_barang1` int(11) NOT NULL,
  `jumlah_barang2` int(11) NOT NULL,
  `jumlah_barang3` int(11) NOT NULL,
  `update_time` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `jmlh_barang`
--

INSERT INTO `jmlh_barang` (`id`, `jumlah_barang1`, `jumlah_barang2`, `jumlah_barang3`, `update_time`) VALUES
(1, 1, 1, 1, '2022-8-Sep 04:38:45'),
(2, 1, 1, 1, '2022-8-Sep 04:38:45'),
(3, 1, 1, 2, '2022-9-Sep 03:20:18'),
(4, 1, 1, 2, '2022-9-Sep 03:20:34'),
(5, 1, 1, 2, '2022-9-Sep 03:20:44'),
(6, 1, 1, 2, '2022-9-Sep 03:21:25'),
(7, 1, 1, 2, '2022-9-Sep 03:21:32'),
(8, 1, 1, 2, '2022-9-Sep 03:21:53'),
(9, 1, 1, 2, '2022-9-Sep 03:22:20'),
(10, 1, 1, 2, '2022-9-Sep 03:24:03'),
(11, 1, 1, 2, '2022-9-Sep 03:24:52'),
(12, 1, 1, 2, '2022-9-Sep 03:25:23'),
(13, 1, 1, 3, '2022-9-Sep 03:28:38'),
(14, 1, 1, 4, '2022-9-Sep 03:28:47'),
(15, 1, 1, 5, '2022-9-Sep 03:28:50'),
(16, 1, 1, 6, '2022-9-Sep 03:28:52'),
(17, 1, 1, 7, '2022-9-Sep 03:28:53'),
(19, 0, 3, 7, '2022-9-Sep 03:43:15'),
(20, 0, 4, 7, '2022-10-Sep 21:22:39');

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_logbarang`
--

CREATE TABLE `t_logbarang` (
  `id` int(11) NOT NULL,
  `nama_barang` varchar(25) NOT NULL,
  `kode_barang` varchar(25) NOT NULL,
  `update_time` char(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `t_logbarang`
--

INSERT INTO `t_logbarang` (`id`, `nama_barang`, `kode_barang`, `update_time`) VALUES
(2, 'keyboard', '8988885894547', '2022-8-Sep 21:07:15'),
(36, 'keyboard', '8988885894547', '2022-9-Sep 03:42:56'),
(37, 'keyboard', '8988885894547', '2022-9-Sep 03:43:15'),
(38, 'keyboard', '8988885894547', '2022-10-Sep 21:22:39');

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_setting`
--

CREATE TABLE `t_setting` (
  `namabarang1` varchar(25) NOT NULL,
  `kodebarang1` varchar(25) NOT NULL,
  `namabarang2` varchar(25) NOT NULL,
  `kodebarang2` varchar(25) NOT NULL,
  `kecepatan` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `t_setting`
--

INSERT INTO `t_setting` (`namabarang1`, `kodebarang1`, `namabarang2`, `kodebarang2`, `kecepatan`, `id`) VALUES
('mouse', '8994214995547', 'keyboard', '8988885894547', 250, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_user`
--

CREATE TABLE `t_user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(25) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `nim` varchar(20) NOT NULL,
  `prodi` varchar(20) NOT NULL,
  `school` varchar(35) NOT NULL,
  `email` varchar(25) NOT NULL,
  `about` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `t_user`
--

INSERT INTO `t_user` (`id`, `firstname`, `lastname`, `nim`, `prodi`, `school`, `email`, `about`) VALUES
(1, 'Ahmad', 'Wijaya', '1620201085', 'Teknik Elektro', 'Universitas Muhammadiyah Tangerang', 'ahmadwijaya.te@gmail.com', 'Simple and have fun');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `jmlh_barang`
--
ALTER TABLE `jmlh_barang`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `t_logbarang`
--
ALTER TABLE `t_logbarang`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `t_setting`
--
ALTER TABLE `t_setting`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `jmlh_barang`
--
ALTER TABLE `jmlh_barang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `t_logbarang`
--
ALTER TABLE `t_logbarang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT untuk tabel `t_setting`
--
ALTER TABLE `t_setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `t_user`
--
ALTER TABLE `t_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
