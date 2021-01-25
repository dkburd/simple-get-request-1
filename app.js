let numberDogs=$('#number')
let number

$('#number').bind('change', function() {
  number= numberDogs.val();
});

function getDogImages() {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)

    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});