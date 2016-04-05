var obj = {
	a: 1,
	b: "2",
	c: [3],
	d: { val: 4 },
	e: function() { return "5"; },
	f: false
};

if (Boolean(obj.c[0])) {
	obj.f = Boolean(obj.d.val / Number(obj.b));
}

obj.a = (Number(obj.b) * obj.c[0]) + Number(obj.e());

console.log(JSON.stringify(obj));
// should be:
// {"a":11,"b":"2","c":[3],"d":{"val":4},"f":true}
