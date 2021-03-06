/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

const Web3 = require("web3");
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "wrist lion initial capable saddle share ordinary menu stage since shed shoe";
const accessToken = "QDi51ZxKFL9ox3cMVDtG";


module.exports = {
  networks: {
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "5777"
    },
    dev: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    test: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
     provider: function() {
       return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${accessToken}`)
     },
     network_id: 3
    },
    rinkeby: {
     provider: function() {
       return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/${accessToken}`)
     },
     network_id: 4
   },
  },
};
