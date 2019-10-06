
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('users',
      (table) => {
        table.increments();
        table.string('email');
        table.string('password');
        table.string('role');
      }
    )
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
