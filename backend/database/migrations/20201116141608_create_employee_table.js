
exports.up = function(knex) {
  return knex.schema.createTable('employee', table => {
      table.string('department').references('department_name').inTable('department');
      table.string('employee_email').unique().notNullable().primary();
      table.string('employee_name').notNullable();
      table.string('employee_password').notNullable();
  })
};

exports.down = function(knex) {
      return knex.schema.dropIfTableExists('employee');
};
