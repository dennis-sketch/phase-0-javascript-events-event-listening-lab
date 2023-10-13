

function addingEventListener() {
  // Grab the element with id 'input'
  const input = document.getElementById('input');

  // Define a callback function
  function clickAlert() {
    alert('I was clicked!');
  }

  // Add an event listener for the click event
  input.addEventListener('click', clickAlert);
}

// Call the function to set up the event listener
addingEventListener();
