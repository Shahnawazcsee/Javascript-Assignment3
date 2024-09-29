// Sample array of expense objects
const expenses = [
    { amount: 100, category: 'utilities' },
    { amount: 200, category: 'groceries'},
    { amount: 50, category: 'Entertainment' }
];

// Tax rate
const taxRate = 0.10;

// Using map to create a new array with calculated tax
const expensesWithTax = expenses.map(expense => {
    const tax = expense.amount * taxRate; // Calculate the tax
    return {
        ...expense,        // Spread the original expense object
        tax: tax          // Add the tax property
    };
});

// Output the new array
console.log(expensesWithTax);
