
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('table_name').del(),

    // Inserts seed entries
    // TODO: bcrypt password
    knex('table_name').insert({ email: 'user1@example.com', name: 'Dwayne Johnson',
  password_hash:'password'})
    
  );
};
