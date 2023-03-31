it ("should calculate the monthly rate correctly", function() {
  const values = {amount: 10000, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual("130.44");
});

it("should return a result with 2 decimal places", function() {
  const values = {amount: 10043, years: 8, rate: 5.8};
  const monthly = calculateMonthlyPayment(values);
  expect(monthly.indexOf(".")).toEqual(monthly.length-3);
  expect(monthly).toEqual("131.00");
});

it("should handle extremely high interest rates", function() {
  const values = {amount: 1000, years: 40, rate: 99};
  expect(calculateMonthlyPayment(values)).toEqual("82.50");
});