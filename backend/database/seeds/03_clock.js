
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clock').del()
    .then(function () {

      // Inserts seed entries
      return knex('clock').insert([
        {
          clock_in: new Date().toLocaleTimeString(),
          clock_date: new Date().toLocaleDateString(),
          clock_out: new Date().toLocaleTimeString(),
          employee_email: 'nicole@sunshinelifehealth.com'
        },
        {
          clock_in: new Date().toLocaleTimeString(),
          clock_date: new Date().toLocaleDateString(),
          clock_out: new Date().toLocaleTimeString(),
          employee_email: 'richard@sunshinelifehealth.com'
        },
      ]);
    });
};
