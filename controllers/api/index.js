const router = require( 'express' ).Router();
const workout_routes = require( './workouts' );
router.use('/workouts', workout_routes);

const muscle_routes = require('./muscle');
router.use('/muscle', muscle_routes);


module.exports = router;


