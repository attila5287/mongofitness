const router = require( 'express' ).Router();
const saved = require( '../../saved' );


router.get( '/:targeted', ( req, res ) => {


  const selected = saved.resistance.filter( r => r.targeted.toLowerCase() === req.params.targeted );

  // res.json( resist );
  res.json( selected );
  
} );

module.exports = router;
