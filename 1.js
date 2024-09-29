// Function to calculate total price of an order
function calculateTotalPrice(items) {
    let total = 0;
    
    items.forEach(item => {
        total += item.price;
    });
    
    return total;
}

// Example usage
const orderItems = [
    { name: "laptop", price: 120000},
    { name: "moblile", price: 70000 },
    { name: "mobile charger", price: 1500 },
    { name: "laptop charger", price: 10500}
];

const totalPrice = calculateTotalPrice(orderItems);
console.log(`Total Price of the Order: ${totalPrice.toFixed(2)}`); 
