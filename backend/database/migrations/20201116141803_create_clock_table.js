
exports.up = function(knex) {
    return knex.schema.createTable('clock', table => {
        table.time('clock_in');
        table.date('clock_date');
        table.time('clock_out');
        table.string('employee_email').references('employee_email').inTable('employee');
    })
};

exports.down = function(knex) {
    return knex.schema.dropIfTableExists('clock');
};
