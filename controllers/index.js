const router = require( 'express' ).Router();

const {burning, lifting} = require( '../utils/helpers' );

const apiRoutes = require( './api' );
router.use( '/api', apiRoutes );

router.get( '/', ( req, res ) => {
  
  const scripts = [
    '/js/collapse/muscle_div.js',
    '/js/collapse/calorie_div.js',
    '/js/resist/menu.js',
  ];

  res.render('landing', {
    burning: burning,
    lifting: lifting,
    at_home: true,
  });

});



module.exports = router;
