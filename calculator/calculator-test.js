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
	let result = (Math.round(monthlyPayment * 100) / 100).toFixed(2);
	// console.log(monthlyPayment);
	return result;
}

it('should calculate the monthly rate correctly', function() {
	//this worked before I added variable result!
	expect(calculateMonthlyPayment(data)).toEqual(713.6979025907634);
});

it('should return a result with 2 decimal places', function() {
	//vscode formatting won't allow me to type 713.7!!
	expect(calculateMonthlyPayment(data)).toEqual(713.7);
});

/// etc
