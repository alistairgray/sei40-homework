$(document).ready(function(){

  console.log('main.js loaded!');

  $.getJSON('/uptime')
  .done(function(response){
    console.log('/uptime response:', response);
    $('#uptime').html(response.output)
  })
  .fail(console.warn)

  $.getJSON('/cpuhog')
  .done(function(response){
    console.log('/cpuhog response', response);
    $('#hog').html(response.cpuHog)
  })
  .fail(console.warn)

  $.getJSON('/dogs')
  .done(function(response){
    console.log('dogs reponse', response);
    for (let i = 0; i < response.length; i++) {
      const currentDog = response[i];
      const $dog = $(`<li>${currentDog.name}, Roundness (${currentDog.roundness})</li>`);
      $('#dogs').append($dog);
    } // for loop
  })
  .fail(console.warn)

}); //document ready
