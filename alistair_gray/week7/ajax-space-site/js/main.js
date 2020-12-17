console.log('Rocket Ignition Ready!');

$(document).ready(function(){

  $('#doSearch').on('click', function(){

    $('#details').hide();
    $('#results').show().empty();

    const searchText = $('#searchSpace').val();
    // console.log('button clicked, you searched for:', searchText);

    $.getJSON(`https://images-api.nasa.gov/search?q=${searchText}`)
      .done(function(response){
        console.log('response', response);

        for (let i=0; i < response.collection.items.length; i++){
          const spaceElement = response.collection.items[i].data[0];
          const spaceImage   = response.collection.items[i].links[0].href;
          const elementDetails = response.collection.items[i].href;
          // console.log(spaceElement);
          const $spaceResult = $(`
            <h3 space_id="${spaceElement.nasa_id}">${spaceElement.title}</h3>
            <hr>
            <img class="thumb" src="${spaceImage}">
            <hr>
            `);

          $('#results').append($spaceResult)
        } // for loop

      })
      .fail(console.warn) // getJSON search text from NASA image library

  }); // doSearch click handler

  // H3 Click Handler => Show Page
  $(document).on('click', 'h3', function(){
    $('#results').hide()
    console.log('h3 clicked!');
    // $('#results').hide();
    const spaceID = $(this).attr('space_id');
    const url = `https://images-assets.nasa.gov/image/${spaceID}/metadata.json`;
    //
    $.getJSON(url)
    .done(function(response){
      console.log('element details:', response);
      console.log(response["AVAIL:Title"]);
      const $details = $(`
      <button id="goBack">&lt;&lt; Back</button>
      <h2>${response["AVAIL:Title"]}</h2>
      <p>${response["AVAIL:Description"]}</p>
      <hr>

      `)
      $('#details').html($details).show()
    }) // done
    .fail(console.warn)
  }); // click h3

  $(document).on('click', '#goBack', function(){
    $('#details').hide();
    $('#results').show();
  })

}); // document ready
