function calcTip (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

//courseWay until comes the loop section
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

//my own way 
for(var i = 0; i < bills.length; i++){
    console.log(calcTip(bills[i]));
}