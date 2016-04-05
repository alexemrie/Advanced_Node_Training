$("#p1 > em, .p > strong > em").each(function(){
	$(this)
	.addClass("highlighted")
	.attr({
		title: "Look at me!"
	});
});

***********************************
var $parents = $("#p1, .p > strong");

$parents.children("em").each(function(){
	$(this)
	.addClass("highlighted")
	.attr({
		title: "Look at me!"
	});
});

***********************************

If had config file with...

	parents: ["#p1", ".p > strong"],

var $parents = $(config.parents.join(","));

$parents.children("em").each(function(){
	$(this)
	.addClass("highlighted")
	.attr({
		title: "Look at me!"
	});
});
