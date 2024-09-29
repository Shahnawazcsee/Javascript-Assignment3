// Sample array of expense objects
const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 200, category: 'Transport' },
    { amount: 150, category: 'Groceries' },
    { amount: 50, category: 'Entertainment' },
    { amount: 80, category: 'Groceries' }
];

// Using filter to create a new array with only "Groceries" expenses
const groceriesExpenses = expenses.filter(expense => expense.category === 'Groceries');

// Output the new array
console.log(groceriesExpenses);
