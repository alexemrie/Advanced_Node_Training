function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {						// needs to be eager
	var val;													// store value which is the text
	var fn;														// store value of function

	fakeAjax(file, function(text){		// fakeAjax(file, cb);

		if (fn) fn(text);								// fn has been defined
																		// value is currently undefined so call fn
		else val = text;								// fn yet to be defined; store value of text in val
	});


	return function(cb){							// function that will be passed around
		if (val) cb(val);								// if value (a.k.a. "text") has been defined return callback
		else fn = cb;										// else value is currently undefined so set fn equal to callback
																		// fn is reference to unwrapText1
	}
}


var thunk1 = getFile("file1"); 				// returns a thunk; creates future value for response from file1,
 																			// which is a function since getFile returns a function
var thunk2 = getFile("file2"); 				// returns a thunk; creates future value for response from file2
var thunk3 = getFile("file3"); 				// returns a thunk; creates future value for response from file3

//to get underlying value of future value need to call the function that thunk1 is referencing
//thunk1(function that thunk1 is referencing)

thunk1(function unwrapText1(text1){			// unwrap thunk1 by calling the callback function represented by thunk1
	output(text1);												// unwrapText1 is cb in parameter called in return statement on line 35

	thunk2(function unwrapText2(text2){		// unwrap thunk2, know ready because already unwrapped thunk1 previously
		output(text2);											// **function wrapped around future value is time-independent

		thunk3(function unwrapText3(text3){	// unwrap thunk3, know ready because already unwrapped thunk2 previously
			output(text3);
			output("Complete!");
		});
	});
});
