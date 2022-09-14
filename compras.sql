use popcollectordb;

select* from compras;
select* from products_has_compras;

insert into compras values
(null,1200,sysDate(),2);

insert into compras values
(null,1800,sysDate(),2);

insert into products_has_compras values
(1,1,2);

insert into products_has_compras values
(2,1,1);
insert into products_has_compras values
(3,2,1);