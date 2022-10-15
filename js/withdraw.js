//console.log('Withdraw File');

document.getElementById('btn-withdraw').addEventListener('click', function () {
    //console.log('Withdraw Button Clicked');

    const inputWithdrawValue = getInputFieldValueById('withdraw-field');
    //console.log(inputWithdrawValue);

    const textWithdrawValue = getTextValueById('withdraw-total');
    //console.log(textWithdrawValue);

    const totalWithdrawValue = textWithdrawValue + inputWithdrawValue;

    getTextElementValueById('withdraw-total', totalWithdrawValue);

    // Balance after Withdraw Section

    const textBalanceValue = getTextValueById('balance-total');
    const balanceAfterWithdraw = textBalanceValue - inputWithdrawValue;

    getTextElementValueById('balance-total', balanceAfterWithdraw);
})