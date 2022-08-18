-- erase everything --
-- products --
DELETE FROM
    babula.products;

ALTER TABLE
    babula.products AUTO_INCREMENT = 1;

-- users --
DELETE FROM
    babula.users;

ALTER TABLE
    babula.users AUTO_INCREMENT = 1;

-- categories --
DELETE FROM
    babula.categories;

ALTER TABLE
    babula.categories AUTO_INCREMENT = 1;

-- roles --
DELETE FROM
    babula.roles;

ALTER TABLE
    babula.roles AUTO_INCREMENT = 1;

-- populate everything --
-- categories --
INSERT INTO
    babula.categories (id, name)
VALUES
    (1, "Entrada"),
    (2, "Plato principal"),
    (3, "Postre");

-- roles --
INSERT INTO
    babula.roles (id, name)
VALUES
    (1, "Admin"),
    (2, "User");

-- products --
INSERT INTO
    babula.products (
        id,
        title,
        price,
        ingredients,
        img,
        description,
        categoryId,
        todaysDay
    )
VALUES
    (
        1,
        "Borsch",
        1800,
        "Patatas, repollo colorado, tomate, morron, zanahoria, ajo, cebolla, eneldo, carne vacuna pastoril, porotos , sal y pimienta.",
        "borsch.jpeg",
        "Una leyenda popular afirma que, en 1637, durante un asedio de dos meses por parte de los turcos en la fortaleza de Azov, al sur de Rusia, los cosacos prepararon un plato para la armada con todos los productos comestibles que encontraron y llamaron a esta mezcla nutritiva de verduras y carne «borsch».
La historia de este plato va ligada a  la evolución de las recetas de caldos y por extensión a las sopas acompañadas por hierbas o plantas que se van añadiendo al agua para conseguir una combinación agradable  y nutritiva.",
        1,
        1
    ),
    (
        2,
        "Golupsy",
        2300,
        "Repollo, zanahoria, tomate, morron, cebolla, ajo, arroz y sal.",
        "golupsi3.jpeg",
        "Aparecieron en el siglo XVIII, una época en la que la gastronomía francesa empezaba a desatar pasiones en San Petersburgo. El nombre de este plato viene de la costumbre francesa de cocinar palomas envueltas en hojas de repollo. Golub significa paloma en ruso. Este plato es elaborado a base de hojas de repollo rellenas de carne picada y arroz, ahogados en salsa de tomates.",
        2,
        1
    ),
    (
        3,
        "Pilmeni",
        1950,
        "Carne vacuna pastoril, cebolla, harina de trigo orgánica 000, tomate perita , vinagre, sal y pimienta",
        "pilmeni.jpeg",
        "También conocidos como Capeletis, es una es una especie de pastel pequeño hervido de masa sin levadura y relleno de carne. El nombre de “pelmeni” significa “oreja de pan” ya que su forma recuerda una oreja. Llegaron a Rusia con las tribus nómadas fino-ugrias. La misma palabra pelmén literalmente significa oreja de masa en la lengua fino-ugria. En realidad, tienen cierta semejanza con la forma de una oreja. Se cree que la difusión de este plato comenzó a fines del siglo XIV. Este plato se acompaña con salsa de tomate cruda, ajo y vinagre.",
        2,
        0
    ),
    (
        4,
        "Chebureki",
        700,
        "Carne picada de cordero, cebolla, harina de trigo orgánica 000, especias, sal y pimienta. ",
        "chebureki.jpeg",
        "Se las conoce como el plato oficial de los tártaros de Crimea. Es típico encontrarlas en puestos callejeros o en cafeterías especializadas que solo venden diferentes variedades de empanadillas. Tienen un relleno muy jugoso porque a la carne picada se le añade agua durante su preparación.",
        1,
        0
    ),
    (
        5,
        "Akroshka",
        1700,
        "Pollo de campo, o carne vacuna pastoril,  palta, cebolla de verdeo, eneldo, patatas, huevo,rabano, pepino, kefir elaborado con manzanas, pasas de uva y jengibre, limon, mayonesa de oliva.",
        "okroshka2.jpeg",
        " Se usa cualquier sobrante de carne hervida de ternera, cerdo, pollo, o pavo, salchichas, o de pescados como bacalao, tenca, esturión, lucioperca. Se sirve bien fría y tradicionalmente se aderezaba con un poco de mostaza y/o de Smetana (muy similar a la crema agria), A falta de Kvas, hemos mantenido el kéfir y lo hemos mezclado un poquito de agua con gas y un chorrito de zumo de limón",
        1,
        0
    ),
    (
        6,
        "Vareniki",
        2000,
        "Portobellos, cebolla, patatas, huevos, harina de trigo orgánica 000, semolín, aceite de oliva y sal.",
        "vareniki.jpeg",
        "Se trata de una masa elaborada con harina de trigo que lleva su correspondiente relleno y se pliega con forma de media luna. Se pueden encontrar vareniki de carne, a base de repollo y los hay también rellenos de fruta como la frutilla. Este plato se suele acompañar con crema de leche y cebolla caramelizada, como tambien salsa bechamel con portobellos.",
        2,
        0
    ),
    (
        7,
        "Selyodka",
        2200,
        "Remolacha, lomos de atun o caballa marinadas en sal,cebolla, patatas, zanahorias, mayonesa de oliva, sal.",
        "seliodka.jpeg",
        "Se cree que esta ensalada fue inventada a principios del siglo XX por el comerciante Anastas Bogomilov. el dueño del restaurante, para proteger a la institución de las peleas de borrachos. El papel especial en el nuevo plato aparecido en medio de la Guerra Civil, jugó el rango de colores. Así, la remolacha marrón se asociaba con la bandera roja, y las papas y el arenque en aquel momento eran considerados los principales entremeses de obreros y campesinos. Los visitantes del restaurante, a quienes les gustó 'Selyodka pod shuboy' , ordenaban activamente la ensalada, y durante el uso del vodka se emborrachaban mucho menos, ya que disminuía sustancialmente el número de peleas.",
        2,
        0
    ),
    (
        8,
        "Grechka",
        1400,
        "Grano de trigo serraceno, leche, manteca, sal, azucar.",
        "grechka.jpeg",
        "La reina de la proteína vegetal en Rusia se sirve mucho como guarnición, no contiene gluten y tiene la cualidad de ser energético y nutritivo, ideal para el frío. Es un cultivo originario de Asia, especialmente de la región de Manchuria, que se fue conociendo y usando en Europa a partir del siglo XVI. Se trata de un producto muy importante en la cocina rusa y muy usado históricamente por su bajo valor económico y sus grandes propiedades alimenticias. Es un producto muy rico en rutina que favorece la circulación sanguínea. Es común consumirlo hervido en grano, bien acompañado de leche (grechnevaya kasha) o como guarnición para todo tipo de platos, sobre todo de carne. Se sirve recién cocida y acompañada de mantequilla.",
        1,
        0
    ),
    (
        9,
        "Ptichie molokó",
        850,
        "Leche,  leche condensada, cacao, mantequilla, huevos , queso mascarpone y azucar.",
        "ptichiemoloko-2.jpeg",
        "El nombre no lo más sorprendente del pastel en sí, aunque significa literalmente “leche de ave”. Según una antigua leyenda, la “leche de ave” era ingrediente sagrado con el que las aves del paraíso alimentaban a sus polluelos. Los cuentos populares eslavos recuerdan que las hermosas doncellas, que querían probar a sus admiradores masculinos, les pedían que les trajeran “leche de ave”, cuyo hallazgo se consideraba casi imposible.'Tarta leche de pajaro' fue ideada por un grupo de confiteros dirigidos por Vladímir Guralnik, jefe del departamento de pastelería del restaurante moscovita Praga, y se convirtió en una continuación directa del “zefir francés” con algunas modificaciones en la receta. Sin embargo, algunos ingredientes se mantuvieron en el tiempo, tales como, cacao amargo , leche, mantequilla y huevos.",
        3,
        0
    ),
    (
        10,
        "Medovik",
        1300,
        "Miel, Harina de trigo orgánica 0000, manteca, nueces, crema de leche, leche condensada, leche y azucar.",
        "torta-de-miel.jpeg",
        "Conocida tambien como Torta de Miel, fue creada en la década de 1820 por un Chef personal del Zar ruso Alejandro I, el cual decidió elaborar , por orden del líder, un postre  dulce y especial para la empratriz. al adentrarse a la cocina, utilizó los ingredientes que tenía en el momento y realizó una tarta con miel a la que le llamó medovik. En la actualidad, rste auténtico pastel de miel se elabora con bizcocho y un relleno de crema.  Los ingredientes que se pueden encontrar en el relleno es la leche condensada cocinada durante muchas horas. Además también es habitual que contenga nueces.",
        3,
        1
    );

-- users --
INSERT INTO
    babula.users (
        id,
        firstName,
        lastName,
        email,
        password,
        roleId,
        avatar
    )
VALUES
    (
        1,
        "Alan",
        "Arias",
        "alan.arias486@gmail.com",
        "$2a$10$.JuhFzuQN1kayFJiSSd57.ktVLCkmcJ3lRTcotm7BTVrhKxel0mUq",
        1,
        "1655064489097_img.jpg"
    ),
    (
        2,
        "Adriano",
        "Carrieri",
        "adrianocarrieri.dg@gmail.com",
        "$2a$10$BIZOxwyg/MSxVi3glKOItey8SEH2jQQ6Rsx4mWZFPhdHbS/9OWhjq",
        2,
        "1655080947608_img.jpg"
    ),
    (
        3,
        "Lika",
        "G.",
        "likainffo@gmail.com",
        "$2a$10$cqRgsewc.yOBP3ymcVyCROvnxTNyNE4nayLtLutWeXzz0CRgmrXbG",
        1,
        "1655162677906_img.jpg"
    );