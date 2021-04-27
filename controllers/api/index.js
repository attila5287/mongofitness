const router = require( 'express' ).Router();
const workout_routes = require( './workouts' );
router.use('/work', workout_routes);

const ex_routes = require('./exercises');
router.use('/ex', ex_routes);


module.exports = router;


