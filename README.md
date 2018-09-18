## The APIs to the blockchain

### Dev Setup

#### Requirements

* Node.js v8
* Postgres 9.x (to support AWS Aurora)
*  `npm install -g ganache-cli`
*  `npm install -g truffle`

* Create a postgres database named `postgres` with user `postgres`
* Default connection params are in `/config/index.js`

#### Starting the API server
`truffle compile --all`
`truffle migrate --network dev --reset`
`npm run start`

### To run tests
`truffle test`

### Demo
<img src='https://github.com/antonina-cherednichenko/client-demo-app/blob/master/save_data_demo.gif' title='Video Walkthrough' width='150' alt='Video Walkthrough' />
