function tipAmountCalculator() {
    let subTotalValue = Number(document.getElementById('inputSubTotal').value);
    let tipDecimal = Number('.' + document.getElementById('inputTip').value);
    
    let tipTotalValue = subTotalValue * tipDecimal;
    document.getElementById('tip-total-display').innerHTML = tipTotalValue.toFixed(2);
    
    let grandTotalValue = tipTotalValue + subTotalValue;
    document.getElementById('grand-total-display').innerHTML = grandTotalValue.toFixed(2);

    changeDisplay()
}

function changeDisplay() {
    if (document.getElementById('btn').innerHTML == 'Calculate Tip') {
        document.getElementById('total-wrapper').style.display='grid';
        document.getElementById('page-border').style.padding='0 20px 90px 20px';
        document.getElementById('btn').innerHTML = 'Reset'
    } else {
        document.getElementById('btn').innerHTML = 'Calculate Tip'
        document.getElementById('total-wrapper').style.display='none';
        document.getElementById('page-border').style.padding='0 20px 20px 20px';
        resetInputs()
    }
}

function resetInputs() {
    document.getElementById("inputSubTotal").value = '';
    document.getElementById("inputTip").value = '';
}
// Helpful Tip.  Put this in the html part of the input field for a different type of reset
// When the input field gets focus, replace its current value with an empty string
// onfocus="this.value=''"