$( '.fetch_btns' ).each( function ( index, element ) {
  $( this ).on( 'click', async ( event ) => {
    event.preventDefault();

    console.log( event.target.dataset['category'] );
    const cat = event.target.dataset['category'].toLowerCase();
    const response = await fetch( '/api/ex/' + cat, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    } );
    
    if (response.ok) {
      console.log( 'resp OK' );
      
      const json = await  response.json() ;
      console.log('json :>> ', json);
    }

  } );
} );
