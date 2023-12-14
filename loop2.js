// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.
function printArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  let array2 = ['apple', 'banana', 'orange', 'grape'];
  printArrayValues(array2);