const Sequelize = require("sequelize");
const sequelize = require("../db");

const Data = sequelize.define("data", {
  field1: Sequelize.INTEGER,
  field2: Sequelize.INTEGER,
  txHash: Sequelize.STRING,
});

module.exports = Data;
