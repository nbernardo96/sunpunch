
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('department').del()
    .then(function () {
      // Inserts seed entries
      return knex('department').insert([
                {
          department_name: 'Operations',
          department_email: 'jdominguez@sunshinelifehealth.com'
        },
        {
          department_name: 'Contracting',
          department_email: 'x@sunshinelifehealth.com'
        },
        {
          department_name: 'Commission',
          department_email: 'commissions@sunshinelifehealth.com'
        },
        {
          department_name: 'Medicare',
          department_email: 'y@sunshinelifehealth.com'
        },
        {
          department_name: 'Call Center',
          department_email: 'ivan@sunshinelifehealth.com'
        },
        {
          department_name: 'Broker Support',
          department_email: 'marlon@sunshinelifehealth.com'
        }
      ]);
    });
};
