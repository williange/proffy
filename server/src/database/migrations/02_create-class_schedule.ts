import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE') //deletar todas as aulas do professor, quando deleta o professor
            .onUpdate('CASCADE'); // altera a informação aqui também
    })
}

export async function down(knex: Knex) {
    // Utilizado caso de algo de errado
    return knex.schema.dropTable('class_schedule');
}