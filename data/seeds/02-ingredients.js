
exports.seed = function ( knex ) {
  // Deletes ALL existing entries
  return knex( 'ingredients' ).truncate()
    .then( function () {
      // Inserts seed entries
      return knex( 'ingredients' ).insert( [
        { id: 1, ingredient_name: ' 1 bag pre-made batter' },
        { id: 2, ingredient_name: ' 1 cup water' },
      ] );
    } );
};
