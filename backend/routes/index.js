// combines all routes
const router = require('express').Router();
const clock_router = require('./clock');
const user_router = require('./user');

router.use(clock_router)
router.use(user_router)

module.exports = router;