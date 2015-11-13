var Person = Class.create({
	initialize: function(name,age) {
		this.name = name;
		this.age = age;
	},
	toString: function() {
		return "My name is " + this.name + " and I am " + this.age;
	}
});

var alice = new Person('Alice' , 26);
alert(alice.name);
alert(alice.age);
alert(alice.toString());