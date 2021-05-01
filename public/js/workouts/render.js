const render_latest = async () => {
  const response = await fetch( '/api/work/latest', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  } ).catch( ( e ) => console.log( e ) );

  if ( response.ok ) {
    $( '#workout_div' ).empty();

    const json = await response.json();

    json.forEach( ( workout ) => {
      // console.log( 'json._id :>> ', workout._id );

      const workout_id = $( '#latest_workout_id' )
        .attr( 'data-id', workout._id )
        .text( workout._id );

      let ex_index =0;
      workout.exercises.forEach( ( ex ) => {
        ex_index ++;
        let ol = null;
        const icons = {
          resistance: 'dumbbell',
          cardio: 'bicycle',
        };

        const styles = {
          resistance: 'primary',
          cardio: 'secondary',
        };
        const anime = {
          0: 'animated fadeInLeft',
          1: 'animated fadeInRight',
        };
        const displayed = {
          resistance: ['name', 'weight', 'reps', 'sets'],
          cardio: ['name', 'duration', 'distance', ],
        };
        
        ol = $( '<ol>' );
          ol.attr(
            'class',
            `mx-5 breadcrumb bg-${styles[ex.type]} ${
              anime[ex_index % 2]
            } text-capitalize align-items-center shadow-lg py-0`
          );
          const icon_li = $( '<li>' );
        const icon = $( '<h1>' );

          icon_li.attr('class', 'breadcrumb-item active');
          icon.attr('class', 'text-light fas fa-' + icons[ex.type]);
          icon_li.append(icon);
          ol.append(icon_li);
          
          displayed[ex.type].forEach( ( k ) => {
            const li = $( '<li>' );
            li.attr( 'class', 'breadcrumb-item active' );

            li.text( k + ': ' + ex[ k ] );
            ol.append( li );
          } );

          const btn_li = $('<li>');
          const btn = $( '<button>' );
        btn.attr( 'class', 'btn btn-outline-light border-0 ml-5' );

        btn.html( '<h5 class="fas fa-times-circle text-light">  </h5>' );
        $( ol ).append( btn );
        $( '#workout_div' ).append( ol );

        btn.on( 'click', async function delete_btn_handler() {
          console.log( 'delete btn handler' );

          const del_resp = await fetch( '/api/work/delete/' + workout._id, {
            method: 'PUT',
            body: JSON.stringify( {
              name: ex.name
            } ),
            headers: {
              'Content-Type': 'application/json',
            },
          } ).catch( ( e ) => console.log( e ) );
          if ( del_resp.ok ) {
            render_latest();
          }
        } );
      } );
    } );
  } else {
    console.log( 'error :>> ', response.errorCode );
  }
};
render_latest();
