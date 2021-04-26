const router = require( 'express' ).Router();
const {burning, lifting} = require( '../utils/helpers' );
// const Workout = require( "../models/Workout" );

router.get( '/', ( req, res ) => {
  
  res.render( 'landing', { burning: burning, lifting:lifting  } );
  

});



module.exports = router;
