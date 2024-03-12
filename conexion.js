const mongoose = require("mongoose");
//const ruta = "sin ruta porque la tendra el .env";

require("dotenv").config();
const ruta = process.env.ruta;

//conectamos con la bse de datos
async function conectar() {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(ruta);
    console.log("conenctado a la base de datos de mongo atlas");
  } catch (error) {
    console.log("error al conectar a la base de datos", error);
  }
}
conectar();
