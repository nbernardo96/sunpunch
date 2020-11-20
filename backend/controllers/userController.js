// Authentication stuff, new user, and remove user
const db = require('../database/knex');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
            
            await db('employee').select()
            .where({ employee_email: req.body.username })
            .then(user => {
                
                if (user && user.length === 1 && user[0].employee_password === req.body.password ){
                    const token = jwt.sign( 
                        { employee_email: user[0].employee_email },
                        'SECRET',
                        { expiresIn: '24h' }
                        )
                        
                        res.json({key: token})
                    } else {
                    console.log(req.body)
                    res.json({key: ""})
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