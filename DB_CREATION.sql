-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 04, 2014 at 08:08 PM
-- Server version: 5.5.33
-- PHP Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `CSV_DB`
--

-- --------------------------------------------------------

--
-- Table structure for table `STRIDE_DATA_2`
--

CREATE TABLE `STRIDE_DATA_2` (
  `Subject` varchar(255) NOT NULL,
  `Date` varchar(255) NOT NULL,
  `Speed (m/s)` float NOT NULL,
  `Stride` float NOT NULL,
  `L Peak Force (BW)` float NOT NULL,
  `R Peak Force (BW)` float NOT NULL,
  `L Vert Imp (Ns)` float NOT NULL,
  `R Vert Imp (Ns)` float NOT NULL,
  `L Horz Imp (Ns)` float NOT NULL,
  `R Horz Imp (Ns)` float NOT NULL,
  `L GT (s)` float NOT NULL,
  `R GT (s)` float NOT NULL,
  `L FT (s)` float NOT NULL,
  `R FT (s)` float NOT NULL,
  `SR (Hz)` float NOT NULL,
  `SL (m)` float NOT NULL,
  `L Knee TD (deg)` float NOT NULL,
  `R Knee TD (deg)` float NOT NULL,
  `L Knee Stance (deg)` float NOT NULL,
  `R Knee Stance (deg)` float NOT NULL,
  `L Knee TO (deg)` float NOT NULL,
  `R Knee TO (deg)` float NOT NULL,
  `L Knee Swing (deg)` float NOT NULL,
  `R Knee Swing (deg)` float NOT NULL,
  `L Knee Range (deg)` float NOT NULL,
  `R Knee Range (deg)` float NOT NULL,
  `L Hip Flex (deg)` float NOT NULL,
  `R Hip Flex (deg)` float NOT NULL,
  `L Hip Ext (deg)` float NOT NULL,
  `R Hip Ext (deg)` float NOT NULL,
  `L Dorsi TD (deg)` float NOT NULL,
  `R Dorsi TD (deg)` float NOT NULL,
  `L Dorsi Stance (deg)` float NOT NULL,
  `R Dorsi Stance (deg)` float NOT NULL,
  `L Plantar TO (deg)` float NOT NULL,
  `R Plantar TO (deg)` float NOT NULL,
  `L Plantar Vel (deg/s)` float NOT NULL,
  `R Plantar Vel (deg/s)` float NOT NULL,
  `L CM Vert (mm)` float NOT NULL,
  `R CM Vert (mm)` float NOT NULL,
  `L Knee Sep (mm)` float NOT NULL,
  `R Knee Sep (mm)` float NOT NULL,
  `L CM Toe (mm)` float NOT NULL,
  `R CM Toe (mm)` float NOT NULL,
  `Lake Loop Season (s)` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;