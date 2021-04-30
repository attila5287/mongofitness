const render_latest = async () => {
  function delete_btn_handler () {
    console.log( 'delete btn handler' );
    const response = await fetch( '/api/work/latest', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    } ).catch( e => console.log( e ) );
    
    
  }
  const response = await fetch( '/api/work/latest', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  } ).catch( e => console.log( e ) );

  if ( response.ok ) {
    const json = await response.json();
    $('#workout_div').empty();
    
    // console.log( 'json :>> ', json );

    json.forEach( ( workout ) => {

      // console.log( 'json._id :>> ', workout._id );

      const workout_id = $( '#latest_workout_id' )
        .attr( 'data-id', workout._id )
        .text( workout._id );

        
      workout.exercises.forEach( ex => {
        const btn = $( '<button>' );
        btn.attr( 'class', 'btn btn-sm btn-outline-danger ml-5' );
        btn.text('delete')
        ;
        btn.on('click', delete_btn_handler);

        const ol = $( '<ol>' );
        ol.attr( 'class', 'breadcrumb' );
        
        [ 'name', 'weight', 'reps', 'sets' ].forEach( k => {

          const li = $( '<li>' );
          li.attr( 'class', 'breadcrumb-item active' );

          li.text( k + ': ' + ex[ k ] );
          ol.append( li );

        } );
        
        $( ol ).append( btn );
        $( '#workout_div' ).append( ol );
      } );
      

    } );
  } else {
    console.log( 'error :>> ', response.errorCode );
  }

};
render_latest();
