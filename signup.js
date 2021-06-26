var button = document.querySelectorAll('input')[5];
var paragraph = document.querySelectorAll('p')[0];


button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Register') {
    button.disabled=true;
    paragraph.innerHTML = "You have registered Succesfully  ";

  } 
  else {
    button.value = 'Register';
    // paragraph.innerHTML = 'click the above button to submit';
  }
}
