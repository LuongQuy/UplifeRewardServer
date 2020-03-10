const web3 = require('web3');
const express = require('express');
const Tx = require('ethereumjs-tx');

const app = express();
app.use(express.json());
 
app.listen(3000, () => console.log('Example app listening on port 3000!'))