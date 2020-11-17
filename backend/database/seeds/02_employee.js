
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employee').del()
    .then(function () {
      // Inserts seed entries
      return knex('employee').insert([
        {
          department: 'Operations',
          employee_email: 'nicole@sunshinelifehealth.com',
          employee_name: 'Nicole Bernardo',
          employee_password: 'Sunshine2020#!'
        },
        {
          department: 'Operations',
          employee_email: 'richard@sunshinelifehealth.com',
          employee_name: 'Richard Larancuente',
          employee_password: 'Sunshine2020#!'
        },
      ]);
    });
};
