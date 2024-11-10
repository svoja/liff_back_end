-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 10, 2024 at 03:19 AM
-- Server version: 8.0.40
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bbm`
--

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text,
  `age_group` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `name`, `price`, `description`, `age_group`, `created_at`, `updated_at`) VALUES
(1, 'เดี่ยว', '2000.00', 'เทส', '2-3', '2024-11-08 20:19:15', '2024-11-08 20:19:41'),
(2, 'คู่', '3000.00', '', '21-23', '2024-11-08 20:23:59', '2024-11-08 20:23:59'),
(3, 'คู่ว่ายน้ำ', '4500.00', '', '3-12', '2024-11-09 04:24:31', '2024-11-09 04:24:31'),
(4, 'เทสจาก MAC', '4000.00', NULL, NULL, '2024-11-09 08:47:35', '2024-11-09 08:47:35'),
(5, 'อัพจาก MAC', '30000.00', NULL, NULL, '2024-11-09 08:49:57', '2024-11-09 08:49:57'),
(6, 'พิมพ์จากแมค', '3000.00', NULL, NULL, '2024-11-09 08:59:27', '2024-11-09 08:59:27');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `type_id` int DEFAULT NULL,
  `description` text,
  `img_url` text,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `type_id`, `description`, `img_url`, `status`, `created_at`, `updated_at`) VALUES
(6, 'เดี่ยว', 1, 'test', 'https://img.freepik.com/free-photo/part-drum-kit-dark-with-beautiful-lighting-concert-performance-concept_169016-10195.jpg?t=st=1731092494~exp=1731096094~hmac=0fd6d43d99be301906e093653dfaabc401a850b47b540f1e5cc6eff854b08beb&w=1380', 0, '2024-11-08 19:04:00', '2024-11-08 19:21:59'),
(7, 'เทส', 1, 'test', '', 1, '2024-11-08 19:05:14', '2024-11-08 19:21:39'),
(8, 'ว่ายน้ำ', 1, '', '', 1, '2024-11-09 04:24:39', '2024-11-09 04:24:39');

-- --------------------------------------------------------

--
-- Table structure for table `subject_packages`
--

CREATE TABLE `subject_packages` (
  `id` int NOT NULL,
  `subject_id` int NOT NULL,
  `package_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `subject_packages`
--

INSERT INTO `subject_packages` (`id`, `subject_id`, `package_id`, `created_at`, `updated_at`) VALUES
(2, 7, 2, '2024-11-09 04:01:08', '2024-11-09 04:20:49'),
(5, 6, 1, '2024-11-09 04:15:00', '2024-11-09 04:15:00'),
(6, 8, 3, '2024-11-09 04:24:50', '2024-11-09 04:24:50'),
(7, 8, 1, '2024-11-09 04:29:15', '2024-11-09 04:34:17');

-- --------------------------------------------------------

--
-- Table structure for table `subject_types`
--

CREATE TABLE `subject_types` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `subject_types`
--

INSERT INTO `subject_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'กีฬา', '2024-11-08 16:05:28', '2024-11-08 18:55:52'),
(2, 'ดนตรี', '2024-11-08 16:17:34', '2024-11-08 18:56:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `subject_packages`
--
ALTER TABLE `subject_packages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_subject_package` (`subject_id`,`package_id`),
  ADD KEY `package_id` (`package_id`);

--
-- Indexes for table `subject_types`
--
ALTER TABLE `subject_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `subject_packages`
--
ALTER TABLE `subject_packages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `subject_types`
--
ALTER TABLE `subject_types`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `subject_types` (`id`);

--
-- Constraints for table `subject_packages`
--
ALTER TABLE `subject_packages`
  ADD CONSTRAINT `subject_packages_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `subject_packages_ibfk_2` FOREIGN KEY (`package_id`) REFERENCES `packages` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
