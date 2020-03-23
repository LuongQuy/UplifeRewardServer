const express = require('express');
const router = express.Router();

const rewardController = require('../controllers/rewardController');

router.post('/giveReward', rewardController.giveReward);
router.get('/getReward', rewardController.getReward);
router.post('/withdrawEth', rewardController.withdrawEth);
router.post('/functionTest', rewardController.functionTest);
module.exports = router;