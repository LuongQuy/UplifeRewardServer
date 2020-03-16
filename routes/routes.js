const express = require('express');
const router = express.Router();

const ownerController = require('../controllers/rewardController');

router.post('/giveReward', ownerController.giveReward);
router.get('/getReward', ownerController.getReward);

module.exports = router;