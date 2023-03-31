window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const amount = document.getElementById("loan-amount");
  const years = document.getElementById("loan-years");
  const rate = document.getElementById("loan-rate");
  amount.value = 300000;
  years.value = 30;
  rate.value = 5;
  update();
}

function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()))
}

function calculateMonthlyPayment(values) {
  let P = values.amount;
  let i = (values.rate / 100) / 12;
  let n = values.years * 12 * -1;
  let monthly = ((P * i) / (1 - (1+i)**n)).toFixed(2);
  return monthly;
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = monthly;
}
