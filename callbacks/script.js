// Function to add an event listener to a button
function addButtonClick(callback) {
    const button = document.getElementById('myButton');
    button.addEventListener('click', callback);
  }
  // Callback function
  function handleClick(event) {
    alert('Clicked!');
  }
  addButtonClick(handleClick);