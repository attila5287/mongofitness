const router = require( 'express' ).Router();
const saved = require( '../../saved' );


router.get( '/:category', ( req, res ) => {
  // console.log(saved.resistance);
  const selected = saved.resistance.filter( r => r.category.toLowerCase() === req.params.category.toLowerCase() );
  
  res.json( selected );
} );

module.exports = router;
