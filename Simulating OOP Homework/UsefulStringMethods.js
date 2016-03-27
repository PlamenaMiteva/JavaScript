String.prototype.startsWith = function(prefix) {
    return this.indexOf(prefix) === 0;
};

String.prototype.endsWith = function(suffix) {
    return this.match(suffix + "$") == suffix;
};

String.prototype.left = function(substringLength) {
    return this.substring(0, substringLength);
};

String.prototype.right = function(substringLength) {
    return this.substring(this.length - substringLength, this.length);
};

String.prototype.padLeft = function(count, character) {
	if(typeof(character) === 'undefined'){
    character = ' ';
};
    var result = character;
    for (var i = count-1; i >= 0; i--) {
    	result = result.concat(character);
    };    
    return result + this;
};

String.prototype.padRight = function(count, character) {
	if(typeof(character) === 'undefined'){
    character = ' ';
};
    var result = this;
    for (var i = count-1; i >= 0; i--) {
    	result = result.concat(character);
    };    
    return result;
};

String.prototype.repeat = function(count) {
	count = count || 1;
    return Array(count + 1).join(this);
};


var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log(example.left(9));
console.log(example.left(90));

console.log(example.right(9));
console.log(example.right(90));

var anotherExample = "abcdefgh";
console.log(anotherExample.left(5).right(2));

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
console.log("~".repeat(3));

console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));






