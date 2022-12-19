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
    // create a table
    let table = document.getElementById("grid");
    // if it's empty, create a row and add it to the table
    if (numCols === 0) {
        let row = table.insertRow(numRows);
        // create a cell and add it to the row
        let cell = row.insertCell(numCols);
        // increment the number of rows and columns
        numRows++;
        numCols++;
    } else {
        // if there are columns, add a column to the table
        // for each row, create a cell and add it to the row
        for (let i = 0; i < numRows; i++) {
            let row = table.rows[i];
            let cell = row.insertCell(numCols);
        }
        // increment the number of columns
        numCols++;
    }
}

// Remove a row
function removeR() {
        // if there are no rows, do nothing
        if (numRows === 0) {
            return;
        } else {
            // if there are rows, remove the last row
            let table = document.getElementById("grid");
            table.deleteRow(numRows-1);
            // decrement the number of rows
            numRows--;
        }
}

// Remove a column
function removeC() {
    // if there are no columns, do nothing
    if (numCols === 0) {
        return;
    }
    // if there are columns, remove the last column
    let table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        let row = table.rows[i];
        row.deleteCell(numCols-1);
    }
    // decrement the number of columns
    numCols--;
    
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);

}

// Fill all uncolored cells
function fillU(){
    // get element by grid id
    let table = document.getElementById("grid");
    // use querySelectorAll to get all cells
    let cells = table.querySelectorAll("td");
    // for each cell, if it's empty, set the background color to the selected color
    cells.forEach(cell => {
        if (cell.style.backgroundColor === "") {
            cell.style.backgroundColor = colorSelected;
        }
    });


}

// Fill all cells
function fillAll(){
    // get element by grid id
    let table = document.getElementById("grid");
    // use querySelectorAll to get all cells
    let cells = table.querySelectorAll("td");
    // for each cell, set the background color to the selected color
    cells.forEach(cell => {
        cell.style.backgroundColor = colorSelected;
    });
}

// Clear all cells
function clearAll(){
    // get cells
    let cells = document.querySelectorAll("td");
    cells.forEach(cell => {
        cell.style.backgroundColor = "";
    });

}