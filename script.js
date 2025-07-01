const billInput = document.getElementById('billInput');
const tip = document.getElementById('tippercentage');
const people = document.getElementById('noofpeople');
const tipResult = document.getElementById('tipResult');
const total = document.getElementById('totalResult');
const perPerson = document.getElementById('eachResult');
const tipValue = document.getElementById('tipValue'); 

const tipCalculator = () => {
  const billAmount = parseFloat(billInput.value) || 0;
  const tipPercent = parseInt(tip.value);
  const nopeople = parseInt(people.value) || 1;

  tipValue.textContent = `${tipPercent}%`;

  const tipAmount = (billAmount * tipPercent) / 100;
  const totalAmount = billAmount + tipAmount;
  const amountPerPerson = totalAmount / nopeople;

  tipResult.value = tipAmount.toFixed(2);
  total.value = totalAmount.toFixed(2);
  perPerson.value = amountPerPerson.toFixed(2);
};

billInput.addEventListener('input', tipCalculator);
tip.addEventListener('input', tipCalculator);
people.addEventListener('input', tipCalculator);
