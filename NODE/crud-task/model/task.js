const sequelize = require("sequelize");
const db = require("../config/database");

const Task = db.define("task", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  titre: { type: sequelize.STRING },
  description: { type: sequelize.STRING, allowNull: true },
  date_debut: { type: sequelize.DATE, allowNull: true },
  date_fin: { type: sequelize.DATE, allowNull: true },
  done: { type: sequelize.BOOLEAN, allowNull: true },
});

module.exports = Task;
