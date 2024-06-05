//select input with an id of servername
let serverNameInput = document.getElementById('serverName');
//select form with an id of serverForm
let serverForm = document.getElementById('serverForm');
//select server table
let serverTbody = document.querySelector('#serverTable tbody');

//empty object of restaurant servers
let allServers = {};
//tracker
let serverId = 0;

//upon clicking submission, call a function
serverForm.addEventListener('submit', submitServerInfo);

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
	if (evt) evt.preventDefault(); // when running tests there is no event

	//variable set to user input value
	let serverName = serverNameInput.value;

	//if input is not empty upon submission
	if (serverName !== '') {
		//increment server tracker
		serverId++;

		//adds a key server(some number) and a value of another object serverName: input.value
		allServers['server' + serverId] = { serverName };

		//adds server name and earnings to the table
		updateServerTable();

		//resets input value
		serverNameInput.value = '';
	}
}

let newTr;
// Create table row element and pass to appendTd function with input value
function updateServerTable() {
	serverTbody.innerHTML = '';

	//iterates all keys added to allServers
	for (let key in allServers) {
		//curServer is equal to the allServers key (server1, server2, etc)
		let curServer = allServers[key];
		console.log(curServer);

		//create table row in the dom
		newTr = document.createElement('tr');

		//give the table row an id of (server1, server2, etc)
		newTr.setAttribute('id', key);

		//variable stores a value turned to a number and divided by the amount of servers
		let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

		//create and append the current server name and their tip average
		appendTd(newTr, curServer.serverName);
		appendTd(newTr, '$' + tipAverage.toFixed(2));

		//append table rows to the new table body
		serverTbody.append(newTr);
	}
}
