-- erase everything --

-- products --
DELETE FROM babula.products;
ALTER TABLE babula.products AUTO_INCREMENT=1;

-- users --
DELETE FROM babula.users;
ALTER TABLE babula.users AUTO_INCREMENT=1;

-- categories --
DELETE FROM babula.categories;
ALTER TABLE babula.categories AUTO_INCREMENT=1;

-- roles --
DELETE FROM babula.roles;
ALTER TABLE babula.roles AUTO_INCREMENT=1;


-- populate everything --

-- categories --
INSERT INTO babula.categories (id, name) VALUES
(1, "Entrada"), (2, "Plato principal"), (3, "Postre");

-- roles --
INSERT INTO babula.roles (id, name) VALUES
(1, "Admin"), (2, "User");

-- products --
INSERT INTO babula.products (id, title, price, ingredients, img, description, categoryId, todaysDay) VALUES 
(1, "Borsch", 1700, "Patatas, repollo colorado, tomate, morron, ajo, cebolla, eneldo, carne vacuna pastoril , sal, pimienta","borsch.jpeg", "Es la sopa tradicional de verduras donde la remolacha es la gran protagonista. Este plato incluye cebolla, tomate, repollo, patatas y porotos.   La historia de este plato va ligada a  la evolución de las recetas de caldos y por extensión a las sopas acompañadas por hierbas o plantas que se van añadiendo al agua para conseguir una combinación agradable  y nutritiva.", 1 , "true" ), 
(2, "Golupsy", 1800, "Repollo, zanahoria, tomate, morron, cebolla, ajo, arroz, sal", "golupsi3.jpeg", "Aparecieron en el siglo XVIII, una época en la que la gastronomía francesa empezaba a desatar pasiones en San Petersburgo. El nombre de este plato viene de la costumbre francesa de cocinar palomas envueltas en hojas de repollo. Golub significa paloma en ruso. Este plato es elaborado a base de hojas de repollo rellenas de carne picada y arroz, ahogados en salsa de tomates.", 2, "true"), 
(3, "Pilmeni", 1900, "Carne vacuna pastoril, cebolla,harina de trigo orgánica 000, tomate perita , vinagre, sal, pimienta","pilmeni.jpeg","También conocidos como Capeletis, es una pasta rellena decarne con cebolla, la cual se acompaña con salsa de tomate cruda, ajo y vinagre. Llegaron a Rusia con las tribus nómadas fino-ugrias. La misma palabra pelmén literalmente significa oreja de masa en la lengua fino-ugria. En realidad, tienen cierta semejanza con la forma de una oreja. Se cree que la difusión de este plato comenzó a fines del siglo XIV.", 2, "false"), 
(4,"Chebureki", 500, "Carne vacuna pastoril, cebolla, harina de trigo orgánica 000, sal, pimienta ", "chebureki.jpeg", "No es más que una empanadilla realizada solo con agua, harina y sal a la que no pondremos levadura, después se hacen las obleas y se rellenan con carne picada de cordero, cebolla  y especias.", 1 , "false"),
(5, "Akroshka", 1700, "Pollo de campo, o carne vacuna pastoril,  palta, cebolla de verdeo, eneldo, patatas, huevo, kefir elaborado de manzanas, pasas de uva y jengibre, mayonesa de oliva","okroshka2.jpeg"," Se usa cualquier sobrante de carne hervida de ternera, cerdo, pollo, o pavo, salchichas- o de pescados como bacalao, tenca, esturión, lucioperca. Además de patata, huevo cocido y de las hortalizas -cebolleta, rábano, pepino, zanahoria, hinojo y hierbas aromáticas que se tengan a mano (perejil, eneldo, perifollo, estragón, etc). Se sirve bien fría y tradicionalmente se aderezaba con un poco de mostaza y/o de Smetana (muy similar a la crema agria), A falta de Kvas, hemos mantenido el kéfir y lo hemos mezclado un poquito de agua con gas y un chorrito de zumo de limón", 1, "false"), 
(6, "Vareniki", 2000, "Portobellos, cebolla, patatas, huevos, harina de trigo orgánica 000, semolín, sal, aceite de oliva" ,"vareniki.jpeg","Se trata de una masa elaborada con harina de trigo que lleva su correspondiente relleno y se pliega con forma de media luna. Se pueden encontrar vareniki de carne, a base de repollo y los hay también rellenos de fruta", 2, "false"), 
(7, "Grechka", 1400, "Grano de trigo serraceno, sal, azucar, leche y manteca","grechka.jpeg", "La reina de la proteína vegetal en Rusia se sirve mucho como guarnición, no contiene gluten y tiene la cualidad de ser energético y nutritivo, ideal para el frío.", 1 , "false"), 
(8, "Ptichie molokó", 850, "Leche,  leche condensada, cacao, mantequilla, huevos, queso mascarpone.", "ptichiemoloko-2.jpeg","La receta fue ideada por un grupo de confiteros dirigidos por Vladímir Guralnik, jefe del departamento de pastelería del restaurante moscovita Praga, y se convirtió en una continuación directa del “zefir francés” con algunas modificaciones en la receta. Sin embargo, algunos ingredientes se mantuvieron en el tiempo, tales como, cacao amargo , leche, mantequilla y huevos.", 3 , "false" ), 
(9, "Medovik", 1300, "Miel, Harina de trigo orgánica 0000, manteca, azucar, nueces, crema de leche, leche.", "torta-de-miel.jpeg", "Conocida tambien como Torta de Miel, fue creada en la década de 1820 por un Chef personal del Zar ruso Alejandro I.  Este auténtico pastel de miel se elabora con bizcocho y un relleno de crema.  Los ingredientes que se pueden encontrar en el relleno es la leche condensada cocinada durante muchas horas. Además también es habitual que contenga nueces.", 3 , "true" );


-- users --
INSERT INTO babula.users (id, firstName, lastName, email, password, roleId, avatar) VALUES 
(1, "Alan", "Arias", "alan.arias486@gmail.com", "$2a$10$.JuhFzuQN1kayFJiSSd57.ktVLCkmcJ3lRTcotm7BTVrhKxel0mUq", 1, "1655064489097_img.jpg"),
(2, "Adriano", "Carrieri", "adrianocarrieri.dg@gmail.com", "$2a$10$BIZOxwyg/MSxVi3glKOItey8SEH2jQQ6Rsx4mWZFPhdHbS/9OWhjq", 2, "1655080947608_img.jpg"),
(3, "Lika", "G.", "likainffo@gmail.com", "$2a$10$cqRgsewc.yOBP3ymcVyCROvnxTNyNE4nayLtLutWeXzz0CRgmrXbG", 1, "1655162677906_img.jpg");
