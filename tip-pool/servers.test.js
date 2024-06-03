describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
		//server1 : alice
	});

	afterEach(function() {
		// teardown logic
		serverNameInput.value = ``;
		updateServerTable();
		newTr.remove();
	});
});

describe(`test servers.js functions`, function() {
	beforeAll(function() {
		allServers = {};
		serverNameInput.value = 'Jacob';
	});
	it(`should add a new server of Jacob to allServers on submitServerInfo()`, function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Jacob');
		//allServers = serverName : `Jacob`;
	});

	it(`should test updateServerTable()`, function() {
		submitServerInfo();
		updateServerTable();
		expect(serverTbody.contains(newTr)).toBeTruthy();
	});

	afterAll(function() {
		// teardown logic
		serverNameInput.value = ``;
		updateServerTable();
		newTr.remove();
	});
});
