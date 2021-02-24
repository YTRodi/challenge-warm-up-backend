-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: blog_backend_alkemy
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Origen del Yorkshire terrier','El Yorkshire terrier es una raza canina producto de la combinación de terrier escoceses e ingleses, que se originó cuando una parte de la población de Escocia se vio desplazada, debido a la Revolución industrial, y se asentaron en Inglaterra.','https://c0.klipartz.com/pngpicture/628/221/gratis-png-yorkshire-terrier-boston-terrier-cachorro-airedale-terrier-american-staffordshire-terrier-yorkshire-terrier.png','Animales','2021-02-24 01:50:23'),(2,'Origen del Yorkshire terrier','El Yorkshire terrier es una raza canina producto de la combinación de terrier escoceses e ingleses, que se originó cuando una parte de la población de Escocia se vio desplazada, debido a la Revolución industrial, y se asentaron en Inglaterra.','https://img2.freepng.es/20180526/zar/kisspng-yorkshire-terrier-puppy-siberian-husky-dog-groomin-5b09080da2f807.4200644015273185416675.jpg','Animales','2021-02-24 01:51:35'),(4,'Genshin Impact, el mejor juego del 2020!','Genshin Impact es un juego de acción ARPG de mundo abierto free-to-play con una mecánica de monetización de Gacha para conseguir elementos adicionales como personajes especiales y armas. Es el tercer videojuego desarrollado por miHoYo, tras Gun GirlZ y Honkai Impact 3rd. Genshin Impact fue lanzado oficialmente a nivel mundial el 28 de septiembre de 2020 en las plataformas Android, iOS, Microsoft Windows y PlayStation 4.','https://as01.epimg.net/meristation/imagenes/2020/07/27/avances/1595847048_325105_1596873677_portada_normal.jpg','Juegos','2021-02-24 02:02:35');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-23 23:04:07
