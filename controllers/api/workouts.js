const router = require( 'express' ).Router();
const Workout = require('../../models/Workout');
router.post( "/", ( req, res ) => {
    Workout.create( req.body )
        .then( ( dbWorkout ) => {
            res.json( dbWorkout );
        } )
        .catch( ( err ) => {
            res.status( 400 ).json( err );
        } );
} );

router.get( '/all', async ( req, res ) => {
    const mods = await Workout.find( {} )
        .sort( {
            date: -1,
        } )
        .catch( ( e ) => console.log( e ) );

    res.json( mods );

} );

router.get( '/latest', async ( req, res ) => {
    const mods = await Workout.find( {} )
        .sort( {
            date: -1,
        } )
        .limit(1)
        .catch( ( e ) => console.log( e ) );

    res.json( mods );

} );


router.get( '/range', async ( req, res ) => {
    const mods = await Workout.find( {} )
        .sort( {
            date: -1,
        } )
        .limit(7)
        .catch( ( e ) => console.log( e ) );

    res.json( mods );

} );


router.put( '/:id', ( req, res ) => {
  Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body,
    },
  })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
