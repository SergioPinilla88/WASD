-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema WASD
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `WASD` ;

-- -----------------------------------------------------
-- Schema WASD
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `WASD` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema wasd
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `wasd` ;

-- -----------------------------------------------------
-- Schema wasd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wasd` DEFAULT CHARACTER SET utf8mb3 ;
USE `WASD` ;

-- -----------------------------------------------------
-- Table `wasd`.`categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wasd`.`categoria` ;

CREATE TABLE IF NOT EXISTS `wasd`.`categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

-- -----------------------------------------------------
-- Table `wasd`.`fabricante`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wasd`.`fabricante` ;

CREATE TABLE IF NOT EXISTS `wasd`.`fabricante` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;



-- -----------------------------------------------------
-- Table `WASD`.`Pais`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WASD`.`Pais` ;

CREATE TABLE IF NOT EXISTS `WASD`.`Pais` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wasd`.`producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wasd`.`producto` ;

CREATE TABLE IF NOT EXISTS `wasd`.`producto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `unidadesDisponibles` INT NOT NULL,
  `modelo` VARCHAR(45) NOT NULL,
  `funcionalidades` LONGTEXT NOT NULL,
  `imagen` VARCHAR(200) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `peso` INT NOT NULL,
  `calificacion` INT NOT NULL,
  `descripcion` LONGTEXT NOT NULL,
  `Categoria_id` INT NOT NULL,
  `Fabricante_id` INT NOT NULL,
  `Pais_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Producto_Categoria_idx` (`Categoria_id` ASC) VISIBLE,
  INDEX `fk_Producto_Fabricante1_idx` (`Fabricante_id` ASC) VISIBLE,
  INDEX `fk_Producto_Pais1_idx` (`Pais_id` ASC) VISIBLE,
  CONSTRAINT `fk_Producto_Categoria`
    FOREIGN KEY (`Categoria_id`)
    REFERENCES `wasd`.`categoria` (`id`),
  CONSTRAINT `fk_Producto_Fabricante1`
    FOREIGN KEY (`Fabricante_id`)
    REFERENCES `wasd`.`fabricante` (`id`),
  CONSTRAINT `fk_Producto_Pais1`
    FOREIGN KEY (`Pais_id`)
    REFERENCES `wasd`.`pais` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;



-- -----------------------------------------------------
-- Table `wasd`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wasd`.`usuario` ;

CREATE TABLE IF NOT EXISTS `wasd`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `password` LONGTEXT NOT NULL,
  `avatar` VARCHAR(200) NOT NULL,
  `esAdmin` TINYINT(3) UNSIGNED ZEROFILL NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `wasd`.`productorelacionado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wasd`.`productorelacionado` ;

CREATE TABLE IF NOT EXISTS `wasd`.`productorelacionado` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Producto_padre_id` INT NOT NULL,
  `codigoRelacionado` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ProductoRelacionado_Producto1_idx` (`Producto_padre_id` ASC) VISIBLE,
  CONSTRAINT `fk_ProductoRelacionado_Producto1`
    FOREIGN KEY (`Producto_padre_id`)
    REFERENCES `wasd`.`producto` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;



-- -----------------------------------------------------
-- Table `wasd`.`resena`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wasd`.`resena` ;

CREATE TABLE IF NOT EXISTS `wasd`.`resena` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `calificacion` INT UNSIGNED ZEROFILL NOT NULL,
  `resena` LONGTEXT NOT NULL,
  `Usuario_id` INT NOT NULL,
  `Producto_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Resena_Usuario1_idx` (`Usuario_id` ASC) VISIBLE,
  INDEX `fk_Resena_Producto1_idx` (`Producto_id` ASC) VISIBLE,
  CONSTRAINT `fk_Resena_Producto1`
    FOREIGN KEY (`Producto_id`)
    REFERENCES `wasd`.`producto` (`id`),
  CONSTRAINT `fk_Resena_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `wasd`.`usuario` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `wasd`.`compra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wasd`.`compra` ;

CREATE TABLE IF NOT EXISTS `wasd`.`compra` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `momentoCompra` DATETIME NOT NULL,
  `cantidadItems` INT(10) UNSIGNED ZEROFILL NOT NULL,
  `montoTotal` FLOAT UNSIGNED ZEROFILL NOT NULL,
  `Usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Compra_Usuario1_idx` (`Usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_Compra_Usuario1`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `wasd`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `wasd`.`detallecompra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wasd`.`detallecompra` ;

CREATE TABLE IF NOT EXISTS `wasd`.`detallecompra` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Compra_id` INT NOT NULL,
  `Producto_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_detalleCompra_Compra1_idx` (`Compra_id` ASC) VISIBLE,
  INDEX `fk_detalleCompra_Producto1_idx` (`Producto_id` ASC) VISIBLE,
  CONSTRAINT `fk_detalleCompra_Compra1`
    FOREIGN KEY (`Compra_id`)
    REFERENCES `wasd`.`compra` (`id`),
  CONSTRAINT `fk_detalleCompra_Producto1`
    FOREIGN KEY (`Producto_id`)
    REFERENCES `wasd`.`producto` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
