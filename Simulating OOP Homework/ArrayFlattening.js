Array.prototype.flatten = function(){
    var arr = [];

	function validateArray(array) {
    if (!Array.isArray(array)) {
    	return true;		
	}	
  }

	
	for (var i = 0; i < this.length; i++) {	
	    if(validateArray.call(this[i])){
	    	arr.push(this[i]);
	    };	
		for (var j = 0; j < this[i].length; j++) {
			if(validateArray.call(this[i][j])){
	    	arr.push(this[i][j]);
	    }
	   	else{
			flatten.call(this[i][j]);
		}
		};
	};

	return arr;
}

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); 

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());

