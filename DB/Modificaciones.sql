use popcollectordb;

Show tables;
select*from categorias;
select*from products;
select* from compras;
select* from usuarios;

ALTER TABLE products MODIFY COLUMN img VARCHAR(500);
ALTER TABLE products ADD COLUMN img2 VARCHAR(500);
ALTER TABLE products ADD COLUMN img3 VARCHAR(500);
ALTER TABLE products MODIFY COLUMN name VARCHAR(70);
ALTER TABLE usuarios MODIFY COLUMN email VARCHAR(70) unique;
ALTER TABLE products MODIFY COLUMN description VARCHAR(300);
ALTER TABLE direccion MODIFY COLUMN numExt int(10) not null;

-- Vaciar tablas --
-- delete from products;
-- delete from comprascategorias;
ALTER TABLE usuarios auto_increment = 1;
ALTER TABLE products auto_increment = 1;


alter table  direccion drop column numInt;
ALTER TABLE products DROP COLUMN bestseller;





