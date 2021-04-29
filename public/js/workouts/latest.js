const render_latest = async () => {
  const response = await fetch('/api/work/latest', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).catch(e => console.log(e));

  if ( response.ok )
  {
    const json = await response.json();
    console.log('json :>> ', json);
    json.forEach( ( workout ) => {
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
