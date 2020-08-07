import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE') //deletar todas as aulas do professor, quando deleta o professor
            .onUpdate('CASCADE'); // altera a informação aqui também

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    })
}

export async function down(knex: Knex) {
    // Utilizado caso de algo de errado
    return knex.schema.dropTable('connections');
}