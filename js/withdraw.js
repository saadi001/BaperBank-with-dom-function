document.getElementById('withdraw-btn').addEventListener('click',function(){

    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const previousTotalBalance = getElementValueById('balance-total');

    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    setTextElementValueById('withdraw-total',totalWithdrawAmount);

    const totalBalanceAmount = previousTotalBalance - newWithdrawAmount;
    setTextElementValueById('balance-total', totalBalanceAmount);
})