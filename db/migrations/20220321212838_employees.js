/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('employees', table => {
            table.increments('id').primary();
            table.string('first_name', 100).notNullable();
            table.string('last_name', 100).notNullable();
            table.integer('position_id').unsigned().notNullable();
            table.bigInteger('birthday').notNullable();
            table.decimal('salary').unsigned().notNullable();

            table.foreign('position_id').references('id').inTable('positions');
        });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable('employees');
}
