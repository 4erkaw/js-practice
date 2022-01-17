const price = prompt('Input check number, Please!');
console.log(price);

const formatedPrice = Number.parseFloat(price);

const tip = prompt('Input tip amount, Please!');
console.log(tip);

const formatedTip = Number.parseFloat(tip);

const tipAmount = Number((formatedPrice * formatedTip / 100).toFixed(2));

const totalSum = Number((formatedPrice + tipAmount).toFixed(2));

const message = `Check number: ${formatedPrice}\n Tip: ${formatedTip}%\nTip amount: ${tipAmount}\nTotal price ${totalSum}`;
alert(message);