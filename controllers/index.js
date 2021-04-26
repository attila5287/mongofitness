const router = require( 'express' ).Router();
const {gen_imgs} = require( '../utils/helpers' );
// const Workout = require( "../models/Workout" );

router.get('/', (req, res) => {
  console.log('helpers.gen_imgs :>> ', gen_imgs);
  res.render( 'landing', { images: gen_imgs } );
  

});



module.exports = router;
