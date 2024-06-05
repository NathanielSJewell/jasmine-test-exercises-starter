// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
	let total = 0;

	//go through all keys in allPayments (server1, server2, etc)
	for (let key in allPayments) {
		//variable payment equal to server1 : {serverName : jacob} for example
		let payment = allPayments[key];

		//the value of payment[type] is changed to a number and added to total
		total += Number(payment[type]);
	}
	return total;
}

//takes bill and tip amounts, divides them by each other, then divides by 100
function calculateTipPercent(billAmt, tipAmt) {
	return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element and a value.
function appendTd(tr, value) {
	//creates a new td with the inner text being the passed in value
	let newTd = document.createElement('td');
	newTd.innerText = value;

	//appends the newTd to the passed in table row element.
	tr.append(newTd);
}
