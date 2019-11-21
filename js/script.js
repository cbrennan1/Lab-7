function init(){

var text = document.getElementById('entryinput');
var results = document.getElementById('textoutput');
var button = document.getElementById('entrybutton');

button.addEventListener('click', function(){
  alert('Colin Brennan: ' + text.value);
});

button.addEventListener('click', function(){
  results.innerHTML = text.value;
});


}
window.addEventListener('load', init);