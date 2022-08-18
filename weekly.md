
**Sprint 3**


**Encuentro 29 de abril**

Nicolas:

Comenzó a diseñar la creacion y edición de productos.
No encontró ningun impedimento.
Con soporte de Andriano , faltaria terminar la creacion y edicion de productos, organizar el sistema de ruteo de las mismas y armar la retro del sprint 2.

Alan:

Estuvo repasando conceptos de Express para poder armar el orden de carpetas con vistas de MVC y cambiar las extensiones de html.
Como impedimento surgió que al cambiar las extensiones, no levantaba el servidor.
Como tarea de la semana , debe actualizar el carrito de compras y organizar el sistema de ruteo del mismo.

Adriano:

Volvió a chequear conceptos y actualizo el diseño de la home, junto con las medias queries. Tambien se realizó una modificaion interna del archivo, como el nobmre de los productos.
Como impedimento se encontro trabajando en el master. Esto se encuentra solucionado y se esta pusheando en el main. Notó que las rutas estaban mal planteadas y cambió el sendfile por render, esto hizo que le servidor vuelva a levantar correctamente.
La tarea de la semana será armar la creacion y edicion de productos junto con Nicolas, actualizar su bio en el archivo de read.me y, organizar sistema de ruteo de login y register.

Lika:

Realizó cambio de idioma, actualizacion de vista de productos. Asimismo, se actualizo el mainController con los productos y se organizo el sistema de ruteo del index.
Como impedimento sucedió el no poder avanzar con los partials ya que no levantaba el servidor a partir de que se cambiaron las extensiones. Resulta que era un problema de como se plantearon las rutas, ya que era necesario indicar que el response sea "render".
Las tareas a realizar serian, implementar de forma correcta la media querie de la vista de productos, armado de ruta parametrizada para poder ingresar al detalle de cada producto en la vista de products, organizar sistema de ruteo de dicha vista y actualizar archivo de Weekly.

**Encuentro 6 de mayo**

Como impedimento grupal se encontro con que no se puede implementar el partials del head en todas las vistas, ya que cada vista esta linkeada a un css diferente.

**Encuentro 8 de mayo**

Nicolas:

Se realizó creacion de formulario de edicion y creación de productos. Como impedimento hubo falta de comunicacion con Adriano ya que lo iban a realizar en conjunto. Se realizo un check de los cuatro formularios que se crearon y se seleccionó dos de ellos.
Como tarea del dia será temrinar de pulir la creacion de edicion de productos, hacer las rutas de login y register y actualizar la retro del sprint II.
Adicional: que se vea una vista parcial de las imagenes subidas en los formularios de creacion de productos.

Alan:

Actualizo el css del carrito de compras y como bloqueante encontró que no funcionaba la ruta de productos en app.js. Como tarea del dia se lleva la actualización de rutas de productos.

Adriano:

Con acompañamiento de Nicolas, armar diseño y armado de vistas de creacion y edicion de productos junto con sus rutas. Asimismo, creo una vista de detail de productos. Como impedimento y por falta de comunicación, se crearon 2 formularios de edicion y dos formularios de creacion de productos. En conjunto a Nico, se pusieron de acuerdo y optaron por 2 de ellos.
De forma adicional, dio soporte a Lika con la ruta parametrizadas de los productos, del backup de productosDataBase.json e implementacion de tags dentro de archivos de index y detail de productos, como también el armado de rutas para que funcione todo.
En este caso un impedimento que se encontró es que el servidor no levantaba lo realizado, ya que se estaban exportando mal los módulos.
Se lleva la creación del la vista de productos.

Lika:

Con soporte de Adriano, se creo la carpeta de data y dentro, un backup de productos los cuales se implementaron con tags en la vista del index y del detail de productos. Tambien se implementó lo necesario en productsController, como tambien armado de código en las rutas de los productos para que dichos tags funcionen de manera correcta.
Como impedimento se encontraron que el servidor no levantaba lo realizado, ya que se estaban exportando mal los módulos.
Como pendiente queda ver las medias queries de la vista de detail de productos para que desde desktop se visualice con flex la foto, el titulo y la descripción de cada plato. Por último, agregar al menos 5 platos más y actualizar la descripción de cada producto, indicando si es apto celiaco, vegano, vegetariano, calorias e ingredientes utilizados.

**Encuentro 14 de mayo**

Lika:

Se realizan modificaciones en el partials del head, implementando etiquetas de ejs para linkear los css en las vistas que correspondan, como taambien, que cada vista tenga el titulo que le corresponda.
Tambien se agrega al home una caja en el header con una descripción llamada "NOSOTROS" donde hay una breve historia.
Al carrito de compras se le hace una pequeña modificacion visual.
Por último, se agregan 5 productos al archivo de productsDataBase.
Con todos estos cambios aparecieron nuevos impedimentos tales como:
La vista del formulario de creacion de productos tiraba error al cargarla en el servidor.
No repercutia el css en la vista del carrito de compras.

Con ayuda de Alan, Nicolas y Adriano se solucionaron estos impedimentos en la weekly.


**Sprint 4**



Se repartieron las tres tareas de planificacion y el punto 1 y 2 sobre el armado de los JSON.
En esta ocasión contamos con la ventaja de tener finalizado el punto 1 , el cual entregamos para el Sprint anterior.
Con respecto a la tarea numero 3 sobre la implementacion de CRUD de productos, habiamos entregado las primeras tres rutas para el Sprint anterior.
Definimos un próximo encuentro para el 18 de Mayo, en el cual debemos tener finalizadas las tareas repartidas para comenzar a utilizar el método pair programming.

**Encuentro 18 de Mayo**

Avanzamos en la implementación de las rutas indicadas para el sprint IV y en esta ocasión, implementamos rutas para create. Si bien avanazamos, encontramos problemas para incorporar los datos de ingreso en el JSON. A diferencia de otros sprints no realizamos división de tareas. Lika compartía pantalla y fuimos desarrollando el proyecto utilizamos la lógica del pair programing.
Tuvimos dos bloqueantes. El primero fue tener en español toda la informacion en el prouctsDataBase. El segundo bloqueante fue con las imagenes que agregabamos en el formulario, las mismas no quedaban guardadas en el proyecto y no se reflejaba en la vista de detail de productos.

**Encuentro 20 de Mayo**

Comenzamos a armar la lógica de la ruta a donde se envia el formulario de edicion de productos y realizamos actualizaciones tanto en el formulario de creacion como de edicion de productos para que ambos contengan el mismo orden e idioma que el plasmado en el JSON de productsDataBase.
También agregamos tags de ejs dentro del formulario de edicion de productos para que cuando el administrador quiera editar un producto, la información del mismo aparezca automaticamente en el formulario al clikear en editar producto.
Se pacto otro encuentro para enfocarnos en arreglar los bloqueantes que venimos teniendo en ambas rutas de formularios y finalizar con el armado de la ruta de delete.

**Encuentro 22 de Mayo**

En equipo resolvimos lo que no nos permitia que las fotos no se guarden e impacten en el detail de los productos. Encontramos como bloqueante la implementacion del menu del dia en la edicion y creacion de formulario, ya que cuando agregabamos o editabamos un producto y lo sacabamos o agrgabamos al menu del dia, no aparecia en la home dado que no impactaba el booleano del true/ false. Lo pudimos resolver de manera rápida y eficaz.
Por último, trabajamos en el armado de la ruta de delete.


**Sprint 5**


**Encuentro 6 de junio**

En reunión de equipo resolvimos lo requerido en el punto 4 del Sprint. Establecimos división de tareas para el resto de los puntos. Adriano y Lika resuelven el punto 6. Alan y Nicolás resuelven el punto 5. En grupo se resolverá el punto 8.

**Encuentro 9 de junio**

Realizando peer programming , Adriano y Lika comenzaron a impleementar los requerimientos del punto 6 sobre el armado de login. En el armado del código se tuvo que hacer parte de los requerimientos del punto 5, en el cual solicitan implementar el registro de usuarios, para que el proyecto funcione ya que las validaciones aún no se encontraban hechas. Tambien se realizaron cambios del diseño en el formulario de login y se realizó la implementacion de los middlewares.
Como bloqueante la terminal quedó crasheada y el servidor no levantaba las rutas get/post del formulario de login por lo cual, no se guardaban los usuarios en el json.

**Encuentro 10 de junio**

Nicolas y Adriando lograron destrabar el problema de validación de formulario con el envío de la información al archivo json de usuarios. Era necesario tener resueltos las validaciones del punto 5 para hacer el punto 6.
En equipo se avanzó sobre el punto 6 y 8 siguiendo la lógica del peer programming.

**Encuentro 12 de junio**

Se cambia el formulario de register guiandose por el diseño nuevo del formulario de login. La ruta get no levantaba el servidor cuando se registraba un usuario. Como punto a favor, se logró destrabar este bloqueante.
De bonus, se resolvió el punto 7 y por último, las rutas de huespedes y usuarios se implementaron con un solo bloqueante el cual fué sobre ¿Cuál es la visualización de vistas para usuarios "Admin" y "User"?

**Encuentro 13 de junio - Clase de práctica**

Aprovechando la clase en vivo práctica del curso, se pudo desbloquear el problema que se arrastraba del anterior encuentro sobre las vistas que ven los usuarios "Admin" y "User" al logearse en la página. Tambien se actualizó el menú en todos los css.
Por último, se agregó un middleware de productos para tener aún más ordenado el código y las carpetas con vistas de MVC.


**Sprint 6**


**Encuentro 24 de junio**

Reunión para definir tareas para empezar el sprint. Utilizamos la herramienta flowchart maker para empezar a hacer los diagramas. Entre todo el equipo empezamos a delinear el esquema. Alan se llevó terminar la propuesta para luego revisar de forma grupal.

**Encuentro 27 de junio**

Reunión para concluir el diagrama. Lika, Adriano y Alan se juntaron par finalizar y corregir el esquema de trabajo pautado el 24 de junio.

**Encuentro 1 de julio**

Reunión entre Lika y Adriano, se realizaron nuevos ajustes en el esquema de base de datos, corrigiendo las relaciones entre tablas y claves foráneas.
Reunión con Guido Maimone, donde aclaramos dudas sobre los cambios aplicados en el esquema de base de datos.


Lika 

Se aplican los ajustes mencionados a los esquemas a través de la plataforma DynoBird obteniendo el script necesario para creación de base de datos a través de Workbench. Tambien realiza cracion de carpeta db en VsCode junto al diagrama de base de datos, detalle del script de DynoBird y el archivo populate. Por último avanzó con la implementacion de sequelize al proyecto, además de crear el detalle y configuración  de los cuatro modelos >> Products, Category, Role y Users .

**Encuentro 6 de julio**

Nueva Reunión para corregir errores que se presentaron en el script mencionado anteriormente, con resultados positivos.

**Segundo encuentro 6 de julio**

Reunión de todo el equipo para coordinar los últimos pasos para finalizar el sprint el cual no se llega a entregar a tiempo por problemas ajenos a la organización del grupo. Queda pendiente implementacion de CRUD de productos y usuarios.


**Sprint 7**


**Encuentro 16 de julio**

En la división de tareas para el sprint VI, Alan se llevó para realizar validaciones desde el front. Nicolás tomó las validaciones desde el back. Adriano y Lika proceden a complentar el faltante del CRUD del Sprint anterior.

Adriano y Lika realizan parte de la implementacion del CRUD de productos utilizando metodo pair programming.

**Encuentro 17 de julio**

Adriano y Lika realizan segunda parte de la implementacion del CRUD de productos utilizando metodo pair programming. Como bloqueante se encontraron con el servidor crasheado al querer continuar con el CRUD de usuarios ya que no reconocia la base de datos.

**Encuentro 18 de julio**

Adriano finaliza con la implementacion del CRUD de productos.
Se lográ la sincronización de usuarios de base de datos al proyecto. El bloqueante era que en el modelo de Users se definia una clave foranea de más por equivocación y creaba una fila "true" la cual no pertencia a ninguna fila existente en la base de datos.

Adriano y Lika realizan parte de la implementacion del CRUD de usuarios utilizando metodo pair programming. Como bloqueante se encuentra que en el codigo los roles de usuarios son Admin & User pero en la base de datos se realizaron cambios para que se reconociera al Admin con un valor de = 1 y al usuario con un valor de = 2. 

**Encuentro 19 de julio**

Entre Adriano y Lika, se complementa el código de CRUD de usuarios. 
Se ejecutaron cambios en las vistas para que los Admin puedan crear productos.

Alan genera parte de las validaciones de Front, las cuales son comentadas ya que se crasheaba la terminal.

**Encuentro 20 de julio**

Alan continua con la validación desde el front del login de usuarios. Se avanzó con el código e implementación de validación para registro de usuarios, creación y edición de productos. Pero al momento hay errores que no permiten que se valide de forma correcta. No hay interacción de los archivos JS correspondientes con la vista.

Nicolas realiza implemetacion de validaciones backEnd, correciones validaciones front y otras correciones de conflictos.
