// function to calculate totla grocery
function groceryTracker(){
let amount1 = parseFloat(document.getElementById('amount1').value);
let amount2 = parseFloat(document.getElementById('amount2').value);
let amount3 = parseFloat(document.getElementById('amount3').value);

let sum = amount1 + amount2 + amount3;

// transfers the text to p tag in the html f
document.getElementById('result').innerText = `The total grocery is :$ ${sum}`;

}

