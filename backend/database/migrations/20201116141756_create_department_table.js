
exports.up = function(knex) {
    return knex.schema.createTable('department', table => {
        table.string('department_name').unique().notNullable().primary();
        table.string('department_email').unique().notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropIfTableExists('department');
};
