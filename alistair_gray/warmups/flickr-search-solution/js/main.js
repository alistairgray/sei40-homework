// https://www.flickr.com/services/rest/?method=flickr.photos.search&text=ocean%20coral&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';


$(document).ready(function(){
  console.log('Flickr Search Ready...');

  $('#searchText').focus(); // focuses the cursor in the search text field

  $('#searchForm').on('submit', function(ev){
    ev.preventDefault();
    console.log('Form was submitted');

    // Get the search text from the form
    const searchText = $('#searchText').val();

    // Do the AJAX request to search for this text
    getSearchResults(searchText);


  }); // form submit handler
}); // document ready

// This function performs the AJAX request
const getSearchResults = (searchText) => {
  console.log('getSearchResults:', searchText);

  $.getJSON(FLICKR_BASE_URL, {
    api_key: FLICKR_API_KEY,
    method: 'flickr.photos.search',
    text: searchText,
    format: 'json',
    nojsoncallback: 1
  })
  .done(data => displaySearchResults(data.photos))
  .fail(console.warn);

}; // getSearchResults()

const displaySearchResults = (results) => {
  console.log('displaySearchResults():', results);

  // Loop through the image results:
  results.photo.forEach(photo => {
    // console.log('photo', photo);
    const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`

    const $img = $(`<img src="${url}">`)
    $('#results').append($img);
  }); // loop


}; //displaySearchResults()
