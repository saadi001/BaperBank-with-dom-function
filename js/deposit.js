document.getElementById('deposit-btn').addEventListener('click',function(){

    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositAmount = getElementValueById('deposit-total');

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);
    
    const previousBalance = getElementValueById('balance-total');
    const currentTotalBalance = newDepositAmount + previousBalance;
    setTextElementValueById('balance-total', currentTotalBalance);
});