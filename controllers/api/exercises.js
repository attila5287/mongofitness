const router = require( 'express' ).Router();
const resist = require( '../../resist' );
const resista = require( '../../resista' );


router.get( '/:targeted', ( req, res ) => {


  const requested = resista.filter( r => r.targeted.toLowerCase() === req.params.targeted );

  // res.json( resist );
  res.json( requested );
} );

module.exports = router;
