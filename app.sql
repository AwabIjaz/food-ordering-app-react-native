-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 25, 2018 at 12:55 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dineintime`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `item_id` int(40) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(40) NOT NULL,
  `r_id` int(40) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category` varchar(40) NOT NULL,
  `price` int(200) NOT NULL,
  PRIMARY KEY (`item_id`),
  KEY `restaurant id_fk` (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `product_name`, `r_id`, `created_at`, `updated_at`, `category`, `price`) VALUES
(1, 'chicken tandoori wrap', 3, NULL, NULL, 'wrap', 249),
(2, 'pepperoni cheese paratha', 3, NULL, NULL, 'special', 229),
(3, 'pizza paratha', 3, NULL, NULL, 'special', 279),
(4, 'chicken supreme pizza', 1, NULL, NULL, 'pizza', 315),
(5, 'chicken fajita ', 1, NULL, NULL, 'pizza', 315),
(6, 'fruit & maple oatmeal', 2, NULL, NULL, 'breakfast', 340),
(7, 'egg McMuffin', 2, NULL, NULL, 'breakfast', 200),
(8, 'sausage McMuffin', 2, NULL, NULL, 'breakfast', 360),
(9, 'cafe latte', 4, NULL, NULL, 'hot speciality', 299),
(10, 'cappuccino', 4, NULL, NULL, 'hot speciality', 299),
(11, 'iced cafe latte', 4, NULL, NULL, 'cold coffee', 390),
(12, 'iced cafe mocha', 4, NULL, NULL, 'cold coffee', 399),
(13, 'chocolicious brownie', 1, NULL, NULL, 'desserts', 279),
(14, 'harshey\'s chocolate chip cookie', 1, NULL, NULL, 'desserts', 759),
(15, 'hershey\'s double chocolate chip cookie', 1, NULL, NULL, 'desserts', 759),
(16, 'soft drink', 1, NULL, NULL, 'beverges', 185),
(17, 'pepsi', 1, NULL, NULL, 'beverages', 90),
(18, 'mirinda', 1, NULL, NULL, 'beverages', 90),
(19, 'spicy wedges', 1, NULL, NULL, 'starters', 229),
(20, 'garlic bread', 1, NULL, NULL, 'starters', 229),
(21, 'chicken wings', 1, NULL, NULL, 'starters', 349),
(22, 'garlic mushrooms', 1, NULL, NULL, 'starters', 279),
(23, 'garlic white chedder burger', 2, NULL, NULL, 'burgers', 200),
(24, 'sweet BBQ bacon burger', 2, NULL, NULL, 'burgers', 230),
(25, 'big mac', 2, NULL, NULL, 'burgers', 300),
(26, 'bacon ranch salad with buttermilk chickn', 2, NULL, NULL, 'salads', 250),
(27, 'bacon ranch grilled chicken', 2, NULL, NULL, 'salads', 300),
(28, 'southwest buttermilk crispy chicken', 2, NULL, NULL, 'salads', 340),
(29, 'southwest grilled chicken ', 2, NULL, NULL, 'salad', 300),
(30, 'egg McMuffin', 2, NULL, NULL, 'extra value meal', 500),
(31, 'bacon ,egg and cheese biscuit', 2, NULL, NULL, 'extra value meal', 510),
(32, 'bacon,egg and cheese McGriddles', 2, NULL, NULL, 'extra value meal', 600),
(33, 'turtle macchiato', 2, NULL, NULL, 'McCafe', 300),
(34, 'caramel macchiato', 2, NULL, NULL, 'McCafe', 300),
(35, 'cappuccino', 2, NULL, NULL, 'McCafe', 250),
(36, 'chicken cheese qeema paratha', 3, NULL, NULL, 'special', 239),
(37, 'cheese paratha', 3, NULL, NULL, 'special', 199),
(38, 'BBQ tikka wrap', 3, NULL, NULL, 'wrap', 189),
(39, 'chicken cheese kabab wrap', 3, NULL, NULL, 'wrap', 219),
(40, 'nutella paratha', 3, NULL, NULL, 'meetha', 179),
(41, 'khoya paratha', 3, NULL, NULL, 'meetha', 159),
(42, 'honey & cream paratha', 3, NULL, NULL, 'meetha', 169),
(43, 'americano', 4, NULL, NULL, 'hot speciality', 230),
(44, 'coconut latte', 4, NULL, NULL, 'hot speciality', 340),
(45, 'earl grey tea', 4, NULL, NULL, 'flavoured tea', 250),
(46, 'lipton tea', 4, NULL, NULL, 'flavoured tea', 250),
(47, 'brilliant breakfast tea', 4, NULL, NULL, 'flavoured tea', 250),
(48, 'BBQ sub', 4, NULL, NULL, 'fast food', 395),
(49, 'club sandwich', 4, NULL, NULL, 'fast food', 425),
(50, 'chicken wrap', 4, NULL, NULL, 'fast food', 225),
(51, 'french fries', 5, NULL, NULL, 'fries ', 200),
(52, 'fried pickles', 5, NULL, NULL, 'fries', 200),
(53, 'smash fries', 5, NULL, NULL, 'fries', 210),
(54, 'sweet potato fries', 5, NULL, NULL, 'fries', 300),
(55, 'haystack onions', 5, NULL, NULL, 'fries', 250),
(56, 'kids meal', 5, NULL, NULL, 'kids smash', 340),
(57, 'grilled cheese', 5, NULL, NULL, 'kids meal', 400),
(58, 'chicken strips', 5, NULL, NULL, 'kids meal', 350),
(59, 'chocolate', 5, NULL, NULL, 'shakes', 200),
(60, 'vanilla', 5, NULL, NULL, 'shakes', 200),
(61, 'strawberry', 5, NULL, NULL, 'shakes', 200),
(62, 'tikka pizza', 6, NULL, NULL, 'pizza', 430),
(63, 'fajita pizza', 6, NULL, NULL, 'pizza', 430),
(64, 'supreme pizza', 6, NULL, NULL, 'pizza', 430),
(65, 'chicken patty burger', 6, NULL, NULL, 'fast food', 120),
(66, 'junction special patty burger', 6, NULL, NULL, 'fast food', 160),
(67, 'zinger burger', 6, NULL, NULL, 'fast food', 150),
(68, 'nuggets burger', 6, NULL, NULL, 'fast food', 140),
(69, 'chicken cold sandwich', 6, NULL, NULL, 'sandwiches', 140),
(70, 'chicken sandwish', 6, NULL, NULL, 'sandwiches', 200),
(71, 'club sandwiche', 6, NULL, NULL, 'sandwiches', 240),
(72, 'soft drinks', 6, NULL, NULL, 'beverages', 50),
(73, 'mineral water', 6, NULL, NULL, 'beverages', 30),
(74, 'GMC chicken original box', 7, NULL, NULL, 'family box', 1000),
(75, 'chicken premium box', 7, NULL, NULL, 'family box', 1250),
(76, 'premium mix', 7, NULL, NULL, 'family box', 1500),
(77, 'original nuggets', 7, NULL, NULL, 'nuggets', 250),
(78, 'jumbo nuggets', 7, NULL, NULL, 'nuggets', 400),
(79, 'original classic beef', 7, NULL, NULL, 'burger', 350),
(80, 'spicy chicken burger', 7, NULL, NULL, 'burger', 390),
(81, 'chedder classic beef', 7, NULL, NULL, 'burger', 350),
(82, 'cheese slice', 7, NULL, NULL, 'extra', 50),
(83, 'spicy grilled onions', 7, NULL, NULL, 'extra', 30),
(84, 'jalapeno', 7, NULL, NULL, 'extra', 50),
(85, 'original BBQ dip', 7, NULL, NULL, 'extra', 50),
(86, 'chicken tender', 8, NULL, NULL, 'treat', 390),
(87, 'chicken nuggets', 8, NULL, NULL, 'treat', 250),
(88, 'french fries', 8, NULL, NULL, 'treat', 120),
(89, 'grilled wings', 8, NULL, NULL, 'treat', 250),
(90, 'garlic mayo dip', 8, NULL, NULL, 'dips', 50),
(91, 'bazooka dip', 8, NULL, NULL, 'dips', 60),
(92, 'BBQ sauce', 8, NULL, NULL, 'dips', 50),
(93, 'cluster', 8, NULL, NULL, 'burger', 340),
(94, 'chicken mushroom', 8, NULL, NULL, 'burger', 390),
(95, 'tizzler', 8, NULL, NULL, 'burger', 390),
(96, 'belly buster', 8, NULL, NULL, 'burger', 490),
(97, 'heavy loader', 8, NULL, NULL, 'burger', 540),
(98, 'dark chocolate ', 8, NULL, NULL, 'shakes', 290),
(99, 'white chocolate', 8, NULL, NULL, 'shakes', 290),
(100, 'vanilla ', 8, NULL, NULL, 'shakes', 290),
(101, 'caramel macchiato', 8, NULL, NULL, 'shakes', 290),
(102, 'boston torando burger', 9, NULL, NULL, 'fast food', 310),
(103, 'magic shroom burger', 9, NULL, NULL, 'fast food', 290),
(104, 'crispy burger', 9, NULL, NULL, 'fast food', 220),
(105, 'royal burger', 9, NULL, NULL, 'fast food', 330),
(106, 'quater broast', 9, NULL, NULL, 'broast', 280),
(107, 'half broast', 9, NULL, NULL, 'broast', 490),
(108, 'full broast', 9, NULL, NULL, 'broast', 930),
(109, 'hot wings', 9, NULL, NULL, 'extra', 120),
(110, 'french fries', 9, NULL, NULL, 'extra', 100),
(111, 'masala fries', 9, NULL, NULL, 'extra', 160),
(112, 'cheese fries', 9, NULL, NULL, 'extra', 230),
(113, 'classic king box', 10, NULL, NULL, 'family king box', 1190),
(114, 'grand king box', 10, NULL, NULL, 'family king box', 1690),
(115, 'whopper meal', 10, NULL, NULL, 'burger meal', 585),
(116, 'steak burger meal', 10, NULL, NULL, 'burger meal', 660),
(117, 'big king meal', 10, NULL, NULL, 'burger meal', 510),
(118, 'original beef steak house', 10, NULL, NULL, 'burger meal', 660),
(119, 'whopper JR burger', 10, NULL, NULL, 'king deal', 310),
(120, 'spicy crispy chicken burger', 10, NULL, NULL, 'king deal', 310),
(121, 'chicken tikka burger', 10, NULL, NULL, 'king deal', 360),
(122, 'king rings', 10, NULL, NULL, 'side order', 270),
(123, 'nuggets', 10, NULL, NULL, 'side order', 310),
(124, 'chicken fries', 10, NULL, NULL, 'side order', 260),
(125, 'roda glory', 11, NULL, NULL, 'beef burger', 599),
(126, 'son of a bun', 11, NULL, NULL, 'beef burger', 679),
(127, 'tickle pickle', 11, NULL, NULL, 'beef burger', 589),
(128, 'john waynes', 11, NULL, NULL, 'beef burger', 579),
(129, 'wrangler', 11, NULL, NULL, 'chicken burger', 597),
(130, 'rango tango', 11, NULL, NULL, 'chicken burger', 597),
(131, 'smookin', 11, NULL, NULL, 'chicken burger', 699),
(132, 'gunslinger pepper steak', 11, NULL, NULL, 'steak', 849),
(133, 'texan white sauce steak', 11, NULL, NULL, 'steak', 849),
(134, 'desperado jalapeno steak', 11, NULL, NULL, 'steak', 849),
(135, 'country cowboy plain fries', 11, NULL, NULL, 'fries', 189),
(136, 'frenzy twisted fries', 11, NULL, NULL, 'fries', 249),
(137, 'garlic mayo fries', 11, NULL, NULL, 'fries', 249),
(138, 'hot cowgirl masala fries', 11, NULL, NULL, 'fries', 199);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_05_21_122949_create_news_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
CREATE TABLE IF NOT EXISTS `restaurants` (
  `id` int(40) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` longtext,
  `location` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`, `image`, `location`) VALUES
(1, 'pizza hut', 'pizzahut@gmail.com', 'pizza123', NULL, NULL, 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\pizzahut.jpg', 'wapda town'),
(2, 'McDonalds', 'mcd@gmail.com', 'mcd123', NULL, NULL, 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\mcd.png', 'johar town'),
(3, 'what a paratha', 'whataparatha@gmail.com', 'whataparatha123', NULL, NULL, 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\whata.jpg', 'johar town'),
(4, 'coffee planet', 'cp@gmail.com', 'cp123', NULL, NULL, 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\cp.png', 'johar town'),
(5, 'smash', 'smash@gmail.com', 'smash123', '2018-05-21 07:34:05', '2018-05-21 07:34:05', 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\smash.png', 'PIA road'),
(6, 'food junction', 'foodjunction@gmail.com', 'foodjunction123', NULL, NULL, 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\fc.jpg', 'wapda town'),
(7, 'OPTP', 'optp@gmail.com', 'optp123', NULL, NULL, 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\optp.jpg', 'faisal town'),
(8, 'Timmy\'s', 'timmys@gmail.com', 'timmys123', NULL, NULL, 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\timmys.png', 'johar town'),
(9, 'Rooster\'s', 'roosters@gmail.com', 'roosters123', NULL, NULL, 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\roosters.jpg', 'johar town\r\n'),
(10, 'Burger King', 'burgerking@gmail.com', 'burgerking123', NULL, NULL, 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\bk.png', 'johar town'),
(11, 'Howdy', 'howdy@gmail.com', 'howdy123', NULL, NULL, 'C:\\Users\\AWAB\\Desktop\\React Native\\dine\\images\\howdy.jpg', 'johar town');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(40) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `created_at`, `update_at`) VALUES
(1, 'akbar', 'akbar@gmail.com', 'akbar123', NULL, NULL),
(2, 'saba', 'saba@gmail.com', 'saba1234', NULL, NULL),
(3, 'awab', 'awab@gmail.com', 'awab1234', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
