// Authentication stuff, new user, and remove user
const db = require('../database/knex');


const User = () => ({
        // findAll
        findAll: async (req, res) => {
            db('employee').select()
            .then(records => {
                for (record of records) {
                    console.log(record['employee_name']);
                }
            }).catch(err => {
                console.log('Error was found!', err);
            })

        },
        
        // findByEmail
        findByEmail: async (req, res) => {
            console.log(req.body)
            await db('employee').select()
            .where({ employee_email: req.body.username })
            .then(user => {
                if (user && user.length == 1){
                    res.json({valid: true})
                } else {
                    res.json({valid: false})
                }
            }).catch(err => {
                res.send('Error: Connection error', err)
            })
        },

        // store
        store:'',
        
        // update
        update:'',

        // destroy
        destroy:''
    }
)


module.exports = User