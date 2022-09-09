use popcollectordb;

Show tables;
select*from categorias;
select*from products;
select* from compras;
select* from usuarios;

ALTER TABLE products MODIFY COLUMN img VARCHAR(500);
ALTER TABLE products MODIFY COLUMN name VARCHAR(70);
ALTER TABLE products MODIFY COLUMN description VARCHAR(300);

ALTER TABLE categorias auto_increment = 1;

alter table  direccion add column numInt int;
ALTER TABLE products DROP COLUMN bestseller;

-- Vaciar tablas --
-- delete from products;
-- delete from categorias;


