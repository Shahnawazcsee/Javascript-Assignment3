// Sample array of expense objects
const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 200, category: 'Transport' },
    { amount: 150, category: 'Groceries' },
    { amount: 50, category: 'Entertainment' },
    { amount: 80, category: 'Groceries' }
];

// Using reduce to calculate the total amount of all expenses
const totalAmount = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.amount; // Add the current expense amount to the accumulator
}, 0); // Initial value of the accumulator is set to 0

// Output the total amount
console.log(totalAmount);
