const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price elements
    const priceElements = document.querySelectorAll(".price");

    let total = 0;

    // Sum up all prices
    priceElements.forEach(price => {
        total += parseFloat(price.textContent); // Convert price text to number and sum it
    });

    // Check if total row already exists and remove it
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Get the table reference
    const table = document.querySelector("table");

    // Create a new row for total price
    const newRow = document.createElement("tr");
    newRow.id = "totalRow"; // Assign an ID to the row

    // Create a single cell spanning two columns
    const newCell = document.createElement("td");
    newCell.setAttribute("colspan", "2");
    newCell.style.fontWeight = "bold";
    newCell.style.textAlign = "center";
    newCell.textContent = `Total Price: Rs ${total}`;

    // Append the cell to the row
    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);

  
};

getSumBtn.addEventListener("click", getSum);

