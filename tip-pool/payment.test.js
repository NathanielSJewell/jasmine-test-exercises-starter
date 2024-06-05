describe(`test all payment.js file functions`, function() {
	beforeEach(function() {
		billAmtInput.value = 75;
		tipAmtInput.value = 15;
	});
	it(`should increment paymentId from zero when submitPaymentInfo() is called`, function() {
		submitPaymentInfo();
		expect(paymentId >= 1).toBeTruthy();
	});

	it(`should return correct object based on input values when call createCurPayment()`, function() {
		expect(createCurPayment()).toEqual({
			billAmt: `75`,
			tipAmt: `15`,
			tipPercent: 20
		});
	});
	it(`should contain a table row with an id of 'payment1' when call appendPaymentTable()`, function() {
		let curPayment = {
			billAmt: `75`,
			tipAmt: `15`,
			tipPercent: 20
		};
		appendPaymentTable(curPayment);
		expect((newTr.id = 'payment1')).toBeTruthy();
	});
});
