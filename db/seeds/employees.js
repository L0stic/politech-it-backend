/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('employees').del();
  await knex('employees').insert([
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      position_id: 1,
      birthday: Date.now(),
      salary: 12_345.67,
    },
    {
      first_name: 'Petr',
      last_name: 'Petrov',
      position_id: 2,
      birthday: Date.now(),
      salary: 15_345.67,
    },
    {
      first_name: 'Egor',
      last_name: 'Marusov',
      position_id: 3,
      birthday: Date.now(),
      salary: 89_012,
    },
  ]);
}
