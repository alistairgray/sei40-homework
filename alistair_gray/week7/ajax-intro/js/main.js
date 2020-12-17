// console.log('Hello AJAX!', $);

// AJAX - Asynchronous Javascript And XML
// JSON - JS Object Notation
$(document).ready(function(){


    $('#getTrivia').on('click', function(){
      const searchNum = $('#searchNumber').val();
    console.log('button clicked!', searchNum);
    const xhr = new XMLHttpRequest(); // make a new instance

    // xhr.onreadystatechange = function(){
    //   console.log('ready state changed:', xhr.readystate);
    //   if(xhr.readyState === 4) {
    //     console.log('response:', xhr.response);
    //   }
    // }; // onreadystatechange

    xhr.onload = function(){
      // console.log('response loaded:', xhr.response);

      // Take the JSON stirng in our response and parse it into an actual
      // js data sstructure whose keys we can access
      const data = JSON.parse(xhr.response)
      console.log('data:', data, data.number);
      const $trivia = $(`<h1>${data.number}</h1><p>${data.text}</p>`);
      $('#results').append($trivia).empty() // adds to the DOM
    }; // onload

    xhr.open('GET', `http://numbersapi.com/${searchNum}/trivia?json`);
    xhr.send();
  }); // onclick

  // console.log('response', xhr.response);
}); // document ready
