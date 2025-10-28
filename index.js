// Array Manipulation Lab - Task 1 & 2: Array Manipulation Basics and Filter/Search

// empty array
let shoppingList = [];

// Function to add an item to the shoppingList array (Task 2: Modified to prevent duplicates)
function addItem(item) {
  // Check if item already exists in the array (case-insensitive)
  const itemExists = shoppingList.some(
    (existingItem) => existingItem.toLowerCase() === item.toLowerCase()
  );

  if (itemExists) {
    console.log(`"${item}" is already in the shopping list. Item not added.`);
    return false;
  } else {
    shoppingList.push(item);
    console.log(`Added "${item}" to the shopping list.`);
    return true;
  }
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

// Task 2: Function to filter items based on search term (case-insensitive)
function filterItems(searchTerm) {
  if (!searchTerm) {
    console.log("Please provide a search term.");
    return [];
  }

  const filteredItems = shoppingList.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredItems.length === 0) {
    console.log(`No items found containing "${searchTerm}".`);
  } else {
    console.log(`Items containing "${searchTerm}":`);
    filteredItems.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }

  return filteredItems;
}

// Example usage (you can test these functions in the browser console)
console.log("Array Manipulation Lab - Shopping List Functions");
console.log(
  "Available functions: addItem(item), removeLastItem(), displayList(), filterItems(searchTerm)"
);
console.log("Example usage:");
console.log("addItem('Apples')");
console.log("addItem('Bread')");
console.log("addItem('Apple Juice')");
console.log("addItem('apples')"); // This should not be added (duplicate)
console.log("displayList()");
console.log("filterItems('apple')"); // Should find items containing 'apple'
console.log("removeLastItem()");
console.log("displayList()");
