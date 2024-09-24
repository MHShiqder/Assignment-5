// display toggle functions 
document.getElementById('donation-button')
.addEventListener('click',function(event){
    event.preventDefault();
    showActiveButton('donation-section');

    document.getElementById('donation-button').classList.remove('bg-btnTertiary','border-2','border-gray-200');
    document.getElementById('donation-button').classList.add('bg-btnPrimary');

    document.getElementById('history-button').classList.add('bg-btnTertiary','border-2','border-gray-200');
    document.getElementById('history-button').classList.remove('bg-btnPrimary');
})
document.getElementById('history-button')
.addEventListener('click',function(event){
    event.preventDefault();
    showActiveButton('history-section');

    document.getElementById('history-button').classList.remove('bg-btnTertiary','border-2','border-gray-200');
    document.getElementById('history-button').classList.add('bg-btnPrimary');

    document.getElementById('donation-button').classList.add('bg-btnTertiary','border-2','border-gray-200');
    document.getElementById('donation-button').classList.remove('bg-btnPrimary');
})



// donation operation functions 

document.getElementById('donate-input-button')
.addEventListener('click',function(event){
    event.preventDefault();
    // clickFunction(donateInputValue,donatedBalance,eventName)
    clickFunction('donate-input-value','donated-balance','Flood at Noakhali, Bangladesh');    

})

document.getElementById('donate-input-button-2')
.addEventListener('click',function(event){
    event.preventDefault();
    // clickFunction(donateInputValue,donatedBalance,eventName)
    clickFunction('donate-input-value-2','donated-balance-2','for Flood Relief in Feni,Bangladesh');    

})

document.getElementById('donate-input-button-3')
.addEventListener('click',function(event){
    event.preventDefault();
    // clickFunction(donateInputValue,donatedBalance,eventName)
    clickFunction('donate-input-value-3','donated-balance-3','to Aid for Injured in the Quota Movement');    

})




