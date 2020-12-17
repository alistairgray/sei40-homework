$(document).ready(function(){

  $('#getMovie').on('click', function(){

    const searchMovie = $('#searchMovie').val();

    // console.log('Button Clicked!');

    const xhr = new XMLHttpRequest();
    xhr.onload = function(){

      const data = JSON.parse(xhr.response);
      console.log('Data:', data, data.results[0].title); // loop required!
      for(let i=0; i < data.results.length; i++){
        // console.log(i);
        const $results = $(`
          <img src="http://image.tmdb.org/t/p/w92/${data.results[i].poster_path}" alt="${data.results[i].title}">

          <a class="detailsLink" href="">
          <h2>${data.results[i].title}</h2></a>

          <p>${data.results[i].overview}</p><hr>`);

        $('#results').append($results);
        $('#getMovie').on('click', function(){
          $('#results').empty() // add to after onload
        }); // replaces existing results on click

        $('.detailsLink').on('click', function(ev){
          ev.preventDefault();
          $('#results').empty();
          const detailsXHR = new XMLHttpRequest(); // on click of the a tag, which is a class, it clears page and performs new request

          xhr.open('GET', `https://api.themoviedb.org/3/movie/${data.results[i].id}?api_key=24d863d54c86392e6e1df55b9a328755`);
          xhr.send(); // Opens a request for the details page from the movie in the loop

          detailsXHR.onload = function(){
            const detailsData = JSON.parse(detailsXHR.response);
            console.log(`Data: ${detailsData}`);
            $('#results').append(detailsData); // interprets the data and appends the result to the div

          } // detailsXHR onload
        }); // accesses the a tag's link and replaces existing results on click
      } // for loop
      // const $results = $(`<h1>${data.title}</h1>`);
      // $('#results').empty().append($results)
    }; // onload

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${searchMovie}`);
    xhr.send();

  }); // on click, search and print results in DOM

}); // document ready
