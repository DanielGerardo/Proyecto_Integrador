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

--   5
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("Volunteered Slavery by Rahsaan Roland Kirk (CD, 2002)",
"Nuevo: Un artículo que nunca fue abierto o sacado de la empaquetadura del fabricante (si corresponde). El artículo está en su envasado adherente original (si corresponde).",
"https://i.ebayimg.com/images/g/5TcAAOSwypJghull/s-l640.jpg",
1238,378.4,7,true,false,sysDate(),2);

-- 6
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("Something for everybody Artist Elvis Presley Format:CD / Album Digipak",
"Algo para todos Artista Elvis Presley Formato: CD/álbum Digipak Label: L.M.L.R. Género: Rock and Roll Nº de discos: 1",
"https://i.ebayimg.com/images/g/Is0AAOSwLLJjB6LY/s-l1600.jpg",
1239,409.89,2,true,false,sysDate(),2);

-- 7
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("sings the mad professor Artist Elvis Presley Format:CD / Album Digipak",
"Something for everybody Artist Elvis Presley Format:CD / Album Digipak Label:L.M.L.R.",
"https://i.ebayimg.com/images/g/~QAAAOSwbLRjB6O-/s-l1600.jpg",
1240,500,1,false,false,sysDate(),2);

-- 8
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("Beethoven for All: Symphonies Nos. 1-9 (CD, 2012)",
"DANIEL BARENBOIM ; Beethoven For All - Symphonies 1-9 ; DECCA 2011 5CD Boxed Set",
"https://i.ebayimg.com/images/g/Y6UAAOSwPFBh~qTI/s-l640.jpg",
1241,482.82,2,false,false,sysDate(),2);
-- 9 
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("Lote de 18 Cintas De Vhs Walt Disney Black Diamond",
"Este Lote de cintas VHS están en perfectas condiciones.Sin embargo, sus casos mostrar signos de uso.Sin embargo, están en perfectas condiciones de jugar.También han sido bien cuidados y vienen de un hogar libre de mascotas y humo",
"https://i.ebayimg.com/images/g/mEYAAOSwSc9jAVQG/s-l300.jpg",
1242,1400,1,true,true,sysDate(),3);
-- 10
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("FARGO SEALED VHS movie video",
"Disfruta de esta gran historia en edición VHS.",
"https://i.ebayimg.com/images/g/AdEAAOSwXgFi9vhj/s-l1600.jpg",
1243,700.52,2,true,false,sysDate(),3);
-- 11
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("RARE Bugs Bunny - Vintage Cartoon Classics",
"Con pequeña rotura en el sello. Bugs Bunny - Película clásica de dibujos animados vintage - Incluye 3 episodios diferentes.",
"https://i.ebayimg.com/images/g/anUAAOSw74FhHuLU/s-l1600.jpg",
1244,625.99,1,true,true,sysDate(),3);
-- 12
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("Beetlejuice (VHS, 1993)",
"Dirigida por Tim Burton y lanzada en 1993 en VHS, espera lo inesperado en esta cómica aventura.",
"https://i.ebayimg.com/images/g/XK0AAMXQgJRQ9wM2/s-l640.jpg",
1245,852,2,true,true,sysDate(),3);

-- 13
-- 14
-- 15
-- 16

-- 17
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("Disco Vinyl The Beatles-abbey Road Coleccion Anniversario Ed",
"Abbey Road Álbum de estudio de The Beatles, Duración 47:27 Discográfica Apple Records Productor(es) George Martin Certificación 30.000.000 Calificaciones profesionales Allmusic 5/5 estrellas Posicionamiento en listas",
"https://http2.mlstatic.com/D_NQ_NP_2X_946415-MLM44117765051_112020-F.webp",
1250,1476,1,true,true,sysDate(),5);

-- 18
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("At The Royal Albert Hal",
"Idioma ‏ : ‎ Inglés
Dimensiones del producto ‏ : ‎ 12.32 x 12.28 x 0.16 pulgadas; 10.4 Onzas
Fabricante ‏ : ‎ Craft Recordings
Fecha de lanzamiento original ‏ : ‎ 2022
Etiqueta ‏ : ‎ Craft Recordings
ASIN ‏ : ‎ B09S5JJDFQ
País de origen ‏ : ‎ EE. UU.",
"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71vps0tbksL._SL1208_.jpg",
1251,1178,1,true,false,sysDate(),5);

-- 19
insert into `products` 
(`name`,`description`,`img`,`codigo`,`precio`,`cantidad`,`certificado`,`exclusivo`,`fechaRegistro`,`categorias_idCategorias`)
values
("Beethoven - Symphonies 2 & 8 [Vinyl LP record]",
"Idioma ‏ : ‎ Inglés
Dimensiones del producto ‏ : ‎ 12.32 x 12.28 x 0.16 pulgadas; 10.4 Onzas
Fabricante ‏ : ‎ Craft Recordings
Fecha de lanzamiento original ‏ : ‎ 2022
Etiqueta ‏ : ‎ Craft Recordings
ASIN ‏ : ‎ B09S5JJDFQ
País de origen ‏ : ‎ EE. UU.",
"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81q5GOdFKpL._AC_SL1500_.jpg",
1252,1000,1,true,false,sysDate(),5);

