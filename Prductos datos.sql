use popcollectordb;

select* from products;
-- delete from products;

-- Ingreso datos productos --
-- 1
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("La philosophie positive","Autor: Autores Varios Paginas: 191 Rustico 10x 15 5cm",
"https://libreriasdeocasion.com.mx/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/1/7/17050-fi.av-01.jpg",1234,600.00,2,true,false,sysdate(),1);

-- 2
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("Nociones de higiene, economía, medicina y farmacia doméstica.",
"Autor: Autores Varios Año de edición: 1875 Editorial: Imp. y Librería de J. M. Aguilar Ortiz Encuadernación: Lomo de piel Lugar de edición: México Páginas: 160",
"https://libreriasdeocasion.com.mx/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/1/7/17048-ci.av-02.jpg",
1235,2000,1,true,true,sysDate(),1);

-- 3
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("STRENGTH FOR THE BATTLE",
"Autor: Murray Charlotte Editorial:The Art. Lithographic Publishing Co. Encuadernación: Rústica Lugar de edición: Munich - Germany",
"https://libreriasdeocasion.com.mx/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/1/7/17049-lu.mc-01.jpg",
1236,1860,1,true,false,sysDate(),1);

-- 4
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("Colección Alicia En El País De Las Maravillas - Lewis Carrol",
"Título del libro: Colección Autor: Lewis, Carroll Idioma: Español Editorial del libro: Fractales Tapa del libro: Dura Tamaño de la letra de la Biblia: Estándar Con índice: Sí Año de publicación: 2020",
"https://http2.mlstatic.com/D_NQ_NP_2X_632841-MLM45150362630_032021-F.webp",
1237,399,1,true,false,sysDate(),1);
