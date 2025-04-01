// Select all price elements and calculate total
const priceElements = document.querySelectorAll('.prices');
let total = 0;

priceElements.forEach(element => {
    const numericValue = element.textContent.replace(/[^\d.]/g, '');
    total += parseFloat(numericValue) || 0;
});

// Create table row with total
const table = document.querySelector('table');
const newRow = document.createElement('tr');
const totalCell = document.createElement('td');

// Set column span to match existing columns
const firstItemRow = document.querySelector('.item');
if (firstItemRow) {
    totalCell.setAttribute('colspan', firstItemRow.cells.length);
}

// Style and add total value
totalCell.textContent = `Total: ₹${total.toFixed(2)}`;
totalCell.style.fontWeight = 'bold';
newRow.appendChild(totalCell);

// Append to table (handles both tbody and direct insertion)
if (table.tBodies[0]) {
    table.tBodies[0].appendChild(newRow);
} else {
    table.appendChild(newRow);
}
