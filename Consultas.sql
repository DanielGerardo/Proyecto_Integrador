
select* from usuarios;

select email from usuarios where nombre="Bere";


SELECT
	`usuarios`.`idUsuarios` AS 'ID',
    `usuarios`.`nombre` AS 'Nombre',
    `direccion`.*
FROM `usuarios`
JOIN  `direccion`
ON `usuarios`.`idUsuarios` = `direccion`.`idDireccion`
where nombre = "Bere";

SELECT
	`compras`.`idCompras` AS 'ID Compra',
    `compras`.`monto` AS 'Monto',
    `products_has_compras`.*
FROM `compras`
JOIN  `products_has_compras`
ON `compras`.`idCompras` = `products_has_compras`.`Compras_idCompras`
