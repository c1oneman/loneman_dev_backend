
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name', 24).notNullable()
        tbl.string('description', 128).notNullable()
        tbl.string('img').notNullable()
        tbl.string('url').notNullable()
    })
    .createTable("technologies", table => {
        table.increments();
        table.string('name');
        table.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT")
    })
    .createTable('skills', tbl => {
        tbl.increments()
        tbl.string('name', 24).notNullable()
        tbl.string('color', 24).notNullable()
        tbl.string('url', 24).notNullable()
        tbl.string('icon', 24).notNullable()
        tbl.string('time', 24).notNullable()
    })
};
exports.down = function (knex, Promise) {
    // drop in the opposite order
    return knex.schema
        .dropTableIfExists('skills')
        .dropTableIfExists('technologies')
        .dropTableIfExists('projects')
};
