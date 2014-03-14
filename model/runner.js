var mysql    = require('mysql'),
	sql      = require('sql'),
	squel    = require('squel'),
	Q        = require('q'),
	db       = require("../db"),
	dbConfig = require("../config/dbConfig.json")
	;
	



module.exports.getStridesForAllRunners = function(uploadId, cb) {
	var q = squel.select().from(dbConfig.runner).where("UploadId = " + uploadId);

	var query = db.connection.query(q.toString(), function(err, rows, fields){
		if(err){
			console.log(err);
			return cb(err, null);
		}

		var stepData = formatData(rows);
		cb(null, rows);

	});
}

module.exports.getStridesForRunners = function(uploadId, runners, cb) {
	var q = squel.select().from(dbConfig.runner).where("UploadId = " + uploadId);
	
	q.where("Subject IN ?", runners);

	console.log(q.toString());

	var query = db.connection.query(q.toString(), function(err, rows, fields){
		if(err){
			console.log(err);
			return cb(err, null);
		}

		cb(null, rows);

	});
}



/*


[
	{
		name: AaronFletcher,
		stats: {
			thisStat: thisValue;
			thatStat: thatValue;
		}
	}	
]



*/