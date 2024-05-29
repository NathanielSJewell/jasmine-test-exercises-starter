const data = {
	amount: 30000,
	years: 5,
	rate: 15
};

function calculateMonthlyPayment(values) {
	let p = values.amount;
	let i = values.rate * 0.01 / 12;
	let n = values.years * 12;
	let numerator = p * i;
	let denominator = 1 - (1 + i) ** -n;
	let monthlyPayment = numerator / denominator;
	console.log(monthlyPayment);
}

it('should calculate the monthly rate correctly', function() {
	expect(calculateMonthlyPayment(data).toEqual());
});

it('should return a result with 2 decimal places', function() {
	// ..
});

/// etc
