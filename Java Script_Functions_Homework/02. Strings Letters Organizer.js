function sortLetters(string, boolean) {
    var result = [];
    for (var i in string) {
        result.push(string[i]);
    };
    if (boolean === true) {
        function cmp(x, y) {
            if (x.toLowerCase() !== y.toLowerCase()) {
                x = x.toLowerCase();
                y = y.toLowerCase();
            }
            return x > y ? 1 : (x < y ? -1 : 0);
        }
        result.sort(cmp);
        console.log(result);
    }else{
    	function cmp(x, y) {
            if (x.toLowerCase() !== y.toLowerCase()) {
                x = x.toLowerCase();
                y = y.toLowerCase();
            }
            return x < y ? 1 : (x > y ? -1 : 0);
        }
        result.sort(cmp);
        console.log(result);
    }
}
console.log(sortLetters('HelloWorld', true));
console.log(sortLetters('HelloWorld', false));
