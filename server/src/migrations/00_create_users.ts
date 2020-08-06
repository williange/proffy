import Knex from 'knex',

export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        
    })
}

export async function down(knex: Knex){
    // Utilizado caso de algo de errado
}