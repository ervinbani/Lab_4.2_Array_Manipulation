// Array Manipulation Lab - Task 1: Array Manipulation Basics

// empty array
let shoppingList = [];

// Function to add an item to the shoppingList array
function addItem(item) {
    shoppingList.push(item);
    console.log(`Added "${item}" to the shopping list.`);
}

// Function to remove the last item from the shoppingList array
function removeLastItem() {
    if (shoppingList.length === 0) {
        console.log("Shopping list is empty. Nothing to remove.");
        return null;
    }
    
    const removedItem = shoppingList.pop();
    console.log(`Removed "${removedItem}" from the shopping list.`);
    return removedItem;
}

// Function to display all items in the shoppingList array
function displayList() {
    if (shoppingList.length === 0) {
        console.log("Shopping list is empty.");
    } else {
        console.log("Current shopping list:");
        shoppingList.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

// Example usage (you can test these functions in the browser console)
console.log("Array Manipulation Lab - Shopping List Functions");
console.log("Available functions: addItem(item), removeLastItem(), displayList()");
console.log("Example usage:");
console.log("addItem('Apples')");
console.log("addItem('Bread')");
console.log("displayList()");
console.log("removeLastItem()");
console.log("displayList()");