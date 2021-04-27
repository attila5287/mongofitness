console.log('test menu');
$('.fetch_btns').each(function (index, element) {
  $( this ).on( 'click', function () {
    console.log( 'CLICKED' );
    
  });
});
