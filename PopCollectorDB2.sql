-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema PopCollectorDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema PopCollectorDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `PopCollectorDB` DEFAULT CHARACTER SET utf8 ;
USE `PopCollectorDB` ;

-- -----------------------------------------------------
-- Table `PopCollectorDB`.`Categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PopCollectorDB`.`Categorias` (
  `idCategorias` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PopCollectorDB`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PopCollectorDB`.`Products` (
  `idProducts` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(70) NOT NULL,
  `description` VARCHAR(300) NOT NULL,
  `img` VARCHAR(500) NOT NULL,
  `codigo` INT NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `cantidad` INT NOT NULL,
  `certificado` TINYINT NOT NULL,
  `exclusivo` TINYINT NOT NULL,
  `fechaRegistro` DATE NOT NULL,
  `Categorias_idCategorias` INT NOT NULL,
  PRIMARY KEY (`idProducts`, `Categorias_idCategorias`),
  UNIQUE INDEX `codigo_UNIQUE` (`codigo` ASC) VISIBLE,
  INDEX `fk_Products_Categorias_idx` (`Categorias_idCategorias` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Categorias`
    FOREIGN KEY (`Categorias_idCategorias`)
    REFERENCES `PopCollectorDB`.`Categorias` (`idCategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PopCollectorDB`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PopCollectorDB`.`Usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contra` VARCHAR(45) NOT NULL,
  `fechaIngreso` DATE NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PopCollectorDB`.`Compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PopCollectorDB`.`Compras` (
  `idCompras` INT NOT NULL AUTO_INCREMENT,
  `monto` DECIMAL(10,2) NOT NULL,
  `fecha` DATE NOT NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idCompras`, `Usuarios_idUsuarios`),
  INDEX `fk_Compras_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Compras_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `PopCollectorDB`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PopCollectorDB`.`Direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PopCollectorDB`.`Direccion` (
  `idDireccion` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(45) NULL,
  `numExt` VARCHAR(45) NULL,
  `colonia` VARCHAR(45) NULL,
  `municipio` VARCHAR(45) NULL,
  `estado` VARCHAR(45) NULL,
  `cp` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idDireccion`, `Usuarios_idUsuarios`),
  INDEX `fk_Direccion_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Direccion_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `PopCollectorDB`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `PopCollectorDB`.`Products_has_Compras`products
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PopCollectorDB`.`Products_has_Compras` (
  `Products_idProducts` INT NOT NULL,
  `Compras_idCompras` INT NOT NULL,
  `Cantidad` INT NOT NULL,
  PRIMARY KEY (`Products_idProducts`, `Compras_idCompras`),
  INDEX `fk_Products_has_Compras_Compras1_idx` (`Compras_idCompras` ASC) VISIBLE,
  INDEX `fk_Products_has_Compras_Products1_idx` (`Products_idProducts` ASC) VISIBLE,
  CONSTRAINT `fk_Products_has_Compras_Products1`
    FOREIGN KEY (`Products_idProducts`)
    REFERENCES `PopCollectorDB`.`Products` (`idProducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Products_has_Compras_Compras1`
    FOREIGN KEY (`Compras_idCompras`)
    REFERENCES `PopCollectorDB`.`Compras` (`idCompras`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
