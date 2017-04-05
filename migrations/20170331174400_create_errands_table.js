
exports.up = function(knex, Promise) {
    return knex.schema.createTable('errands', table => {
        table.increments('id').primary();
        table.string('title');
        table.text('description');
        table.date('reminderDate');
        table.date('dueDate');
        table.integer('categoryId');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('errands');
};
