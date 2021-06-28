exports.up = function(knex) {
    return knex.schema.createTable('articles', table => {
           table.increments('id').primary()
           table.string('name').notNull()
           table.string('description' , 1000).notNull() 
     table.strng('imageUrl', 1000) // 1000 refere-se ao número de carateres
     table.binary(content).notNull() // Binary Large Object, Campo Binário dentro da base de dados
     
     table.integer('userId').references('id')
         .inTable('users').notNull()
     table.integer('categoryId').references('id')
         .inTable('categories').notNull()
   })
}; 

exports.down = function(knex) {
 return knex.schema.dropTable('articles')
};
