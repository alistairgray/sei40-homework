console.log('Main JS Loaded!');

$(document).ready(function(){
  $('#doSearch').on('click', function(){

    $('#details').hide();
    $('#results').show().empty();

    const searchText = $('#searchText').val();
    console.log('button clicked!, searchText:', searchText);

    $.getJSON(`https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${searchText}`)
    .done(function(response){
      console.log('response', response);
      // When we get the results, they need to be shown on the DOM using the done function

      for (let i = 0; i < response.results.length; i++) {
        const movie = response.results[i];
        const movieDate = movie.release_date.split('-')
        // console.log(movie.title);
        const $movieResult = $(`
          <h3 movie_id="${movie.id}">${i+1}. ${movie.title} (${movieDate[0]})</h3>
          <p>${movie.overview}</p>
          <img src="https://image.tmdb.org/t/p/w92/${movie.poster_path}" alt="${movie.title}">
          <hr>
        `);

        $('#results').append($movieResult)
      } // for loop
    }) // .done
    .fail(function(err){
      console.warn(err.status, err.statusText);
    }) // .fail
    .always(function(data, status){
      console.log('always!', data, status);
    }); // .always
  }); // search button click

  // When a user clicks on a movie title, this code will run
  // Use the event delegation pattern to handle clicks on h3 tags no matter when they are added to the page

  $(document).on('click', 'h3', function(){
    $('#results').hide();
    console.log('H3 was clicked!');

    const movieID = $(this).attr('movie_id');
    const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=24d863d54c86392e6e1df55b9a328755`;

    $.getJSON(url)
    .done(function(response){
      console.log('movie details:', response);
      const $details = $(`
        <button id="goBack">&lt;&lt; Back</button>
        <h1>${response.title}</h1>
        <h4>${response.tagline}</h4>
        <p>${response.overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${response.poster_path}">
        `);

        $('#details').html($details).show();
    }) // done
    .fail(console.warn);


  }); // click h3

  $(document).on('click', '#goBack', function(){
    $('#details').hide();
    $('#results').show();
  })


}); // document ready
