const sequelize = require("sequelize");
const db = require("../database.sqlite");

module.exports = db;

const Product = db.define('product',
{
    name
    quantity
    price
})