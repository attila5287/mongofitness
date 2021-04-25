const router = require( 'express' ).Router();
// const Transaction = require( "../models/Transaction" );
// const seeders = require( '../seeders/seed.js' );

router.get('/', (req, res) => {
  res.send( '<h1>Hello World</h1>' );

});



module.exports = router;
