var initialPrice = document.querySelector('#initial-price');
var quantity = document.querySelector('#quantity');
var currentPrice = document.querySelector('#current-price');

var button = document.querySelector('#button');
var output = document.querySelector('#output');

button.addEventListener('click', clickHandler);

function clickHandler(){
    var ip = initialPrice.value;
    var q = quantity.value;
    var cp = currentPrice.value;
    calculate(ip, q, cp);
    
}

function calculate(iniPrice, quant, currPrice){
    if(iniPrice > currPrice){
        var loss = (iniPrice - currPrice) * quant;
        var lossPercent = (loss / iniPrice) * 100;
        output.style.color = 'red';
        output.innerText = `You are in Loss! The loss is ${loss} and loss percentage ${lossPercent}`;
        // output.innerText =
    }else if(currPrice > iniPrice){
        var profit = (currPrice - iniPrice) * quant;
        var profitPercent = (profit / iniPrice) * 100;
        output.style.color = 'green';
        output.innerText = `You are in Profit! The Profit is ${profit} and profit percentage is ${profitPercent}.`;
    }else{
        output.innerText = 'No Pain No gain! No gain No Pain';
        output.style.color = 'red';
    }
}