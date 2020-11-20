const db = require('../knexfile');
const router = require('express').Router();
const Clock = require('../controllers/clockController');

router.post('/clockIn', Clock().punchIn);
router.post('/clockOut', Clock().punchOut);
module.exports = router;