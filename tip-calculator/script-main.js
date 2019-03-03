// Work on making this tipAmmountCalculator less lines
function tipAmountCalculator() {
    let subTotalValue = Number(document.getElementById('inputSubTotal').value);
    let tipDecimal = Number('.' + document.getElementById('inputTip').value);
    
    let tipTotalValue = subTotalValue * tipDecimal;
    document.getElementById('tip-total-display').innerHTML = tipTotalValue.toFixed(2);
    
    let grandTotalValue = tipTotalValue + subTotalValue;
    document.getElementById('grand-total-display').innerHTML = grandTotalValue.toFixed(2);

    showDisplay()
}

function showDisplay() {
    document.getElementById('calculate-btn-wrapper').style.justifyContent='space-between';
    document.getElementById('btn-reset').style.display='flex';
    document.getElementById('total-wrapper').style.display='grid';
    document.getElementById('page-border').style.padding='0 20px 90px 20px';
}

function resetDisplay() {
    document.getElementById('calculate-btn-wrapper').style.justifyContent='center';
    document.getElementById('total-wrapper').style.display='none';
    document.getElementById('btn-reset').style.display='none';
    document.getElementById('page-border').style.padding='0 20px 20px 20px';
    resetInputs();
}

function resetInputs() {
    document.getElementById("inputSubTotal").value = '';
    document.getElementById("inputTip").value = '';
}

// Possible addition for Tip% input field
// When the input field gets focus, replace its current value with an empty string
// onfocus="this.value=''"
// https://www.w3schools.com/howto/howto_html_clear_input.asp