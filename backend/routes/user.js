const router = require('express').Router();
const Employee = require('../controllers/userController');
const bodyParser = require('body-parser');

router.get('/', async (req, res) => {
    try {
        const users = await Employee().findAll()
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ err })
    }
})

router.post('/login', Employee().findByEmail)

module.exports = router;