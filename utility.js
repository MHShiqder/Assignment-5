// converting sting values of input and balance 
function getInputValue(id){
    const inputValue= document.getElementById(id).value;
    for(let i=0;i<inputValue.length;i++)
    {
        const a=['0','1','2','3','4','5','6','7','8','9']
        if(!a.includes(inputValue[i]))
        return NaN;
        
    }
    const floatValue =parseFloat(inputValue);
    return floatValue;
}
function getTextValue(id){
    const textValue= document.getElementById(id).innerText;
    const floatValue =parseFloat(textValue);
    return floatValue;
}


// adding donation in history section 
function getHistory(inputValue,eventName)
{
    const historySection=document.getElementById('history-section');
    const parentDiv=document.createElement('div');
    parentDiv.classList.add('border-2','rounded','p-5','space-y-4')

    const h2=document.createElement('h2');
    h2.classList.add('font-bold')
    h2.innerText=`${inputValue} taka is donated  for ${eventName}`;

    const p=document.createElement('p');
    const now=new Date()
    p.innerText=`${now}`;

    parentDiv.appendChild(h2)
    parentDiv.appendChild(p)
    historySection.appendChild(parentDiv);
}


// donate onclick operation
function clickFunction(donateInput,donateMoney,eventName){
    const donateInputValue=getInputValue(donateInput);
    const currentBalance=getTextValue('current-balance');
    const donatedBalance=getTextValue(donateMoney)
    if(isNaN(donateInputValue)||donateInputValue>currentBalance)
    {
        alert('Transaction error \nPlease try again');
        return;
    }
    my_modal_5.showModal();

    const newBalance=currentBalance-donateInputValue;
    document.getElementById('current-balance').innerText=newBalance;

    const newDonatedBalance=donatedBalance+donateInputValue;
    document.getElementById(donateMoney).innerText=newDonatedBalance;
    
    getHistory(donateInputValue,eventName);
}


// toggling the active button 

function showActiveButton(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

    
}