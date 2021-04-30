const render_latest = async () => {
  const response = await fetch( '/api/work/latest', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  } ).catch( e => console.log( e ) );

  if ( response.ok ) {
    const json = await response.json();

    // console.log( 'json :>> ', json );

    json.forEach( ( workout ) => {

      // console.log( 'json._id :>> ', workout._id );

      const workout_id = $( '#latest_workout_id' )
        .attr( 'data-id', workout._id )
        .text( workout._id );

        
        workout.exercises.forEach( ex => {
        const ol = $( '<ol>' );
        ol.attr( 'class', 'breadcrumb' );
        
        [ 'name', 'weight', 'reps', 'sets' ].forEach( k => {

          const li = $( '<li>' );
          li.attr( 'class', 'breadcrumb-item active' );

          li.text( k + ':' + ex[ k ] );
          ol.append( li );

        } );
        
        $( '#workout_div' ).append( ol );
      } );
        

    } );
  } else {
    console.log( 'error :>> ', response.errorCode );
  }

};
render_latest();
