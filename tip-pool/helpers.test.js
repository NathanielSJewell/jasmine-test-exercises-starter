//test all functions in helpers.js file

describe(`test helpers.js functions`, function() {
	beforeEach(function() {
		allPayments = {
			payment1: { billAmt: 75, tipAmt: 15, tipePercent: 20 },
			payment2: { billAmt: 80, tipAmt: 20, tipPercent: 15 },
			payment3: { billAmt: 50, tipAmt: 10, tipPercent: 12 }
		};
	});

	afterEach(function() {
		allPayments = {};
	});

	it('should sum the billAmt correctly, call sumPaymentTotal()', function() {
		// Assuming sumPaymentTotal function is available globally or imported
		const total = sumPaymentTotal('billAmt');
		expect(total).toBe(205);
	});

	it(`should calculate tip percentage correctly`, function() {
		let billAmt = 75;
		let tipAmt = 15;
		expect(calculateTipPercent(billAmt, tipAmt)).toEqual(20);
	});

	it(`should check if the passed in table row contains inputed inner text, call appendTd()`, function() {
		let newTr = document.createElement('tr');
		appendTd(newTr, `$100`);
		expect(newTr.innerText).toBe(`$100`);
	});
});

describe(`test appendDeleteBtn()`, function() {
	beforeEach(function() {
		let newTr = document.createElement('tr');
		let paymentTbody = document.querySelector('#paymentTable tbody');
		let createTd = document.createElement('td');
	});
	it(`should add passed tr to table body`, function() {
		appendDeleteBtn(newTr);
		expect(paymentTbody.contains(newTr)).toBeTruthy();
	});
	it(`paymentTbody should not contain tr after td is clicked`, function() {
		appendDeleteBtn(newTr);
		expect(paymentTbody.contains(newTr)).toBeTruthy();
	});
});
