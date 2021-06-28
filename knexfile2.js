module.exports = {
    client: 'mssql',
    connection:
    {
        database: 'knowledge_final',
        user: 'sa',
        password: '12345'
    },
    pool: {
        min:2,
        max:10
    },
    migrations:{
        tableName: 'knex_migrations'
    }
}