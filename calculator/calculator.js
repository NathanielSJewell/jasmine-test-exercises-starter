const loanAmount = document.querySelector(`#loan-amount`);
const loanYears = document.querySelector(`#loan-years`);
const loanRate = document.querySelector(`#loan-rate`);

window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	calculateMonthlyPayment(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let p = values.amount;
	let i = values.rate * 0.01 / 12;
	let n = values.years * 12;
	let numerator = p * i;
	let denominator = 1 - (1 + i) ** -n;
	let monthlyPayment = numerator / denominator;
	let result = (Math.round(monthlyPayment * 100) / 100).toFixed(2);
	updateMonthly(result.toString());
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	document.getElementById(`monthly-payment`).innerText = monthly;
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	let loanAmount = document.getElementById('loan-amount');
	let loanYears = document.getElementById('loan-years');
	let loanRate = document.getElementById('loan-rate');
	loanAmount.value = 0;
	loanYears.value = 0;
	loanRate.value = 0;
}

//done!
