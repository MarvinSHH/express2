const mongoose = require("mongoose");
const MoliendaSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Molienda = mongoose.model("Molienda", MoliendaSchema);
module.exports = Molienda;
