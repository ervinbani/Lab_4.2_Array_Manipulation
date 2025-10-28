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

// Task 3: DOM Manipulation Functions for Browser Interface

// Function to update the displayed list in the browser
function updateDisplayedList() {
  const listDisplay = document.getElementById("shoppingListDisplay");

  if (shoppingList.length === 0) {
    listDisplay.innerHTML =
      '<div class="empty-message">Your shopping list is empty. Add some items above!</div>';
  } else {
    const listHTML =
      "<ul>" +
      shoppingList
        .map((item, index) => `<li>${index + 1}. ${item}</li>`)
        .join("") +
      "</ul>";
    listDisplay.innerHTML = listHTML;
  }
}

// Function to show messages to the user
function showMessage(message, type = "info") {
  const messageArea = document.getElementById("messageArea");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}`;
  messageDiv.textContent = message;

  // Clear previous messages
  messageArea.innerHTML = "";
  messageArea.appendChild(messageDiv);

  // Auto-remove message after 3 seconds
  setTimeout(() => {
    if (messageArea.contains(messageDiv)) {
      messageArea.removeChild(messageDiv);
    }
  }, 3000);
}

// Task 3: Function to add item from input field and update display
function addItemToList() {
  const itemInput = document.getElementById("itemInput");
  const item = itemInput.value.trim();

  if (item === "") {
    showMessage("Please enter an item name.", "error");
    return;
  }

  const wasAdded = addItem(item);

  if (wasAdded) {
    showMessage(`Added "${item}" to your shopping list!`, "success");
    updateDisplayedList();
    itemInput.value = ""; // Clear the input field
  } else {
    showMessage(`"${item}" is already in your shopping list.`, "error");
  }
}

// Task 3: Function to remove last item and update display
function removeLastItemFromList() {
  const removedItem = removeLastItem();

  if (removedItem) {
    showMessage(`Removed "${removedItem}" from your shopping list.`, "info");
    updateDisplayedList();
  } else {
    showMessage("Your shopping list is empty. Nothing to remove.", "error");
  }
}

// Task 3: Function to search and display filtered results
function searchItems() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value.trim();

  if (searchTerm === "") {
    showMessage("Please enter a search term.", "error");
    return;
  }

  const filteredItems = filterItems(searchTerm);
  const listDisplay = document.getElementById("shoppingListDisplay");

  if (filteredItems.length === 0) {
    showMessage(`No items found containing "${searchTerm}".`, "info");
    // Show the full list again
    updateDisplayedList();
  } else {
    // Display filtered results
    const listHTML =
      "<ul>" +
      filteredItems
        .map((item, index) => `<li>${index + 1}. ${item}</li>`)
        .join("") +
      "</ul>";
    listDisplay.innerHTML =
      `<h3>Search Results for "${searchTerm}":</h3>` + listHTML;

    showMessage(
      `Found ${filteredItems.length} item(s) containing "${searchTerm}".`,
      "success"
    );

    // Clear search and show full list again after 5 seconds
    setTimeout(() => {
      updateDisplayedList();
      searchInput.value = "";
    }, 5000);
  }
}

// Task 3: Add keyboard event listeners for Enter key
document.addEventListener("DOMContentLoaded", function () {
  const itemInput = document.getElementById("itemInput");
  const searchInput = document.getElementById("searchInput");

  // Allow Enter key to add items
  itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addItemToList();
    }
  });

  // Allow Enter key to search
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchItems();
    }
  });

  // Initialize the display
  updateDisplayedList();
});

// Example usage (you can test these functions in the browser console)
console.log("Array Manipulation Lab - Shopping List Functions");
console.log(
  "Available functions: addItem(item), removeLastItem(), displayList(), filterItems(searchTerm)"
);
console.log(
  "Browser functions: addItemToList(), removeLastItemFromList(), searchItems()"
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
