const router = require( 'express' ).Router();

const {burning, lifting} = require( '../utils/helpers' );

const apiRoutes = require( './api' );
router.use( '/api', apiRoutes );

router.get( '/', ( req, res ) => {
  
  res.render('landing', {
    burning: burning,
    lifting: lifting,
    at_home: true,
  });

} );

router.get('/stats', (req, res) => {
  res.render( 'stats', {
    at_stats : true
  } );

});



module.exports = router;
