const SaveData = artifacts.require('./SaveData.sol');

module.exports = function(deployer) {
  deployer.deploy(SaveData);
}
