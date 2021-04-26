const router = require( 'express' ).Router();
// const Workout = require( "../models/Workout" );

router.get('/', (req, res) => {

  res.render( 'dashboard' );

});



module.exports = router;
