var mysql    = require('mysql'),
	sql      = require('sql'),
	squel    = require('squel'),
	Q        = require('q'),
	db       = require("../db"),	
	dbConfig = require("../config/dbConfig.json")
	;



module.exports.getUploads = function(uploadId, cb) {
	var q = squel.select().from(dbConfig.upload);
	var query = db.connection.query(q.toString(), function(err, rows, fields){
		if(err){
			console.log(err);
			return cb(err, null);
		}

		cb(null, rows);

	});
	
}