/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  let addedTable = knex.schema.createTable("users", (table) => {
    table.increments("id").primary().notNullable();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.enum("role", ["adopter", "administrator"]).notNullable();
  });
  return addedTable;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  let deleteTable = knex.schema.dropTableIfExists("users");
  return deleteTable;
};
