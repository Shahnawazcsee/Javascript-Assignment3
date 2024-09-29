// Function to generate and print a random number every 2 seconds
function printRandomNumbers() {
    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 5); // Generate a random number between 0 and 99
        console.log(`Random Number: ${randomNumber}`);
    }, 2000); // 2000 milliseconds = 2 seconds
}

// Start printing random numbers
printRandomNumbers();
