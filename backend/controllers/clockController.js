// Adding the time in/out to the db and updating the time

const db = require('../database/knex');

const Clock = () => ({
    //
    selectClock: async (req, res) => {
        await db('clock').select()
                .then(records => {
                    console.log(records)
                    return res.json(records)
                })
                .catch(err => {
                    console.log('Error getting clock db', err)
                    res.status(400).json('Failed')
                })
    },

    // punchIn
    punchIn: async (req, res) => {

        const { employee_email, clock_in } = req.body
        const today = new Date();

        await db.transaction(trx => {
            trx('clock').select()
            .where('employee_email', '=', employee_email)
            .returning('*')
            .then(user => {

            if(user.length === 0)
                return trx('clock')
                    .returning('*')
                    .insert({
                        employee_email,
                        clock_date: today.toLocaleDateString('en-US'),
                        clock_in: today.toLocaleTimeString('en-US')
                    }).then(user => {
                        res.json(user[0])
                    })
            }).then(trx.commit)
              .catch(trx.rollback)
        })
        .catch(err => res.status(400).json('unable to register'))
    },

    // punchOut
    punchOut: async (req, res) => {

        const { clock_out, employee_email } = req.body
        console.log('EMP EMAIL', employee_email)

        await db('clock')
            .where('employee_email', employee_email)
            .update({ clock_out })
            .then(user => {
                res.status(200).json('success')
            })
        .catch(err => res.status(400).json('unable to register'))
    }

    
    // create
    
    // update



})

module.exports = Clock;