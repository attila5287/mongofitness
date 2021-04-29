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
          const li = $( '<li>' );
          li.attr('class', 'list-group-item bg-primary');
          let text = '';
        ['name','weight','reps','sets'].forEach(k => {
          text = text + k + ':' + ex[ k ] + '- ';
          li.text(text)
        });
        $( '#workout_div' ).append( li );
    });

    });
  } else
  {
    console.log('error :>> ', response.errorCode);
  }

};
render_latest();
