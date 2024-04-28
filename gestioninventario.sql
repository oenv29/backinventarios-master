-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-04-2024 a las 07:40:54
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestioninventario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignararticulos`
--

CREATE TABLE `asignararticulos` (
  `id` int(11) NOT NULL,
  `id_bloque` int(11) NOT NULL,
  `id_oficina` int(11) NOT NULL,
  `id_articulo` int(11) NOT NULL,
  `fecha_registro` datetime NOT NULL DEFAULT current_timestamp(),
  `estado` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asignararticulos`
--

INSERT INTO `asignararticulos` (`id`, `id_bloque`, `id_oficina`, `id_articulo`, `fecha_registro`, `estado`) VALUES
(1, 1, 1, 1, '2024-04-27 16:39:07', 1),
(2, 1, 1, 2, '2024-04-27 16:41:17', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bloques`
--

CREATE TABLE `bloques` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `estado` tinyint(11) NOT NULL DEFAULT 1,
  `fecha_registra` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bloques`
--

INSERT INTO `bloques` (`id`, `nombre`, `estado`, `fecha_registra`) VALUES
(1, 'BLOQUE A', 1, '2024-04-26 15:50:19'),
(2, 'BLOQUE B', 1, '2024-04-27 13:11:08'),
(3, 'BLOQUE C', 1, '2024-04-27 14:39:38'),
(4, 'BLOQUE D', 1, '2024-04-27 14:53:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oficnas`
--

CREATE TABLE `oficnas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `id_bloque` int(11) NOT NULL,
  `estado` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `oficnas`
--

INSERT INTO `oficnas` (`id`, `nombre`, `id_bloque`, `estado`) VALUES
(1, 'oficina 1', 1, 1),
(2, 'Oficina 2', 1, 1),
(3, 'OFICINA 1', 3, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignararticulos`
--
ALTER TABLE `asignararticulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bloques`
--
ALTER TABLE `bloques`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oficnas`
--
ALTER TABLE `oficnas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_bloque` (`id_bloque`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignararticulos`
--
ALTER TABLE `asignararticulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `bloques`
--
ALTER TABLE `bloques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `oficnas`
--
ALTER TABLE `oficnas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `oficnas`
--
ALTER TABLE `oficnas`
  ADD CONSTRAINT `oficnas_ibfk_1` FOREIGN KEY (`id_bloque`) REFERENCES `bloques` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
