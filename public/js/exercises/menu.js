const clear_gallery = () => {
  $( '#gallery' ).empty();
};


$('.fetch_btns').each(function (index, element) {
  $(this).on('click', async (event) => {
    event.preventDefault();

    console.log(event.target.dataset['category']);
    const cat = event.target.dataset['category'].toLowerCase();
    const response = await fetch('/api/ex/' + cat, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).catch(e=>console.log(e));

    if ( response.ok )
    {
      
      console.log('resp OK');

      const json = await response.json();
      console.log('json :>> ', json);

      $('#gallery').empty();
      json.forEach((ex) => {
        

        const col = $( '<div>' );
        col.attr('class', 'col-4');

        $('#gallery').append(col);
        const icon = $('<i>');
        icon.attr('class', 'fas fa-tags mr-2').text(' ' + ex.unq_id);

        
        const p = $('<p>');
        p.attr('class', 'text-muted mb-1 mt-2');
        const span = $( '<span>' );
        span.text(
          'muscles: ' +
            ex.muscles +
            ', diff level: ' +
            ex.difficulty +
            ', area: ' +
            ex.area +
            ', split: ' +
            ex.split +
            ', equipment: ' +
            ex.mod
        );
        p.append(icon);
        p.append(span);
        col.append(p);
                
        const form = $('<form>');
        form.attr( 'id', 'form_'+ex.unq_id);
        form.attr( 'class', 'ex_form' );
        form.submit(ex_submit_handler);

        col.append(form);
        

        const name_in = $( '<input>' );
        name_in
          .attr(
            'class',
            'form-control-plaintext text-lg text-primary text-center m-1 border-primary'
          )
          .attr('readonly', true)
          .attr('type', 'text')
          .attr('value', ex.name)
          .attr( 'name', 'name' )
          .attr( 'id', 'name_'+ex.unq_id )
          ;

        form.append(name_in);


        const type_in = $('<select>');
        type_in.attr( 'class', 'custom-select form-control-dark' )
          .attr('name', 'type');
        const opt = $('<option>');
        opt.text('resistance');

        opt.attr('value', 'resistance').attr('selected', true).attr('id','type_'+ex.unq_id);
        type_in.append(opt);
        form.append(type_in);
        
          
        const set_in = $('<input>');
        set_in
          .attr('class', 'form-control form-control-sm form-control-dark')
          .attr('type', 'number')
          .attr('value', '4')
          .attr('id', 'sets_' + ex.unq_id);

        const label_set = $('<label>');
        label_set.attr('for', 'set');
        label_set.text('Sets');
        form.append(label_set);
        form.append(set_in);

        const reps_in = $('<input>');

        reps_in
          .attr('class', 'form-control form-control-sm form-control-dark')
          .attr('type', 'number')
          .attr('value', '8')
          .attr('id', 'reps_'+ex.unq_id)
          ;

        const label_rep = $('<label>');
        label_rep.attr('for', 'reps');
        label_rep.text('Reps');
        form.append(label_rep);
        form.append(reps_in);

        const weight_in = $('<input>');

        weight_in
          .attr('class', 'form-control form-control-sm form-control-dark')
          .attr('type', 'number')
          .attr('value', '0')
          .attr('id', 'weight_' + ex.unq_id);

        const label_weight = $('<label>');
        label_weight.attr('for', 'weight');
        label_weight.text('Weight');
        form.append(label_weight);
        form.append(weight_in);

        const submit = $('<input>');
        submit.attr('class', 'btn btn-block btn-outline-info mt-1 mb-2');
        submit.attr('type', 'submit');
        submit.attr('value', 'Add to Workout');
        form.append(submit);
      });
    }
    document
      .querySelector('.ex_form')
      .addEventListener('submit', () => console.log('test'));
  } );
});

const ex_submit_handler = async (event) => {
  event.preventDefault();
  console.log( 'event.target.id :>> ', event.target.id.split( '_' )[ 1 ] );
  const form_id = event.target.id.split( '_' )[ 1 ];
  const id = document.getElementById( 'latest_workout_id' ).dataset[ 'id' ];
  console.log( 'id :>> ', id );
  const put_data = {
    type: $('#type_' + form_id).val(),
    name: $('#name_' + form_id).val(),
    duration: 10,
    weight: $('#weight_' + form_id).val(),
    reps: $('#reps_' + form_id).val(),
    sets: $('#sets_' + form_id).val(),
  };
  // console.log('put_data :>> ', put_data);
  const response = await fetch( '/api/work/' + id, {
    method: 'PUT',
    body: JSON.stringify(put_data),
    headers: { 'Content-Type': 'application/json' },
    
  } ).catch( e => console.log( e ) )
  if ( response.ok )
  {
    render_latest();
  }
};
    
