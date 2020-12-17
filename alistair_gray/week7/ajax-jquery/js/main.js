console.log('Main JS Loaded!');

$(document).ready(function(){

  // $.ajax({
  //   url: 'http://numbersapi.com/random/trivia?json',
  //   dataType: 'json', // it will usually work this out
  // })
  $.getJSON('http://numbersapi.com/random/trivia?json')
  .done(function(response){
    // When the response is fully received
    // jQuery runs this .done callback function for us,
    // amd it provides the response data as the first argument
    // to this callback function
    console.log('response', response);
  }) // .done
  .fail(function(err){
    console.warn(err.status, err.statusText);
  }) // .fail
  .always(function(data, status){
    console.log('always!', data, status);
  });


}); // document ready
