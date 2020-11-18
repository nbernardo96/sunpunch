// Authentication stuff, new user, and remove user
const db = require('../database/knex');


const User = () => ({
        // findAll
        findAll: async (req, res) => {
            const users = db('employee').select()
            .then(records => {
                for (record of records) {
                    console.log(record['employee_name']);
                }
            }).catch(err => {
                console.log('Error was found!', err);
            }).finally(() => {
                db.destroy();
            })
            return users;
        },
        
        // findByID
        findByID: '',

        // store
        store:'',
        
        // update
        update:'',

        // destroy
        destroy:''
    }
)


module.exports = User