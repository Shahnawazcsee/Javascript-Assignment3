// Sample array of expense objects
let expenses = [
    { amount: 100, category: 'utilities' },
    { amount: 50, category: 'Groceries' },
    { amount: 150, category: 'Entertainment' }
];

// Function to categorize expenses
function categorizeExpense(amount) {
    return amount > 100 ? "High Expense" : "Low Expense"; // Return based on amount
}

// Using map to create a new array with categorized expenses
const categorizedExpenses = expenses.map(expense => categorizeExpense(expense.amount));

// Output the categorizedExpenses array
console.log(categorizedExpenses);
