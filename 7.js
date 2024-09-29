// Original array of numbers
let originalNumbers = [2, 5, 8, 10, 3];

// Using forEach to double each number in the array
originalNumbers.forEach((value, index, array) => {
    array[index] = value * 2; // Double the value and assign it back to the same index
});

// Output the modified array
console.log(originalNumbers);
