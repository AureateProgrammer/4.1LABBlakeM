function caculateTotalCost(price, quantity, taxRate,discount) {
    let totalCost = (price * quantity) * (1 + taxRate) (discount / price );
return totalCost;
}

console.log(caculateTotalCost(10,14,1))


function checkEligibility(age, isEmployed){
    if (age <= 18){
        console.log("Not Eligible");
    }
    else if (isEmployed){
        console.log("Eligible");
    }
    else{
        console.log("Conditionally Eligible");
    }
}

console.log(checkEligibility(18, false))
console.log(checkEligibility(19, true))
console.log(checkEligibility(25, false))