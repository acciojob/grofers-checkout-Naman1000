// Select all price cells using the correct class name
const priceElements = document.querySelectorAll(".price");

let total = 0;

// Loop through each price cell and add its value to total
priceElements.forEach(cell => {
  total += parseFloat(cell.textContent);
});

// Create a new row and a cell for the total
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

// Make the total cell span both columns
totalCell.setAttribute("colspan", "2");
totalCell.style.fontWeight = "bold";
totalCell.textContent = `Total: Rs ${total}`;

// Append the cell to the row
totalRow.appendChild(totalCell);

// Append the row to the table
document.querySelector("table").appendChild(totalRow);
