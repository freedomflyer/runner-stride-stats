module.exports = readData;

var mysql      = require('mysql');
var sql = require('sql');
var XLSX = require('xlsx');
var squel = require('squel');
var Q = require('q');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  socketPath : "/Applications/MAMP/tmp/mysql/mysql.sock",
  database  : "CSV_DB"
});

connection.connect();

var STRIDE_DATA = "STRIDE_DATA_2";
var UPLOAD_DATA = "Upload";

	
/**
	Reads data from file, imports it into MySQL DB 
*/
function readData(req, res, next) {
	console.log("Uploading with:" + req.body.name + " and " + req.body.description);
	
	createUploadRecord(req.body.name, req.body.description, function(uploadId){
		// Read .XLSX/M file, req.files.spreadsheet.path
		var xls = XLSX.readFile(req.files.spreadsheet.path); // to limit, use {sheetRows:500}
		var sheets = [];
		xls.SheetNames.forEach(function(y) {
			sheets.push(y);
		});

		// TODO: Add multisheet support. Right now, only the first sheet is loaded
		var rows = XLSX.utils.sheet_to_row_object_array(xls.Sheets[sheets[0]]);

		// Loops through each row, inserting into DB
		var numRows = 0;
		var promises = [], defs = [];
		var resolveIndex = 0;

		// Insert new row here
		for(var i=0; i < rows.length; i++){
			var def = Q.defer();
			defs.push(def);
			promises.push(def.promise);
			var query = connection.query(createStrideInsertQuery(rows[i], uploadId));

			query.on('error', function(err){
				res.json({error:err});
			});

			query.on('end', function(){
				defs[resolveIndex].resolve();
				resolveIndex++;
			});

			
		}

		Q.all(promises).then(function() {
			console.log("DOONE********");
	       res.json({success:true, rows: resolveIndex});
	    });


	});
	
}


function createStrideInsertQuery(row, uploadId){
	var q = squel.insert().into(STRIDE_DATA);

	for (var key in row)
	  if (row.hasOwnProperty(key))
	    q.set("`" + key + "`", row[key]);

	q.set("UploadID", uploadId);

	return q.toString();
}


function createUploadRecord(name, description, cb) {
	var q = squel.insert().into(UPLOAD_DATA);
	q.set("`Name`", name);
	q.set("`Description`", description); 

	connection.query(q.toString(), function(err, res) {
		if(err)
			console.log(err);
		cb(res.insertId);
	});
}










