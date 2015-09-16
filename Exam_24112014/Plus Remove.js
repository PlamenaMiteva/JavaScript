function solve(input) {    
    for (var i = 0; i < input.length; i++) {
        var first = input[i].toLowerCase();
        if (i + 1 < input.length) {
            var second = input[i + 1].toLowerCase();
        }
        if (i + 2 < input.length) {
            var third = input[i + 2].toLowerCase();
        }
        if (i - 1 >= 0) {
            var down = input[i - 1].toLowerCase();
        }
        if (i - 2 >= 0) {
            var downTwo = input[i - 2].toLowerCase();
        }
        var str = "";
        for (var j = 0; j < first.length; j++) {            
            if (i + 2 < input.length && j + 1 < second.length && j -1 >=0 &&
                first.charAt(j) === second.charAt(j + 1) && first.charAt(j) === second.charAt(j) &&
                first.charAt(j) === second.charAt(j-1) && first.charAt(j) === third.charAt(j)) {
                continue;
            }
            if (i + 1 < input.length &&i-1>=0&&j+2<first.length&&j+1<second.length&& j+1<down.length&&
                first.charAt(j) === first.charAt(j + 1) && first.charAt(j) === first.charAt(j + 2) &&
                first.charAt(j) === second.charAt(j +1) && first.charAt(j) === down.charAt(j+1)) {
                continue;
            }
            if (i + 1 < input.length&&i - 1 >= 0 && j - 1 >= 0 && j + 1 < first.length && j < down.length &&j < second.length&&
                first.charAt(j) === first.charAt(j - 1) && first.charAt(j) === first.charAt(j + 1) &&
                first.charAt(j) === second.charAt(j) && first.charAt(j) === down.charAt(j)) {
                continue;
            }
            if (i + 1 < input.length&&i - 1 >= 0 && j-1 >= 0 && j - 2 >= 0 && j-1 < down.length &&j-1 < second.length&&
                first.charAt(j) === first.charAt(j - 1) && first.charAt(j) === first.charAt(j -2) &&
                first.charAt(j) === second.charAt(j-1) && first.charAt(j) === down.charAt(j-1)) {
                continue;
            }
            if (i - 2 >= 0 && j-1 < down.length && j < downTwo.length && j - 1 >= 0 && j+1<down.length&&
                first.charAt(j) === down.charAt(j - 1) && first.charAt(j) === down.charAt(j) &&
                first.charAt(j) === down.charAt(j+1) && first.charAt(j) === downTwo.charAt(j)) {
                continue;
            } else {
                str = str + input[i].charAt(j);

            }
        }
        console.log(str);
    }
    
}

console.log(solve(['ab**l5', 'bBb*555', 'absh*5', 'ttHHH', 'ttth']));
console.log(solve(['888**t*', '8888ttt', '888ttt<<', '*8*0t>>hi' ]));
