const truffleConfig = require("../truffle");
const Web3 = require("web3");

const DEFAULT_HTTP_PROVIDER = "http://localhost:8545";

let config = {}
config.postgres = {
  "host": "localhost",
  "port": "5432",
  "database": "postgres",
  "user": "postgres",
  "password": "postgres"
}

config.maxBlockGas = 4712388;

config.web3 = new Web3(new Web3.providers.HttpProvider(DEFAULT_HTTP_PROVIDER));

if (process.env.NODE_ENV == "test") {
  config.postgres.database = "re-test";
}

if (process.env.NODE_ENV == "rinkeby") {
  config.web3 = new Web3(truffleConfig.networks.rinkeby.provider());
}

if (process.env.NODE_ENV == "ropsten") {
  config.web3 = new Web3(truffleConfig.networks.ropsten.provider());
}

module.exports = config;
