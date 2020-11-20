// Authentication stuff, new user, and remove user
const db = require('../database/knex');
const bcrypt = require('bcrypt');

const User = () => ({

        // findAll
        findAll: async (req, res) => {
            db('clock').select()
            .then(async records => {
                res.json(records)
            }).catch(err => {
                console.log('Error was found!', err);
                res.json('Error finding users from clock')
            })

        },
        
        signIn: async (req, res) => {
            console.log(req.body)

            db('employee')
            .select()
            .where('employee_email', '=', req.body.employee_email)
            .then(async user => {
                const { employee_password } = user[0];


                bcrypt.compare(req.body.employee_password, employee_password, (err, valid) => {
                    if(err){
                        res.json({ valid: false })
                    }
                    else if(valid){
                        res.json({ ...user[0] })
                    }
                })

            }).catch(err => res.status(404).json({ valid: false }))
        },

        // store
        store: async (req, res) => {
            const { department, employee_email, employee_name, employee_password } = req.body;
            await bcrypt.hash(employee_password, 12, (err, hash) => {
                // Transaction allows multiple operations [When one fails, we quit the others]
                
                console.log('Test:', req.body)
                     db('employee').insert({
                        department,
                        employee_email,
                        employee_name,
                        employee_password: hash
                    }).then(() => res.status(200).json(employee_email))
                }).catch(err => res.status(400).json('unable to register'))
            
        },
        
        isAdmin:'',
        // update
        update:'',

        // destroy
        destroy:''
    }
)


module.exports = User