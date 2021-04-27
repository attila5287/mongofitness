const router = require( 'express' ).Router();
const resist = require( '../../resist' );


router.get( '/resist/seed/:targeted', ( req, res ) => {


  const requested = resist.filter( r => r.targeted.toLowerCase() === req.params.targeted );

  // res.json( resist );
  res.json( requested );
} );

module.exports = router;
