// Select all price cells using the correct class name
let priceElements = document.querySelectorAll(".price");
let total =0;



// Loop through each price cell and add its value to total
priceElements.forEach(cell=>{
	total += parseFloat(cell.textContent);
});

// Create a new row and a cell for the total
let totalrow = document.createElement("tr");
let totalcell = document .createElement("td");


// Make the total cell span both columns
totalcell.setAttribute("colspan" , "2");
totalcell.style.fontWeight= "bold";
totalcell.textContent = `Total : Rs ${total}`; 

// Append the cell to the row
totalrow.appendChild(totalcell);


// Append the row to the table
document.querySelector("table").appendChild(totalrow;)

