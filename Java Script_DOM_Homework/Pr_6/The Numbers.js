function solve(input) {
    var str = input[0];
    var str = str.replace(/\D/g, ' ');
    var numbers = str.split(/[ ]+/).filter(Boolean);
    var hexNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        var temp = parseInt(numbers[i]);
        var hex = temp.toString(16).toUpperCase();
        var diffrence = 4 - hex.length;
        var zero = "";
        if (diffrence != 0) {
            for (var j = 0; j < diffrence; j++) {
                var zero = zero + 0;
            }
        }
        hex = zero + hex;
        hexNumbers.push(hex);
    }
    var result = "";
    for (var m = 0; m < hexNumbers.length; m++) {
        result = result + "-" + "0x" + hexNumbers[m];
    };
    console.log(result.substring(1));

}
console.log(solve(['5tffwj(//*7837xzc2---34rlxXP%$”.']));
console.log(solve(['482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312']));
console.log(solve(['20']));
