-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2023 at 05:10 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yodep`
--

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `position` text COLLATE utf8_unicode_ci NOT NULL,
  `imageURL` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `galley`
--

CREATE TABLE `galley` (
  `id` int(11) NOT NULL,
  `imageURL` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `name`, `date`) VALUES
(1, 'Save the Children', '0000-00-00'),
(2, 'National Youth Council', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imageURL` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text` text COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `imageURL`, `text`, `date`) VALUES
(1, 'EARLY CHILDHOOD EDUCATION PROGRAMME ACTIVITIES\r\n', '/logo.png', 'EARLY CHILDHOOD EDUCATION PROGRAMME ACTIVITIES\r\nEstablishment of Early Childhood Care and Development Centres (ECCD)\r\nNutrition Support to Children at ECCD Centres\r\nAdvocate for access to inclusive education\r\nTraining of caregivers\r\nStrengthen the capacity of ECD Centres\r\nConstruction of ECCD Centres\r\nBASIC EDUCATION\r\nBursary Scheme to needy Secondary school students\r\nProvision of school supplies to needy students at primary and secondary school\r\nAwareness creation of importance of education\r\nPromote early child education\r\nGo back to school campaign\r\nMonitoring school attendance', '2023-02-01'),
(2, 'BASIC EDUCATION', '/logo.png', 'Bursary Scheme to needy Secondary school students\r\nProvision of school supplies to needy students at primary and secondary school\r\nAwareness creation of importance of education\r\nPromote early child education\r\nGo back to school campaign\r\nMonitoring school attendance\r\n \r\n\r\nCHILD PROTECTION\r\nAdvocacy on ending Early marriages\r\nPsycho social support\r\nTraining of children corner counsellors\r\nAdvocacy against harmful cultural practices\r\nPromotion of Child rights\r\nPromotion of child safeguarding issues\r\nADOLESCENT DEVELOPMENT\r\nEstablishment of youth friendly health clubs\r\nFacilitate establishment of teen and youth clubs\r\nProvision of sanitary pads to school girls\r\nCapacity building on menstrual and hygiene management\r\nRecycling and reusing of wastes', '2023-02-01'),
(3, 'Che Steve testing', '/hello.jpg', 'Bursary Scheme to needy Secondary school students\r\nProvision of school supplies to needy students at primary and secondary school\r\nAwareness creation of importance of education\r\nPromote early child education\r\nGo back to school campaign\r\nMonitoring school attendance\r\n \r\n\r\nCHILD PROTECTION\r\nAdvocacy on ending Early marriages\r\nPsycho social support\r\nTraining of children corner counsellors\r\nAdvocacy against harmful cultural practices\r\nPromotion of Child rights\r\nPromotion of child safeguarding issues\r\nADOLESCENT DEVELOPMENT\r\nEstablishment of youth friendly health clubs\r\nFacilitate establishment of teen and youth clubs\r\nProvision of sanitary pads to school girls\r\nCapacity building on menstrual and hygiene management\r\nRecycling and reusing of wastes', '2023-02-01');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text` text COLLATE utf8_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vacancy`
--

CREATE TABLE `vacancy` (
  `id` int(11) NOT NULL,
  `position` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `duties` text COLLATE utf8_unicode_ci NOT NULL,
  `post_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galley`
--
ALTER TABLE `galley`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vacancy`
--
ALTER TABLE `vacancy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `galley`
--
ALTER TABLE `galley`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vacancy`
--
ALTER TABLE `vacancy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
