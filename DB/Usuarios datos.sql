use popcollectordb;

select* from usuarios;
-- delete from usuarios;

insert into `usuarios` values
(null, "Daniel", "Campos", "daniel@campos.com", "1234",sysdate());

insert into `usuarios` values
(null, "Bere", "Ruiz", "bere@campos.com", "1235",sysdate());