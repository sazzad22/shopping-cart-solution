
console.log('added in dev tool')
function updateCaseNumber(product , price, isIncreasing){
    const caseInput = document.getElementById(product+"-number");
    let caseNumber = caseInput.value;
    
    //increasing or decreasing the product amount by every click
    if(isIncreasing) { //for bulean condition we can use just isIncreasing instead of isIncreasing ==true
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }

    //updating the product amount
    caseInput.value = caseNumber

    //phone case total price
    const caseTotal = document.getElementById(product+'-total');
    caseTotal.innerText = caseNumber * price;

    //third section Subtotal,total and tax
    calculateTotal ()

}

//phoneTotal and caseTotal for calculateTotal----------------

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    return productNumber;

}

//calculate sub-total , total and tax in third section -----------
function calculateTotal (){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case')* 59
    
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10 ; //tax is 10%
    const Total = subTotal + tax;

    //update the values is the place of existing values.
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText =Total;

}

//phone plus button------
document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumber("phone", 1219 , true);
})
//phone minus button---------
document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumber("phone" , 1219 , false);
})


//case plus button for the first section--------
document.getElementById("case-plus").addEventListener("click",function(){

    /* const caseInput = document.getElementById("case-number");
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1; */
    updateCaseNumber('case',59, true);


})

//case minus button for the second section------
document.getElementById("case-minus").addEventListener("click",function(){
    /* const caseInput = document.getElementById("case-number");
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1; */
    updateCaseNumber('case',59, false);
})