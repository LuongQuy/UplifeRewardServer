const express = require('express');
const router = express.Router();

const rewardController = require('../controllers/rewardController');

router.post('/giveReward', rewardController.giveReward);
router.get('/getReward', rewardController.getReward);
router.get('/getBalance', rewardController.getBalance);
router.post('/sendEthToSmartContract', rewardController.sendEthToSmartContract);
module.exports = router;