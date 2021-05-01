$('.cardio_forms').submit(async (event)=> {
  event.preventDefault();
  const id = event.target.dataset[ 'id' ];
  console.log( 'id :>> ', id );
  
  const modal = '#' + id + '_modal';
  const workout_id = $('#latest_workout_id').attr('data-id');
  $( modal ).modal( 'hide' );
  
  console.log(workout_id);
  
  const input = {
    type: "cardio",
    name: $('#name_'+id).val(),
    duration: +$('#duration_'+id).val(),
    distance: +$('#distance_'+id).val(),
  };
  console.log('input :>> ', input);
  
  $( modal ).on( 'hidden.bs.modal', async function ( e ) {

    const res = await fetch('/api/work/' + workout_id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (res.ok) {
      render_latest();
    }
    
  });

});
