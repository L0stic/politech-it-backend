/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      login: 'Ryan_Gosling',
      password: 'Ryan_Gosling'
    },
    {
      login: 'Jhony_Depp',
      password: '1234567890'
    },
  ]);
}
