const loanAmount = document.querySelector(`#loan-amount`);
const loanYears = document.querySelector(`#loan-years`);
const loanRate = document.querySelector(`#loan-rate`);

// //select span with an id of monthly payment
// const monthlyPayment = document.getElementById(`monthly-payment`);

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
	let getCurrentUIValues = {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
	return getCurrentUIValues;
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	document.getElementById('loan-amount').value = 0;
	document.getElementById('loan-years').value = 0;
	document.getElementById('loan-rate').value = 0;

	//call a function to calculate the current monthly payment.
	calculateMonthlyPayment();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	document.getElementById(`monthly-payment`).innerText = `hello`;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
// function calculateMonthlyPayment(values) {
// 	let p = document.getElementById('loan-amount').value;
// 	let i = document.getElementById('loan-rate').value * 0.01 / 12;
// 	let n = document.getElementById('loan-years').value * 12;
// 	let numerator = p * i;
// 	let denominator = 1 - (1 + i) ** n;
// 	let monthlyPayment = numerator / denominator;
// }

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}
