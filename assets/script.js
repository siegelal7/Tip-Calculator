var inputPrice = document.createElement("input");
inputPrice.setAttribute("for", "price");
inputPrice.setAttribute("type", "text");
inputPrice.setAttribute("id", "price");
inputPrice.setAttribute("placeholder", "Enter price here");
var inputPercent = document.createElement("input");
inputPercent.setAttribute("for", "percent");
inputPercent.setAttribute("type", "text");
inputPercent.setAttribute("id", "percent");
inputPercent.setAttribute(
  "placeholder",
  "Enter desired tip percent as decimal"
);
var formEl = document.getElementById("form");
formEl.appendChild(inputPrice);
formEl.appendChild(inputPercent);

var tipEl = document.getElementById("tip-amount");
var totalEl = document.getElementById("new-total");
var submitBtn = document.getElementById("submit");
// var tip;
// var newTotal;

function doMathForTip(total, tipPercent) {
  var tip = (parseFloat(tipPercent) * parseFloat(total)).toFixed(2);
  //   var newTotal = inputPrice + tip;
  return tip;
}
function doMathForTotal(total, tipAmount) {
  var newTotal = parseFloat(total) + parseFloat(tipAmount);
  return newTotal;
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var tipPercent = inputPercent.value * 0.01;
  var total = inputPrice.value;
  var tip = (parseFloat(tipPercent) * parseFloat(total)).toFixed(2);
  // var tipAmount = doMathForTip(total, tipPercent);
  var newTotal = (parseFloat(total) + parseFloat(tip)).toFixed(2);
  // var newTotal = doMathForTotal(total, tipAmount);
  tipEl.textContent = tip;
  totalEl.textContent = newTotal;
  inputPercent.value = "";
  inputPrice.value = "";
});

// console.log('test')
