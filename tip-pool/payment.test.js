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
	it(`, call updatePaymentSummary()`, function() {
		allPayments = {
			payment1: { billAmt: 75, tipAmt: 15, tipePercent: 20 },
			payment2: { billAmt: 80, tipAmt: 20, tipPercent: 15 },
			payment3: { billAmt: 50, tipAmt: 10, tipPercent: 12 }
		};
		updateSummary();
		expect(summaryTds[0].innerHTML).toEqual('$205');
	});
});
