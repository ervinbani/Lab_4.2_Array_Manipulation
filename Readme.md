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

### Implementation

The implementation includes the following functions:

#### `addItem(item)`

- **Purpose**: Adds a new item to the end of the shopping list
- **Parameters**: `item` (string) - The item to add to the list
- **Method Used**: `push()` - Adds element to the end of array
- **Feedback**: Logs confirmation message when item is added

#### `removeLastItem()`

- **Purpose**: Removes and returns the last item from the shopping list
- **Parameters**: None
- **Method Used**: `pop()` - Removes and returns the last element
- **Error Handling**: Checks if array is empty before removing
- **Return Value**: The removed item, or `null` if list is empty
- **Feedback**: Logs the removed item or empty list message

#### `displayList()`

- **Purpose**: Displays all items in the shopping list in a numbered format
- **Parameters**: None
- **Method Used**: `forEach()` - Iterates through array elements
- **Display Format**: Numbered list (1. Item1, 2. Item2, etc.)
- **Empty Handling**: Shows "Shopping list is empty" message when no items

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

### Expected Output

```
Added "Apples" to the shopping list.
Added "Bread" to the shopping list.
Added "Milk" to the shopping list.
Current shopping list:
1. Apples
2. Bread
3. Milk
Removed "Milk" from the shopping list.
Current shopping list:
1. Apples
2. Bread
```

### Key Features

- **Error Prevention**: Functions handle edge cases (empty arrays)
- **User Feedback**: All operations provide console feedback
- **Clean Display**: Items are shown in a readable numbered format
- **Maintainable Code**: Functions are well-documented and follow best practices

### Array Methods Used

| Method      | Purpose                                  | Example                                 |
| ----------- | ---------------------------------------- | --------------------------------------- |
| `push()`    | Adds element to end of array             | `array.push('item')`                    |
| `pop()`     | Removes and returns last element         | `const item = array.pop()`              |
| `forEach()` | Executes function for each array element | `array.forEach((item, index) => {...})` |

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

```javascript
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
```

### Expected Output for Task 2

```
Added "Apples" to the shopping list.
Added "Bread" to the shopping list.
Added "Apple Juice" to the shopping list.
"apples" is already in the shopping list. Item not added.
"APPLES" is already in the shopping list. Item not added.
Current shopping list:
1. Apples
2. Bread
3. Apple Juice
Items containing "apple":
1. Apples
2. Apple Juice
Items containing "bread":
1. Bread
No items found containing "milk".
Items containing "APP":
1. Apples
2. Apple Juice
```

### Additional Array Methods Used in Task 2

| Method          | Purpose                                        | Example                           |
| --------------- | ---------------------------------------------- | --------------------------------- |
| `some()`        | Tests if at least one element passes condition | `array.some(item => condition)`   |
| `filter()`      | Creates new array with elements passing test   | `array.filter(item => condition)` |
| `toLowerCase()` | Converts string to lowercase for comparison    | `string.toLowerCase()`            |
| `includes()`    | Checks if string contains substring            | `string.includes(searchTerm)`     |

## Files Structure

```
Lab_4.2_Array_Manipulation/
├── index.html          # HTML file that loads the JavaScript
├── index.js            # Main JavaScript implementation
└── Readme.md          # This documentation file
```
