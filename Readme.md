# Lab 4.2: Array Manipulation

## Overview

This lab focuses on building efficient functionality to handle large sets of data in the form of arrays. You'll practice manipulating arrays with JavaScript methods and writing code that dynamically handles user interactions.

## Learning Objectives

By the end of this activity, you will have demonstrated your ability to:

- Use array methods such as `push()`, `pop()`, `shift()`, and `unshift()` to manipulate arrays
- Filter and transform arrays using JavaScript array methods
- Dynamically display the contents of arrays on a webpage
- Write clean, maintainable JavaScript code to handle array operations

## Task 1: Array Manipulation Basics

### Requirements

1. Create an empty array called `shoppingList`
2. Write a function called `addItem` that takes an item as a parameter and adds it to the `shoppingList` array
3. Write a function called `removeLastItem` that removes the last item from the `shoppingList` array
4. Write a function called `displayList` that logs all items in the `shoppingList` array to the console

### How to Test

1. Open `index.html` in a web browser
2. Open the browser's Developer Console (F12)
3. Use the functions interactively:

```javascript
// Add items to the list
addItem("Apples");
addItem("Bread");
addItem("Milk");

// Display current list
displayList();

// Remove the last item
removeLastItem();

// Display updated list
displayList();
```

### Key Features

- **Error Prevention**: Functions handle edge cases (empty arrays)
- **User Feedback**: All operations provide console feedback
- **Clean Display**: Items are shown in a readable numbered format
- **Maintainable Code**: Functions are well-documented and follow best practices

## Task 2: Filter and Search an Array

### Requirements

1. Modify the `addItem` function to only add the item if it is not already in the `shoppingList` array
2. Write a function called `filterItems` that takes a search term as a parameter and returns all items in the `shoppingList` that contain that search term (case-insensitive)

### Implementation

#### Modified `addItem(item)`

- **Enhancement**: Now prevents duplicate items from being added
- **Duplicate Check**: Uses `some()` method with case-insensitive comparison
- **Method Used**: `some()` - Tests whether at least one element passes the test
- **Return Value**: `true` if item was added, `false` if duplicate was rejected
- **Feedback**: Different messages for successful addition vs. duplicate rejection

#### `filterItems(searchTerm)`

- **Purpose**: Searches for and returns items containing the search term
- **Parameters**: `searchTerm` (string) - The text to search for within items
- **Method Used**: `filter()` - Creates new array with elements that pass the test
- **Case Sensitivity**: Performs case-insensitive search using `toLowerCase()`
- **Return Value**: Array of matching items
- **Display**: Shows numbered list of found items
- **Empty Handling**: Shows message when no matches are found

### How to Test Task 2

// Test duplicate prevention
addItem("Apples");
addItem("Bread");
addItem("Apple Juice");
addItem("apples"); // Should be rejected as duplicate
addItem("APPLES"); // Should be rejected as duplicate

// Display current list
displayList();

// Test filtering functionality
filterItems("apple"); // Should find 'Apples' and 'Apple Juice'
filterItems("bread"); // Should find 'Bread'
filterItems("milk"); // Should show no matches
filterItems("APP"); // Should find items containing 'app' (case-insensitive)
