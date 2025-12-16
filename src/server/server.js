const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors")
const productsRoutes = require("../routes/products.routes");
const cartRoutes = require("../routes/cart.routes");
const logger = require("../middlewares/logger");
const externalapiRoutes = require("../routes/externalapi.routes");

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173", // la URL del frontend que es de Vite
  credentials: true                // permite enviar cookies o auth headers
}));
app.use(express.json());
app.use(logger);



mongoose.connect("mongodb+srv://backend_proyecto_final:proyectofinal@cluster0.m4delsu.mongodb.net/proyecto-numen?retryWrites=true&w=majority")
.then(() => console.log("Conectado a MongoDB"))
.catch((err) => console.error("Error al conectar MongoDB:", err));

app.use("/api/products", productsRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api", externalapiRoutes);


module.exports = app;
