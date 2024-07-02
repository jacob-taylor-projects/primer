export function calculateTotal (items, tax) {
  // TODO
  tax = Math.abs(tax);

    // Initialize total cost to 0
    let totalCost = 0;

    // Iterate over each item in the items array
    for (let item of items) {
        // If the item is taxable, add the price plus the tax to the total cost
        if (item.taxable) {
            totalCost += item.price * (1 + tax);
        } 
        // If the item is not taxable, just add the price to the total cost
        else {
            totalCost += item.price;
        }
    }

    // Return the total cost
    return totalCost;
}
