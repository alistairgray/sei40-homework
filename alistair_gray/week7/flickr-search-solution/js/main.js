// https://www.flickr.com/services/rest/?method=flickr.photos.search&text=ocean%20coral&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1

const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';

let currentSearchText = '';
let currentResultsPage = 1;


$(document).ready(function(){
  console.log('Flickr Search Ready...');

  $('#searchText').focus(); // focuses the cursor in the search text field

  $('#searchForm').on('submit', function(ev){
    ev.preventDefault();
    console.log('Form was submitted');

    // Get the search text from the form
    currentSearchText = $('#searchText').val();
    currentResultsPage = 1; // resets for this new search

    // Do the AJAX request to search for this text
    getSearchResults(currentSearchText);

  }); // form submit handler

  // Stops link from loading new page
  $('#nextPage').on('click', (ev) => {
    ev.preventDefault();
    console.log('next link clicked');
    currentResultsPage++; // next page
    getSearchResults(currentSearchText, currentResultsPage)
  }); // end of next page click handler

  $('#prevPage').on('click', (ev) => {
    ev.preventDefault();
    console.log('prev link clicked');
    currentResultsPage--; // prev page
    getSearchResults(currentSearchText, currentResultsPage)
  }); // end of prev page click handler

  // Event delegation: test the selector for this click handler
  // at click time, not when the page loads as there aren't images displayed
  $(document).on('click', '#results img', function(){
    console.log('img clicked');
    const photoID = $(this).attr('photo-id');
    console.log('clicked photo ID', photoID);
    getPhotoDetails(photoID);
  });

  $('#details').on('click', function(){
    $(this).fadeOut();
  });

}); // document ready

// This function performs the AJAX request
const getSearchResults = (searchText, pageToLoad=1) => {
  console.log('getSearchResults:', searchText);

  $('#results')
  .empty()
  .append('<p>Loading Results...</p>')
  // removes the old results and gives a loading string

  $.getJSON(FLICKR_BASE_URL, {
    api_key: FLICKR_API_KEY,
    method: 'flickr.photos.search',
    text: searchText,
    format: 'json',
    nojsoncallback: 1,
    page: pageToLoad
  })
  .done(displaySearchResults)
  .fail(console.warn);

}; // getSearchResults()

const displaySearchResults = (results) => {

  if (results.photos.page === 1) {
    $('#prevPage').hide();
  } else {
    $('#prevPage').show();
  } // conditional - hide / show previous page

  $('#pagination').show();
  $('#results').empty()
  $('#currentPage').html(results.photos.page)
  $('#totalPage').html(results.photos.pages)


  console.log('displaySearchResults():', results);

  // Loop through the image results:
  results.photos.photo.forEach(photo => {
    // console.log('photo', photo);
    const url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`

    const $img = $(`<img photo-id="${photo.id}" src="${url}">`)
    $('#results').append($img);
  }); // loop

}; //displaySearchResults()

const getPhotoDetails = (id) => {
  console.log('getPhotoDetails', id);

  $.getJSON(FLICKR_BASE_URL, {
  api_key: FLICKR_API_KEY,
  method: 'flickr.photos.getinfo',
  photo_id: id,
  format: 'json',
  nojsoncallback: 1
}) // getJSON()
  .done((data) => {
    console.log('response', data);
    const url = `https://live.staticflickr.com/${data.photo.server}/${data.photo.id}_${data.photo.secret}_c.jpg`

    $('#title').html(`${data.photo.title._content}
      <br>
      ${data.photo.description._content}
      `)

    $('#details')
    .css({background: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  })
    .fadeIn();
  })
  .fail(console.warn);
} // get getPhotoDetails()
