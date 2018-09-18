const _ = require("lodash");
const moment = require("moment");
const Sequelize = require("sequelize");
const Data = require("../models/data");
const contractsService = require("./contracts");
const debug = require("debug")("re:services:data");

const config = require("../config");


async function saveClientData(params) {
  let field1 = params.field1;
  let field2 = params.field2;
  return new Promise((resolve, reject) => {
    contractsService.getData()
     .then(contractsData => contractsData.saveData.save(field1, field2, {from: contractsData.accounts[0]}))
     .then(async (saveTx) => {
        debug("Save tx = ", saveTx);
        let txHash = saveTx.tx;
        const createParams = {
          field1,
          field2,
          txHash
        }
       Data.create(createParams).then(newData => {
         return resolve(newData);
       })
      })
    .catch(err => reject({error: "Save client data was rejected with an err = " + err}))
  })
}


module.exports = {
  saveClientData
}
