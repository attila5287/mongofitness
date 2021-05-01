
let collapse_calorie_collapsed = false;
$( '#collapse_calorie_button' )
  .on( "click", () => {
    if ( collapse_calorie_collapsed ) {
      collapse_calorie_collapsed = false;
      $( "#collapse_calorie_icon" ).removeClass( "fa-chevron-up" );
      $( "#collapse_calorie_icon" ).addClass( "fa-chevron-down" );
    } else {
      collapse_calorie_collapsed = true;
      $( "#collapse_calorie_icon" ).removeClass( "fa-chevron-down" );
      $( "#collapse_calorie_icon" ).addClass( "fa-chevron-up" );
    }


  } );
