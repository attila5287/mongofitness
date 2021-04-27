const router = require( 'express' ).Router();

const {burning, lifting} = require( '../utils/helpers' );
const apiRoutes = require( './api' );
router.use( '/api', apiRoutes );


router.get( '/', ( req, res ) => {
  
  res.render( 'landing', { burning: burning, lifting:lifting  } );

});



module.exports = router;
