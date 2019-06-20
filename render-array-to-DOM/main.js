// --------------- ||
// -- VARIABLES -- ||
// --------------- ||

const list = ["data-item-id", "data-item-name", "data-item-price", "data-item-url", "data-item-description", "data-item-image", "data-item-categories", "data-item-weight", "data-item-width", "data-item-length", "data-item-height", "data-item-max-quantity", "data-item-min-quantity", "data-item-stackable", "data-item-quantity-step", "data-item-shippable", "data-item-quantity", "data-item-taxable", "data-item-taxes", "data-item-has-taxes-included", "data-item-metadata", "data-item-file-guid", "data-item-payment-interval", "data-item-payment-interval-count", "data-item-payment-trial", "data-item-recurring-shipping"]
// Get the element from the DOM in which to display the list
const listArea = document.getElementById('listArea');




// -------------- ||
// -- FOR EACH -- ||
// -------------- ||

var str = '';
list.forEach(function(item){
  str += '<li>' + item + '</li>';
  // OR
  // str += `<li>${item}</li>`
});

listArea.innerHTML = str;





// -------------- ||
// --- REDUCE --- ||
// -------------- ||

// // Reduce will iterate over all the array items and returns a single value.
// listItems = list.reduce((result, item) => {
//   // Add a string to the result for the current item. This syntax is using template literals.
//   result += `<li>${item}</li>`;
//   // Always return the result in the reduce callback, it will be the value or result in the next iteration.
//   return result;
//   }, '');  // The '' is an empty string, it is the initial value result.
// // Set the inner HTML
// listArea.innerHTML = listItems;