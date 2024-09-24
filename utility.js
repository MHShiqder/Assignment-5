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