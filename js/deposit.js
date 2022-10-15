//console.log('Deposit File');

document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('Deposit Button Clicked');

    // Total Deposit Section

    const inputDepositValue = getInputFieldValueById('deposit-field');
    //console.log(inputDepositValue);

    const textDepositValue = getTextValueById('deposit-total');
    //console.log(textDepositValue);

    const totalDepositValue = textDepositValue + inputDepositValue;

    //existingTextValue.innerText = totalDepositValue;

    getTextElementValueById('deposit-total', totalDepositValue);


    // Total Balance Section 

    const textBalanceValue = getTextValueById('balance-total');

    const totalBalanceValue = textBalanceValue + inputDepositValue;

    getTextElementValueById('balance-total', totalBalanceValue);

})