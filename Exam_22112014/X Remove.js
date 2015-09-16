function solve(input) {
    var result = [];
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
            if (i + 2 < input.length && j + 1 < second.length && j + 2 < third.length && j + 2 < first.length &&
                first.charAt(j) === second.charAt(j + 1) && first.charAt(j) === third.charAt(j + 2) &&
                first.charAt(j) === first.charAt(j + 2) && first.charAt(j) === third.charAt(j)) {
                continue;
            }
            if (i + 2 < input.length &&j - 2 >= 0 &&
                first.charAt(j) === second.charAt(j - 1) && first.charAt(j) === third.charAt(j - 2) &&
                first.charAt(j) === first.charAt(j - 2) && first.charAt(j) === third.charAt(j)) {
                continue;
            }
            if (i - 1 >= 0 && j - 1 >= 0 && j + 1 < second.length && j + 1 < down.length &&
                first.charAt(j) === second.charAt(j - 1) && first.charAt(j) === second.charAt(j + 1) &&
                first.charAt(j) === down.charAt(j - 1) && first.charAt(j) === down.charAt(j + 1)) {
                continue;
            }
            if (i - 2 >= 0 && j + 1 < down.length && j + 2 < first.length && j + 2 < downTwo.length &&
                first.charAt(j) === first.charAt(j + 2) && first.charAt(j) === down.charAt(j + 1) &&
                first.charAt(j) === downTwo.charAt(j) && first.charAt(j) === downTwo.charAt(j + 2)) {
                continue;
            }
            if (i - 2 >= 0 && j-1 < down.length && j < downTwo.length && j - 1 >= 0 && j - 2 >= 0 &&
                first.charAt(j) === first.charAt(j - 2) && first.charAt(j) === down.charAt(j - 1) &&
                first.charAt(j) === downTwo.charAt(j) && first.charAt(j) === downTwo.charAt(j - 2)) {
                continue;
            } else {
                str = str + input[i].charAt(j);

            }
        }
        console.log(str);
    }
    
}

console.log(solve(['abnbjs', 'xoBab', 'Abmbh', 'aabab', 'ababvvvv']));
console.log(solve(['^u^', 'j^l^a', '^w^WoWl', 'adw1w6', '(WdWoWgPoop)']));
console.log(solve(['8888888', '08*8*80', '808*888', '0**8*8?']));
