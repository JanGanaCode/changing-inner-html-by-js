const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myNameInput = document.getElementById('myNameInput');
const myAgeInput = document.getElementById('myAgeInput');

myButton.addEventListener('click', function(){
  myHeading.innerHTML = "Your name is " + myNameInput.value + " and you are " + myAgeInput.value + " years old.";
});


