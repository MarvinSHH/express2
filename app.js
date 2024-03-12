const express = require("express");
const router = express.router();
const app = express();
require("./conexion");
const port = 3000;

//importamos nuestro modelo
const Molienda = require("./Modelos/moliendas");

//levantamos servidor
app.listen(port, () => {
  console.log("servidor en puerto 3000");
});

//definimos middleware
app.use(express.json());
app.use(router);

router.get("/", (req, res) => {
  res.send("Ruta de usuarios");
});
//molienda
//rutas para molinedas
router.get("/moliendas", async (req, res) => {
  const respuesta = await Molienda.find();
  res.json(respuesta);
});
//ruta para insertar una molienda
router.post("/moliendas", async (req, res) => {
  const body = req.body;
  try {
    const respuesta = await Molienda.create(body);
    res.json(respuesta);
  } catch (error) {
    res.json(error);
  }
});
//ruta para consultar una molienda en especifico
router.get("/moliendas/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await Molienda.findById(id);
  res.json(respuesta);
});
//github ing luis Api-express
