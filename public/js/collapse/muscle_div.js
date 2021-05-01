let collapse_muscle_collapsed = false;
$( '#collapse_muscle_button' )
  .on( "click", () => {
    if ( collapse_muscle_collapsed ) {
      collapse_muscle_collapsed = false;
      $( "#collapse_muscle_icon" ).removeClass( "fa-chevron-up" );
      $( "#collapse_muscle_icon" ).addClass( "fa-chevron-down" );
    } else {
      collapse_muscle_collapsed = true;
      $( "#collapse_muscle_icon" ).removeClass( "fa-chevron-down" );
      $( "#collapse_muscle_icon" ).addClass( "fa-chevron-up" );
    }


  } );
