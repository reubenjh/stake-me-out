
exports.up = function(knex) {
  return knex.schema.createTable('houses', (table) => {
    table.increments('id')
    table.string('address')
    table.integer('rv')
    table.integer('salePrice')
    table.integer('rooms')
    table.integer('sizeInMetersSquared')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTaabe('houses')
};
