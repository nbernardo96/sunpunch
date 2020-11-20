const router = require('express').Router();
const Employee = require('../controllers/userController');


router.get('/', async (req, res) => {
    try {
        const users = await Employee().findAll()
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ err })
    }
})

router.get('/findAll', Employee().findAll)
router.post('/login', Employee().signIn)
router.post('/register', Employee().store)
// router.post('/isAdmin', Employee().isAdmin)


module.exports = router;