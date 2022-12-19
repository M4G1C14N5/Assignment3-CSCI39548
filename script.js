/**
 * This file contains the JavaScript code for the HTML document
 * As a user, I can:
select an action from a menu
add rows to the grid
add columns to the grid
remove rows from the grid
remove columns from the grid
select a color from a dropdown menu of colors
click on a single cell, changing its color to the currently selected color
fill all uncolored cells with the currently selected color
fill all cells with the currently selected color
clear all cells' color and restore all cells to their original/initial color

A few useful methods, properties, and events for this assignment:
getElementById()
getElementsByTagName()
querySelector()
querySelectorAll()
createElement()
appendChild()
removeChild()
insertCell()
deleteCell()
insertRow()
deleteRow()
onchange
onclick
node.children
node.lastElementChild

 */
// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // create a table 
    let table = document.getElementById("grid");
    // if there are no rows, create a row and add it to the table
    if (numRows === 0) {
        let row = table.insertRow(numRows);
        // create a cell and add it to the row
        let cell = row.insertCell(numCols);
        // increment the number of rows and columns
        numRows++;
        numCols++;
    } else {
        // if there are rows, add a row to the table
        let row = table.insertRow(numRows);
        // for each column, create a cell and add it to the row
        for (let i = 0; i < numCols; i++) {
            let cell = row.insertCell(i);
        }
        // increment the number of rows
        numRows++;
    }
    
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}