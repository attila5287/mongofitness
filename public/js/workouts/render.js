const render_latest = async () => {
  const response = await fetch('/api/work/latest', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch((e) => console.log(e));

  if (response.ok) {
    $('#workout_div').empty();
    
    const json = await response.json();

    json.forEach((workout) => {
      // console.log( 'json._id :>> ', workout._id );

      const workout_id = $('#latest_workout_id')
        .attr('data-id', workout._id)
        .text(workout._id);

      workout.exercises.forEach((ex) => {

        const ol = $('<ol>');
        ol.attr('class', 'breadcrumb bg-info text-capitalize');

        ['name', 'weight', 'reps', 'sets'].forEach((k) => {
          const li = $('<li>');
          li.attr('class', 'breadcrumb-item active');

          li.text(k + ': ' + ex[k]);
          ol.append(li);
        });
        
        const btn = $('<button>');
        btn.attr('class', 'btn btn-sm btn-secondary ml-5');
        
        btn.text( 'delete' );
        $(ol).append(btn);
        $('#workout_div').append(ol);
              
        btn.on('click', async function delete_btn_handler() {
          console.log('delete btn handler');

          const del_resp = await fetch('/api/work/delete/' + workout._id, {
            method: 'PUT',
            body: JSON.stringify({ name: ex.name }),
            headers: {
              'Content-Type': 'application/json',
            },
          } ).catch( ( e ) => console.log( e ) );
          if (del_resp.ok) {
            render_latest();
          }
        });
      } );
    });
  } else {
    console.log('error :>> ', response.errorCode);
  }
};
render_latest();
