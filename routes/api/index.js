var runner = require("../../model/runner"),
	upload = require("../../model/upload")
	;


exports.init = function(app){

	app.get("/:id/strides", function(req, res){
		// Get specific runners
		if(req.query.runners){
			
			var runners = req.query.runners.split(",");
			runner.getStridesForRunners(req.params.id, runners, function(err, rows){
				if(err) {
					res.send(500, err);
				}

				res.json(rows);
			});
		// Get all runners
		} else {
			runner.getStridesForAllRunners(req.params.id, function(err, rows){
				if(err) {
					res.send(500, err);
				}

				res.json(rows);
			});
		}
		
	});



	app.get("/uploads", function(req, res){
		upload.getUploads(27, function(err, rows){
			if(err) {
				res.send(500, err);
			}

			res.json(rows);
		});
	});



}