const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  titre: String,
  description: String,
  date_debut: Date,
  date_fin: Date,
  done: Boolean,
});

module.exports = mongoose.model("task", taskSchema);
