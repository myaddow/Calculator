function appendToDisplay(value){ // Function to append a value to the display
    document.getElementById('display').value += value; // Append the value to the current display content
}
function clearDisplay(value){ // Function to clear the display
    document.getElementById('display').value = ''; // Clear the display content
}
function calculateResult(value){ // Function to calculate the result of the expression in the display
    document.getElementById('display').value = eval(document.getElementById('display').value); // Evaluate the expression in the display and update it with the result
}