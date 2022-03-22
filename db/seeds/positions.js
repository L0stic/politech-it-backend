/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('positions').del();
  await knex('positions').insert([
    { position: 'Junior Software Engineer', },
    { position: 'Middle Software Engineer', },
    { position: 'Senior Software Engineer', },
    { position: 'Junior Blockchain Developer', },
    { position: 'Middle Blockchain Developer', },
    { position: 'Senior Blockchain Developer', },
  ]);
}
