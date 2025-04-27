/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  let addedTable = knex.schema.createTable("pets", (table) => {
    table.increments("id").primary().notNullable();
    table.string("name").notNullable();
    table.string("species").notNullable();
    table.string("breed").notNullable();
    table.string("age").notNullable();
    table.text("description").nullable();
  });
  return addedTable;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  let deleteTable = knex.schema.dropTableIfExists("pets");
  return deleteTable;
};
