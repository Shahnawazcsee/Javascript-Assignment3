// Original array of numbers
const originalNumbers = [2, 5, 8, 10, 3];

// New array to store even numbers
const evenNumbers = [];

// Using forEach to collect even numbers
originalNumbers.forEach(number => {
    if (number % 2 === 0) { // Check if the number is even
        evenNumbers.push(number); // Add even number to the new array
    }
});

// Output the array of even numbers
console.log(evenNumbers);
