const sequelize = require("../db");
const Data = require("./data");

// Initialize all the models
async function init() {
  return sequelize.sync();
}

module.exports = {init};
