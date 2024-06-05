//select tip and bill user inputs
let billAmtInput = document.getElementById('billAmt');
let tipAmtInput = document.getElementById('tipAmt');

//select the payment form
let paymentForm = document.getElementById('paymentForm');

//select payment table
let paymentTbody = document.querySelector('#paymentTable tbody');

//select shift Summary table at bottom of page
let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');

//create global empty object
let allPayments = {};

//track number of payments and current one
let paymentId = 0;

//select form button and respond to a submission
paymentForm.addEventListener('submit', submitPaymentInfo);

//no information is passed to this function
// Add a curPayment object to allPayments, update html and reset input values
function submitPaymentInfo(evt) {
	if (evt) evt.preventDefault(); // when running tests there is no event

	let curPayment = createCurPayment();

	//if user submits data, increment payment id
	if (curPayment) {
		paymentId += 1;
		//if curPayment is truthy, it is an object, containing billAmt, tipAmt, and tipPercentage
		//a property 'payment1' within the allPayments object is given a value of curPayment object. This object contains 	billAmt: billAmt,
		// 	tipAmt: tipAmt,
		// 	tipPercent: calculateTipPercent(billAmt, tipAmt)
		allPayments['payment' + paymentId] = curPayment;
		console.log(allPayments);

		//the current payment object is passed to appendPaymentTable() to be prepared to be added to the DOM
		appendPaymentTable(curPayment);

		//server table is updated
		updateServerTable();

		//calculates total bill and adds to table row
		updateSummary();

		//reset input values after submission
		billAmtInput.value = '';
		tipAmtInput.value = '';
	}
}

// createCurPayment() will return undefined with negative or empty inputs
// positive billAmt is required but tip can be 0
function createCurPayment() {
	//store user inputs in variables
	let billAmt = billAmtInput.value;
	let tipAmt = tipAmtInput.value;

	//if user inputs are left blank, terminate
	if (billAmt === '' || tipAmt === '') return;

	//if user inputed data, return an object
	if (Number(billAmt) > 0 && Number(tipAmt) >= 0) {
		return {
			billAmt: billAmt,
			tipAmt: tipAmt,
			tipPercent: calculateTipPercent(billAmt, tipAmt)
		};
	}
}

// Create table row element and pass to appendTd with input value
function appendPaymentTable(curPayment) {
	//create new table row
	let newTr = document.createElement('tr');
	//give table row an id of payment(number)
	newTr.id = 'payment' + paymentId;

	//the bill, tip, and perventage value amounts are given $ and % symbols, and are passed to appendTd() along with the new table row. Append Td() adds those values to a Td, then appends the Td to the new table row. This is then appended to the DOM.
	appendTd(newTr, '$' + curPayment.billAmt);
	appendTd(newTr, '$' + curPayment.tipAmt);
	appendTd(newTr, curPayment.tipPercent + '%');

	//new table row is then appended to the payment table body form
	paymentTbody.append(newTr);
}

// Create table row element and pass to appendTd with calculated sum of all payment
function updateSummary() {
	let tipPercentAvg;
	let paymentTotal = sumPaymentTotal('tipPercent');
	let numberOfPayments = Object.keys(allPayments).length;

	if (paymentTotal === 0 && numberOfPayments === 0) {
		tipPercentAvg = 0;
	} else {
		tipPercentAvg = paymentTotal / Object.keys(allPayments).length;
	}

	summaryTds[0].innerHTML = '$' + sumPaymentTotal('billAmt');
	summaryTds[1].innerHTML = '$' + sumPaymentTotal('tipAmt');
	summaryTds[2].innerHTML = Math.round(tipPercentAvg) + '%';
}
