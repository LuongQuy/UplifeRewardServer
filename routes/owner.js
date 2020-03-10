const express = require('express');
const router = express.Router();

const ownerController = require('../controllers/ownerController')

router.get('/say_hi', (req, res) => {
    res.send('hi Quy!')
})

module.exports = router;