const Workout = require( "../../models/Workout" );
const router = require( 'express' ).Router();

router.post("/", (req,res) => {
    Workout.create(req.body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});



module.exports = router;
