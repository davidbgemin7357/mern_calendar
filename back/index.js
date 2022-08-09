const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");

// crear el servidor de express:
const app = express();

// Base de datos:
dbConnection();

// cors:
app.use(cors());

// directorio público:
app.use(express.static("public"));

// lectura y parseo del body:
app.use(express.json());

// rutas:
app.use("/api/auth", require("./routes/auth"));
app.use('/api/events', require('./routes/events'));

// * configuración necesaria para que el front y el back corran en el mismo server:
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

// escuchar peticiones:
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto: ${port}`);
});