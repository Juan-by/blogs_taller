const express = require('express');
const router = express.Router();
const {listarBlocks} = require('../controller/blocksController')

router.get('/blocks', listarBlocks);

module.exports = router;