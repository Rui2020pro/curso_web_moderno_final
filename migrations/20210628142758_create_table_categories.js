exports.up = function(knex) {
    return knex.schema.createTable('categories', table => {
           table.increments('id').primary()
           table.string('name').notNull()
           table.integer('parentId').notNull().references('id')
               .inTable('categories')
   })
}; 

exports.down = function(knex) {
 return knex.schema.dropTable('categories')
};
