const render_latest = async () => {
  const response = await fetch('/api/work/latest', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).catch(e => console.log(e));

  if ( response.ok )
  {
    const json = await response.json();
    
    // console.log( 'json :>> ', json );
    
    json.forEach( ( workout ) => {
      
      // console.log( 'json._id :>> ', workout._id );
      
      const workout_id = $( '#latest_workout_id' )
        .attr('data-id', workout._id)
        .text( workout._id );
      
      
      workout.exercises.forEach( ex => {
      Object.keys(ex).forEach(k => {
        const p = $( '<p>' );
        p.text( k + ':' + ex[ k ] );
        $( '#workout_div' ).append( p );
        
      });
    });

    });
  } else
  {
    console.log('error :>> ', response.errorCode);
  }

};
render_latest();
