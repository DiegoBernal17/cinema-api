-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: cinemasdb
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cinema`
--

DROP TABLE IF EXISTS `cinema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cinema` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `price_normal` decimal(5,2) NOT NULL,
  `price_3D` decimal(5,2) NOT NULL,
  `price_senior` decimal(5,2) NOT NULL,
  `price_children` decimal(5,2) NOT NULL,
  `address` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `city` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `phone` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinema`
--

LOCK TABLES `cinema` WRITE;
/*!40000 ALTER TABLE `cinema` DISABLE KEYS */;
INSERT INTO `cinema` VALUES (1,'Sendero',56.00,90.00,30.00,30.00,'v sanchez','Saltillo','12323123','2019-01-01 00:00:00','2019-05-16 17:05:35'),(2,'galerias',60.00,100.00,35.00,35.00,'none','Saltillo','8442831681','2019-05-16 16:54:15','2019-05-16 16:54:15');
/*!40000 ALTER TABLE `cinema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `function`
--

DROP TABLE IF EXISTS `function`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `function` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hour` varchar(5) COLLATE latin1_spanish_ci NOT NULL,
  `date_start` datetime NOT NULL,
  `date_finish` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `roomId` int(11) DEFAULT NULL,
  `movieId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roomId` (`roomId`),
  KEY `movieId` (`movieId`),
  CONSTRAINT `function_ibfk_1` FOREIGN KEY (`roomId`) REFERENCES `room` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `function_ibfk_2` FOREIGN KEY (`movieId`) REFERENCES `movie` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `function`
--

LOCK TABLES `function` WRITE;
/*!40000 ALTER TABLE `function` DISABLE KEYS */;
INSERT INTO `function` VALUES (1,'14:00','2019-05-28 00:00:00','2019-04-28 00:00:00',1,'2019-05-28 00:00:00','2019-05-28 00:00:00',1,1);
/*!40000 ALTER TABLE `function` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(140) COLLATE latin1_spanish_ci NOT NULL,
  `synopsis` text COLLATE latin1_spanish_ci,
  `certification` varchar(45) COLLATE latin1_spanish_ci NOT NULL,
  `language` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `duration` float DEFAULT NULL,
  `actors` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `director` varchar(120) COLLATE latin1_spanish_ci NOT NULL,
  `trailer` varchar(200) COLLATE latin1_spanish_ci NOT NULL,
  `poster` varchar(150) COLLATE latin1_spanish_ci NOT NULL,
  `genre` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `type` char(1) COLLATE latin1_spanish_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'Spider-Man: Lejos de Casa','Peter Parker (Tom Holland) decide dejar sus heroicidades a un lado durante unas pocas semanas, y sale de viaje por Europa con sus amigos Ned (Jacob Batalon), MJ (Zendaya) y el resto de compañeros de instituto. Pero las vacaciones de verano darán un giro inesperado cuando aparezca Nick Furia (Samuel L. Jackson), que tiene trabajo para Peter. Varias criaturas elementales, seres hechos de arena, piedra, agua y fuego, están creando el caos y la destrucción en todo el continente. El joven Hombre Araña deberá desentrañar el misterio de estos ataques. Solo y con sus amigos en apuros, además de con la nueva aparición de Mysterio (Jake Gyllenhaal), Peter tendrá que decidirse a dar la cara.','A','español',140,'Tom Holland, Jake Gyllenhaal, Zendaya','Jon Watts','https://www.youtube.com/embed/I4F5sj-aaXw','http://t1.gstatic.com/images?q=tbn:ANd9GcSUwilLyU4GtFBLzXkfM7f_KRep_7qXK9e30Zlix6JlO6DOoI82','Action','1','2019-05-27 00:00:00','2019-05-27 00:00:00'),(2,'Toy Story 4','Woody siempre ha confiado en su lugar en el mundo y que su prioridad es cuidar a su niño, ya sea Andy o Bonnie. Pero cuando Bonnie agrega un nuevo juguete reacio llamado Forky a su habitación, una aventura por carretera junto a viejos y nuevos amigos le mostrará a Woody lo grande que puede ser el mundo para un juguete.','A','español',126,'Tom Hanks, Woody Tim Allen,Annie Potts, Joan Cusack','Josh Cooley','https://www.youtube.com/embed/wmiIUN-7qhE','https://lumiere-a.akamaihd.net/v1/images/asdogj_56bb0752.jpeg?region=0,0,770,1152','Action','1','2019-05-27 00:00:00','2019-05-27 23:52:37');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cinemaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cinemaId` (`cinemaId`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`cinemaId`) REFERENCES `cinema` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion_code`
--

DROP TABLE IF EXISTS `promotion_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promotion_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `code` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `expiration_date` datetime NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion_code`
--

LOCK TABLES `promotion_code` WRITE;
/*!40000 ALTER TABLE `promotion_code` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotion_code` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subtotal` decimal(5,2) NOT NULL,
  `iva` decimal(5,2) NOT NULL,
  `total` decimal(5,2) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_product`
--

DROP TABLE IF EXISTS `purchase_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` float NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `productId` int(11) DEFAULT NULL,
  `purchaseId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `purchaseId` (`purchaseId`),
  CONSTRAINT `purchase_product_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `purchase_product_ibfk_2` FOREIGN KEY (`purchaseId`) REFERENCES `purchase` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_product`
--

LOCK TABLES `purchase_product` WRITE;
/*!40000 ALTER TABLE `purchase_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(2) COLLATE latin1_spanish_ci NOT NULL,
  `total_seat` varchar(2) COLLATE latin1_spanish_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cinemaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cinemaId` (`cinemaId`),
  CONSTRAINT `room_ibfk_1` FOREIGN KEY (`cinemaId`) REFERENCES `cinema` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,'1','21','2019-01-01 00:00:00','2019-01-01 00:00:00',1);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(1) COLLATE latin1_spanish_ci NOT NULL,
  `seat` varchar(3) COLLATE latin1_spanish_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `functionId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `functionId` (`functionId`),
  KEY `userId` (`userId`),
  CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`functionId`) REFERENCES `function` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,'2','B12','2019-05-30 17:25:30','2019-05-30 17:25:30',1,1),(2,'3','A12','2019-05-30 17:26:57','2019-05-30 17:26:57',1,1),(3,'1','E12','2019-05-30 17:28:33','2019-05-30 17:28:33',1,NULL),(4,'1','B7','2019-05-30 17:41:55','2019-05-30 17:41:55',1,NULL),(5,'3','B8','2019-05-30 17:41:55','2019-05-30 17:41:55',1,NULL),(6,'1','C3','2019-05-30 17:43:53','2019-05-30 17:43:53',1,NULL),(7,'3','C5','2019-05-30 17:43:53','2019-05-30 17:43:53',1,NULL),(8,'2','C4','2019-05-30 17:43:53','2019-05-30 17:43:53',1,NULL),(9,'1','C10','2019-05-30 17:47:12','2019-05-30 17:47:12',1,NULL),(10,'1','D10','2019-05-31 00:48:11','2019-05-31 00:48:11',1,1);
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `paternal` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `maternal` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `email` varchar(140) COLLATE latin1_spanish_ci NOT NULL,
  `password` varchar(33) CHARACTER SET latin1 NOT NULL,
  `cellphone` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `birthday` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `cinema_points` int(11) NOT NULL DEFAULT '0',
  `loggedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Diego','Padilla','Bernal','correo@hotmail.com','bfd59291e825b5f2bbf1eb76569f8fe7',NULL,NULL,0,NULL,'2019-05-28 23:09:12','2019-05-28 23:09:12');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-03 13:12:18
