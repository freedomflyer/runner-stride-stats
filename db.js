var mysql = require('mysql');

module.exports.connectToDb = function(callback) {
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root',
	  socketPath : "/Applications/MAMP/tmp/mysql/mysql.sock",
	  database  : "CSV_DB"
	});

	connection.connect();

	module.exports.connection = connection;
	callback();
}