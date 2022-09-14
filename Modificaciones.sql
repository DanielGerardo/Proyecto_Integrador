use popcollectordb;

Show tables;
select*from categorias;
select*from products;
select* from compras;
select* from usuarios;

ALTER TABLE products MODIFY COLUMN img VARCHAR(500);
ALTER TABLE products MODIFY COLUMN name VARCHAR(70);
ALTER TABLE usuarios MODIFY COLUMN email VARCHAR(70) unique;
ALTER TABLE products MODIFY COLUMN description VARCHAR(300);

ALTER TABLE usuarios auto_increment = 1;
ALTER TABLE products auto_increment = 1;
ALTER TABLE direccion MODIFY COLUMN numExt int(10) not null;
alter table  direccion drop column numInt;
ALTER TABLE products DROP COLUMN bestseller;


-- Vaciar tablas --
-- delete from products;
-- delete from comprascategorias;


