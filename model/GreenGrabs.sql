
-- CALENDAR Table for months (not using)
-- DROP TABLE IF EXISTS calendar;
-- CREATE TABLE calendar (
--   id VARCHAR(100),
--   month_Name VARCHAR(100)
-- ); 

-- INSERT INTO calendar (id , month_Name)
-- VALUES ('1','January'),('2','February'),('3','March'),('4','April'),('5','May'),('6','June'),('7','July'),('8','August'),('9','September'),('10','October'),('11','November'),('12','December');

-- Comparative TABLE veggies of month
DROP TABLE IF EXISTS month_veggies;

CREATE TABLE month_veggies (
  country_fk varchar(100) DEFAULT NULL,
  month_fk varchar(100) DEFAULT NULL,
  veggies_fk varchar(100) DEFAULT NULL
);

INSERT INTO month_veggies (country_fk, month_fk, veggies_fk)
VALUES ('1','1','7'),('1','1','8'),('1','1','9'),('1','1','10'),('1','1','11'),('1','1','12'),('1','1','13'),('1','1','14'),('1','1','15'),('1','1','16'),('1','1','17'),('1','1','18'),('1','1','19'),('1','1','20'),('1','1','21'),('1','1','22'),('1','1','23'),('1','1','24'),('1','1','25'),('1','1','26'),('1','1','27'),('1','1','28'),('1','1','29'),('1','1','30'),('1','1','31'),('1','1','32'),('1','1','33'),('1','1','34'),('1','1','35'),('1','1','2'),('1','1','5'),('1','1','36'),('1','2','8'),('1','2','9'),('1','2','10'),('1','2','11'),('1','2','13'),('1','2','14'),('1','2','15'),('1','2','16'),('1','2','18'),('1','2','19'),('1','2','20'),('1','2','22'),('1','2','23'),('1','2','24'),('1','2','36'),('1','2','25'),('1','2','26'),('1','2','27'),('1','2','28'),('1','2','29'),('1','2','30'),('1','2','31'),('1','2','32'),('1','2','33'),('1','2','34'),('1','2','35'),('1','2','12'),('1','2','5'),('1','2','17'),('1','2','21'),('1','2','3'),('1','2','4'),('1','3','8'),('1','3','9'),('1','3','10'),('1','3','11'),('1','3','14'),('1','3','15'),('1','3','16'),('1','3','18'),('1','3','19'),('1','3','20'),('1','3','22'),('1','3','23'),('1','3','3'),('1','3','24'),('1','3','4'),('1','3','36'),('1','3','25'),('1','3','26'),('1','3','27'),('1','3','28'),('1','3','29'),('1','3','30'),('1','3','31'),('1','3','33'),('1','3','34'),('1','3','35'),('1','3','12'),('1','3','13'),('1','3','5'),
('1','3','17'),('1','3','32'),('1','4','8'),('1','4','9'),('1','4','10'),('1','4','11'),('1','4','16'),('1','4','17'),('1','4','18'),('1','4','19'),('1','4','20'),('1','4','22'),('1','4','23'),('1','4','3'),('1','4','24'),('1','4','4'),('1','4','36'),('1','4','25'),('1','4','26'),('1','4','27'),('1','4','28'),('1','4','29'),('1','4','30'),('1','4','31'),('1','4','33'),('1','4','34'),('1','4','35'),('1','4','2'),('1','4','12'),('1','4','13'),('1','4','5'),('1','4','14'),('1','4','15'),('1','4','32'),('1','5','8'),('1','5','11'),('1','5','13'),('1','5','16'),('1','5','17'),('1','5','18'),('1','5','19'),('1','5','20'),('1','5','24'),('1','5','36'),('1','5','25'),('1','5','26'),('1','5','27'),('1','5','28'),('1','5','29'),('1','5','30'),('1','5','31'),('1','5','32'),('1','5','33'),('1','5','34'),('1','5','35'),('1','5','2'),('1','5','9'),('1','5','10'),('1','5','5'),('1','5','37'),('1','5','14'),('1','5','22'),('1','6','13'),('1','6','37'),('1','6','16'),('1','6','17'),('1','6','6'),('1','6','31'),('1','6','40'),('1','6','32'),('1','6','35'),('1','6','2'),('1','6','7'),('1','6','39'),('1','6','11'),('1','6','38'),('1','6','17'),('1','6','18'),('1','7','39'),('1','7','38'),('1','7','37'),('1','7','16'),('1','7','17'),('1','7','6'),('1','7','41'),('1','7','31'),('1','7','40'),('1','7','42'),('1','7','2'),('1','7','7'),('1','7','18'),('1','7','19'),('1','7','27'),('1','7','28'),('1','7','32'),('1','8','39'),('1','8','38'),('1','8','37'),('1','8','16'),
('1','8','6'),('1','8','41'),('1','8','31'),('1','8','40'),('1','8','42'),('1','8','2'),('1','8','14'),('1','8','32'),('1','8','2'),('1','9','39'),('1','9','38'),('1','9','37'),('1','9','14'),('1','9','16'),('1','9','6'),('1','9','41'),('1','9','31'),('1','9','40'),('1','9','32'),('1','9','42'),('1','9','2'),('1','9','7'),('1','9','13'),('1','9','24'),('1','9','27'),('1','9','29'),('1','9','30'),('1','10','8'),('1','10','39'),('1','10','12'),('1','10','13'),('1','10','14'),('1','10','16'),('1','10','24'),('1','10','26'),('1','10','41'),('1','10','30'),('1','10','31'),('1','10','40'),('1','10','32'),('1','10','33'),('1','10','34'),('1','10','35'),('1','10','2'),('1','10','11'),('1','10','38'),('1','10','5'),('1','10','37'),('1','10','18'),('1','10','19'),('1','11','8'),('1','11','11'),('1','11','12'),('1','11','13'),('1','11','5'),('1','11','14'),('1','11','15'),('1','11','16'),('1','11','18'),('1','11','19'),('1','11','20'),('1','11','21'),('1','11','22'),('1','11','23'),('1','11','24'),('1','11','26'),('1','11','27'),('1','11','28'),('1','11','29'),('1','11','30'),('1','11','31'),('1','11','32'),('1','11','33'),('1','11','34'),('1','11','35'),('1','11','2'),('1','11','9'),('1','11','39'),('1','11','10'),('1','11','38'),('1','11','17'),('1','11','36'),('1','12','8'),('1','12','9'),('1','12','10'),('1','12','11'),('1','12','12'),('1','12','13'),('1','12','5'),('1','12','14'),('1','12','15'),('1','12','16'),('1','12','17'),('1','12','18'),('1','12','19'),('1','12','20'),('1','12','21'),('1','12','22'),('1','12','23'),('1','12','24'),('1','12','25'),('1','12','26'),('1','12','27'),('1','12','28'),('1','12','29'),('1','12','30'),('1','12','31'),('1','12','32'),('1','12','33');

-- VEGGIES Table
DROP TABLE IF EXISTS veggies;

CREATE TABLE veggies (
  id int NOT NULL AUTO_INCREMENT,
  veggie_name varchar(100) DEFAULT NULL,
  veggie_type varchar(100) DEFAULT NULL,
  veggie_url varchar(200) DEFAULT NULL,
  veggie_description varchar(1000) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO veggies (id, veggie_name, veggie_type, veggie_url, veggie_description)
VALUES (1,'tomate','vegetable','https://www.elhuertodelabuelo.es/37-large_default/tomate-cana-andaluz.jpg'),
(2,'zanahoria','vegetable','https://graneleselmontanes.es/112-large_default/zanahoria-bio-caja-10-kg.jpg'),
(3,'espárrago','vegetable','https://www.despensa.es/documents/10180/10736/950979_G.jpg'),
(4,'guisante','vegetable','https://soycomocomo.es/media/2014/06/pesols.jpg'),
(5,'brócoli','vegetable','https://thefoodtech.com/wp-content/uploads/2020/07/br%C3%B3colis.jpg'),
(6,'judía verde','vegetable','https://agricultoresenorigen.com/wp-content/uploads/2021/09/judias-verdes-product-01.jpg'),
(7,'acelga','vegetable','https://www.cocinista.es/download/bancorecursos/ingredientes/ingrediente-acelga.jpg'),
(8,'ajo seco','vegetable','https://www.globalcarnica.com/wp-content/uploads/2022/12/Cebolla-blanca-en-escamas-deshidratada.jpg'),
(9,'ajo tierno','vegetable','https://colofruitonline.com/wp-content/uploads/2020/12/ajos-tiernos.jpg'),
(10,'alcachofa','vegetable','https://www.agroter.es/wp-content/uploads/2021/03/ALCACHOFAS-AGROTER-E2-1.png'),
(11,'apio','vegetable','https://vilaaurora.es/images/productos/apio.jpg?1613056368'),
(12,'batata','vegetable','https://www.hobbysaliplant.com/61-thickbox_default/boniato.jpg'),
(13,'borraja','vegetable','https://frutascharito.es/292-large_default/borraja.jpg'),
(14,'calabaza','vegetable','https://www.citrusgourmet.com/es/195-large_default/calabaza-butternut-12-kg.jpg'),
(15,'cardo','vegetable','https://losvalentinesonline.com/wp-content/uploads/2020/10/crd.jpg'),
(16,'cebolla seca','vegetable','https://i.ebayimg.com/images/g/VU0AAOSwtM5jLaWM/s-l500.jpg'),
(17,'cebolla','vegetable','https://tradecorp.mx/wp-content/uploads/2015/06/shutterstock_71561446.jpg'),
(18,'chirivía','vegetable','https://blogs.oximesa.es/wp-content/uploads/2020/01/Conoces-la-chiriv%C3%ADa-o-pastinaca.jpg'),
(19,'col lisa','vegetable','https://www.ekkomarket.es/184-thickbox_default/col-lisa.jpg'),
(20,'col rábano','vegetable','https://img.freepik.com/vector-premium/colinabo_195186-4859.jpg?w=2000'),
(21,'coles de bruselas','vegetable','https://www.hoyverdurascongeladas.com/wp-content/uploads/2018/06/coles-de-bruselas-ampl.jpg'),
(22,'coliflor','vegetable','https://www.comenaranjas.com/images/stories/virtuemart/product/coliflor.jpg'),
(23,'escarola','vegetable','https://okdiario.com/img/recetas/2017/08/20/escarola-2.jpg'),
(24,'espinaca','vegetable','https://www.gastronomiavasca.net/uploads/image/file/3368/w700_espinacas.jpg'),(25,'hinojo','vegetable','https://www.gastronomiavasca.net/uploads/image/file/3330/w700_bulbo_de_hinojo.jpg'),(26,'kale','vegetable','https://disfrutaverdura.com/1559-large_default/col-kale-eco-400g.jpg'),(27,'lechuga','vegetable','https://delahuertacasa.com/wp-content/uploads/2022/01/lechuga-romana-product-600x397.jpg.webp'),(28,'lombarda','vegetable','https://www.calfruitos.com/es/fotos/pr_135_20170919113923.png'),(29,'nabo','vegetable','https://www.cucinare.tv/wp-content/uploads/2020/07/Nabo.jpg'),(30,'pack choi','vegetable','https://www.eladerezo.com/wp-content/uploads/2011/01/pak-choi-1.jpg'),(31,'patata','vegetable','http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/59.jpg'),(32,'perejil','vegetable','https://www.cocinista.es/download/bancorecursos/ingredientes/perejil.jpg'),(33,'puerro','vegetable','https://losvalentinesonline.com/wp-content/uploads/2020/09/puerros_3952454.png'),(34,'rábano','vegetable','https://mercagarden.com/523-large_default/rabano-o-rabanito.jpg'),(35,'remolacha','vegetable','https://soycomocomo.es/media/2015/11/remolacha.jpg'),(36,'habas','vegetable','https://media.justo.mx/products/10693-Habas-limpias-1.jpg'),(37,'calabacín','vegetable','https://comedelahuerta.com/wp-content/uploads/2019/09/CALABACIN-ECOLOGICO-COMEDELAHUERTA-1.jpg'),(38,'berenjena','vegetable','https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201811/26/00118107800080____6__600x600.jpg'),(39,'albahaca','vegetable','https://fruteriadevalencia.com/wp-content/uploads/2015/01/ALBAHACA-buena-510x407.jpg'),(40,'pepino','vegetable','https://www.recetasnestlecam.com/sites/default/files/2022-04/que-es-el-pepino.jpg'),(41,'maiz','vegetable','https://www.supermasymas.com/blog/wp-content/uploads/2021/04/art_5_1.jpg'),(42,'pimiento','vegetable','https://www.hogarmania.com/archivos/201211/440-nutricion-pimientos-xl-668x400x80xX.jpg');

-- FRUITS Table
DROP TABLE IF EXISTS fruits;

CREATE TABLE fruits (
  id int NOT NULL AUTO_INCREMENT,
  fruit_name varchar(100) DEFAULT NULL,
  fruit_url varchar(100) DEFAULT NULL,
  fruit_description varchar(1000) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO fruits (id, fruit_name, fruit_url, fruit_description) 
VALUES (1,'aguacate',"https://frutascharito.es/702-large_default/aguacates-unidad.jpg", "Getting more tomatoes into your diet may make you less likely to have a stroke, which is when blood flow gets cut off to a part of your brain. Studies suggest that they may ease inflammation, boost your immune system, lower your cholesterol levels, and keep your blood from clotting."),
(2,'guayaba',"https://frutascharito.es/758-large_default/guayabas.jpg", "The carrot (Daucus carota subsp. sativus) is a root vegetable full of fiber, vitamins and antioxidants. Typically orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia."),
(3,'kiwi',"https://frutascharito.es/1443-large_default/kiwis-unidad.jpg"),
(4,'limón',"https://frutascharito.es/168-large_default/limones.jpg"),
(5,'mandarina',"https://frutascharito.es/108-large_default/clementinas-naturales-sin-tratar.jpg"),
(6,'naranja',"https://frutascharito.es/105-large_default/naranjas-de-mesa.jpg"),
(7,'papaya',"https://frutascharito.es/341-large_default/papayon-de-brasil.jpg"),
(8,'plátano',"https://frutascharito.es/145-large_default/platanos-de-canarias.jpg"),
(9,'pomelo',"https://frutascharito.es/703-large_default/pomelos-rosas-unidad.jpg"),
(10,'caqui',"https://frutascharito.es/122-large_default/kakis.jpg"),
(11,'membrillo',"https://frutascharito.es/231-large_default/membrillos.jpg"),
(12,'pitahaya',"https://frutascharito.es/1431-large_default/pitahaya-roja.jpg"),
(13,'granada',"https://frutascharito.es/1428-large_default/granadas-para-zumo-unidad.jpg"),
(14,'níspero',"https://frutascharito.es/150-large_default/nisperos.jpg"),
(15,'fresa',"https://frutascharito.es/172-large_default/freson.jpg"),
(16,'cerezas',"https://frutascharito.es/1566-large_default/picotas.jpg"),
(17,'albaricoque',"https://frutascharito.es/151-large_default/albaricoques.jpg"),
(18,'ciruela',"https://frutascharito.es/1070-large_default/ciruelas-negras.jpg"),
(19,'melocotón',"https://frutascharito.es/157-large_default/melocotones.jpg"),
(20,'nectarina',"https://frutascharito.es/1462-large_default/nectarinas.jpg"),
(21,'paraguayo',"https://frutascharito.es/158-large_default/paraguayas.jpg"),
(22,'sandía',"https://frutascharito.es/187-large_default/sandia-1-2-unid.jpg"),
(23,'frambuesa',"https://frutascharito.es/139-large_default/frambuesas.jpg"),
(24,'melón',"https://frutascharito.es/335-large_default/melon-piel-sapo-unidad.jpg"),
(25,'arándano',"https://frutascharito.es/144-large_default/arandanos.jpg"),
(26,'higo',"https://frutascharito.es/1477-large_default/higos-chumbos.jpg"),
(27,'mango',"https://www.agroponiente.com/wp-content/uploads/2021/08/mango-Agroponiente.png"),
(28,'manzana',"https://frutascharito.es/1116-large_default/manzanas-granny-smith.jpg"),
(29,'uvas',"https://frutascharito.es/62-large_default/uvas-negras-sin-semilla.jpg"),
(30,'lima',"https://th.bing.com/th/id/OIP.GrXQjizTdsNDebsCeMs82QHaHa?pid=ImgDet&rs=1"),
(31,'chirimoya',"https://frutascharito.es/1463-large_default/chirimoya-unidad.jpg");

-- Comparative TABLE fruits of month
DROP TABLE IF EXISTS month_fruits;

CREATE TABLE month_fruits (
  country_fk varchar(100) DEFAULT NULL,
  month_fk varchar(100) DEFAULT NULL,
  fruits_fk varchar(100) DEFAULT NULL
);

INSERT INTO month_fruits (country_fk, month_fk, fruits_fk)
  VALUES ('1','1','1'),('1','1','2'),('1','1','3'),('1','1','4'),('1','1','5'),('1','1','6'),('1','1','7'),('1','1','8'),('1','1','9'),('1','1','10'),('1','1','11'),('1','1','12'),('1','2','4'),('1','2','5'),('1','2','6'),('1','2','1'),('1','2','3'),('1','2','2'),('1','2','11'),('1','2','7'),('1','2','12'),('1','3','5'),('1','3','6'),('1','3','8'),('1','3','1'),('1','3','4'),('1','3','3'),('1','3','14'),('1','3','9'),('1','4','6'),('1','4','14'),('1','4','8'),('1','4','1'),('1','4','4'),('1','4','15'),('1','4','5'),('1','5','16'),('1','5','15'),('1','5','6'),('1','5','1'),('1','5','17'),('1','5','18'),('1','5','4'),('1','5','5'),('1','5','19'),('1','5','20'),
('1','5','21'),('1','5','22'),('1','6','18'),('1','6','15'),('1','6','19'),('1','6','17'),('1','6','16'),('1','6','1'),('1','6','23'),('1','6','24'),('1','6','6'),('1','6','14'),('1','7','23'),('1','7','15'),('1','7','19'),('1','7','25'),('1','7','18'),('1','7','1'),('1','7','17'),('1','7','26'),('1','7','12'),('1','8','23'),('1','8','15'),('1','8','26'),('1','8','25'),('1','8','18'),('1','8','27'),('1','8','28'),('1','8','20'),('1','8','7'),('1','8','21'),('1','8','12'),('1','8','29'),('1','9','27'),('1','9','28'),('1','9','24'),('1','9','23'),('1','9','26'),('1','9','31'),('1','9','18'),('1','9','15'),('1','9','13'),('1','9','2'),('1','9','3'),('1','9','30'),('1','9','5'),('1','9','19'),('1','10','13'),('1','10','2'),('1','10','3'),('1','10','31'),('1','10','23'),('1','10','1'),('1','10','10'),('1','10','15'),('1','10','26'),('1','10','4'),('1','10','19'),('1','10','24'),('1','10','9'),('1','10','22'),('1','11','31'),('1','11','13'),('1','11','2'),('1','11','1'),('1','11','10'),('1','12','31'),('1','12','2'),('1','12','3'),('1','12','4'),('1','12','5'),('1','12','1'),('1','12','10'),('1','12','11'),('1','12','6'),('1','12','7'),('1','12','12'),('1','12','8'),('1','12','9'),('1','12','13'),('1','12','30'),('1','12','27'),('1','12','28'),('1','12','29');


-- COUNTRIES Table
DROP TABLE IF EXISTS countries;

CREATE TABLE countries (
  id int NOT NULL AUTO_INCREMENT,
  country_name varchar(100) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO countries (id, country_name)
VALUES (1,'Spain'),(2,'Chile');