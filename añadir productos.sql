use popcollectordb;

Show tables;
select*from categorias;
select*from products;
select* from compras;
select* from usuarios;

insert into `usuarios` values
(null, "Daniel", "Campos", "daniel@campos.com", "1234","2022-05-03",1);

ALTER TABLE products MODIFY COLUMN img VARCHAR(500);
ALTER TABLE products MODIFY COLUMN name VARCHAR(70);
ALTER TABLE products MODIFY COLUMN description VARCHAR(300);

ALTER TABLE categorias auto_increment = 1;
alter table  direccion add column numInt int;
ALTER TABLE products DROP COLUMN bestseller;


delete from products;
delete from categorias;

-- Datos Categorias --
insert into `categorias` values
(null,"Libros");
insert into `categorias` values
(null,"CD");
insert into `categorias` values
(null,"Peliculas");
insert into `categorias` values
(null,"Series");
insert into `categorias` values
(null,"Vinilos");



