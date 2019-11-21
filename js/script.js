function init() {


	var message = document.getElementById("entryinput");
	var button = document.getElementById("entrybutton");
	var showresults = document.getElementById('textoutput');

  button.addEventListener('click', function() {
    window.alert('Colin Brennan: ' + text.value);
  });

  button.addEventListener('click', function() {
    showresults.innerHTML = text.value;
    });
}

window.addEventListener('load', init);