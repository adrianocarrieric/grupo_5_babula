const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const session = require("express-session");
const cookies = require("cookie-parser");

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

// Habilitar métodos PUT/DELETE
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Recursos estaticos
app.use(express.static(path.join(__dirname, "../public")));

// Capturar la información
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: "Veo, veo... ¿qué ves?",
    resave: false,
    saveUninitialized: false,
  })
);

//Operador de cookies (global)
app.use(cookies());

//Indica usuario logueado
app.use(userLoggedMiddleware);

// Que las vistas se vean por ejs
app.set("view engine", "ejs");

// Indica a express donde buscar las vistas
app.set("views", path.join(__dirname, "/views"));

// Requerimiento y uso de sistema de Rutas..
const mainRouter = require("./routes/mainRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const apiProducts = require("./routes/api/apiProductsRouter");
const apiUsers = require("./routes/api/apiUsersRouter");

app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/user", usersRouter);
app.use("/api/products", apiProducts);
app.use("/api/users", apiUsers);

// Uso de error 404

app.use((req,res,next) => {
  res.status(404).render("not-found");
})

// Servidor
app.listen(4000, () => {
  console.log("Servidor funcionando en el puerto http://localhost:4000");
});
