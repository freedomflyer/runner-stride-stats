$(document).ready(function(){
	

	$("#spreadsheetUpload").bind('submit', function (e) {
	    var isValid = true; //someYourFunctionToCheckIfFormIsValid();
	    
	    if (!isValid) {
	        e.preventDefault();
	        return false;
	    }
	    else {
	    	var formData = new FormData($(this)[0]);
	        $.ajax({
		        url: "/upload",
		        type: 'POST',
		        data: formData,
		        async: false,
		        success: function (data) {
		            console.log(data);
		        },
		        cache: false,
		        contentType: false,
		        processData: false
		    });

	        e.preventDefault();
	        return false;
	    }

	});








});