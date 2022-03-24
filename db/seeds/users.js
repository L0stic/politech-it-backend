const passwordHash = require('password-hash');

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
      password: passwordHash.generate('Ryan_Gosling')
    },
    {
      login: 'Jhony_Depp',
      password: passwordHash.generate('1234567890')
    },
  ]);
}
