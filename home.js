document.getElementById('donate-input-button')
.addEventListener('click',function(event){
    event.preventDefault();
    const donateInputValue=getInputValue('donate-input-value');
    const currentBalance=getTextValue('current-value');
    if(isNaN(donateInputValue)||donateInputValue>currentBalance)
    {
        alert('Transaction error');
        return;
    }
    my_modal_5.showModal();
    // const newBalance=
    // const newDonateBalance=

})