function solve(input) {    
    for (var n = 0; n < input.length; n++) {
        var str = input[n];
        for (var m = 0; m < str.length; m++) {
            if (str.charAt(m) === 'o') {
                var row = n;
                break;
            }
        }
    }
    var position = input[row].indexOf('o');
     for (var j = row + 1; j < input.length; j++) {
        var str = input[j];
        var right = 0;
        var left = 0;
        var index = 0;
        for (var i = 0; i < str.length; i++) {

            if (str.charAt(i) === '>') {
                right++;
            }
            if (str.charAt(i) === '<') {
                left++;
            }
        }
        row++;
        var index = right - left;
        var position = position + index;
        if (str.charAt(position) === '_') {
            console.log("Landed on the ground like a boss!");
            console.log(row + " " + position);
            break;
        }
        if (str.charAt(position) === '~') {
            console.log("Drowned in the water like a cat!");
            console.log(row + " " + position);
            break;
        }
        if (str.charAt(position) === '/' || str.charAt(position) === '\\' || str.charAt(position) === '|') {
            console.log("Got smacked on the rock like a dog!");
            console.log(row + " " + position);
            break;
        }
    }
}


console.log(solve(['--o----------------------', '>------------------------', '>------------------------', '>-----------------/\\-----', '-----------------/--\\----', '>---------/\\----/----\\---', '---------/--\\--/------\\--', '<-------/----\\/--------\\-', '\\------/----------------\\', '-\\____/------------------']));
console.log(solve(['-------------o-<<--------', '-------->>>>>------------', '---------------->-<---<--', '------<<<<<-------/\\--<--', '--------------<--/-<\\----', '>>--------/\\----/<-<-\\---', '---------/<-\\--/------\\--', '<-------/----\\/--------\\-', '\\------/--------------<-\\', '-\\___~/------<-----------']));
console.log(solve(['-\\----/\\------/----\\---/-', '--\\--/--\\----/-----/---|-', '---\\/----\\--/------\\--/--', '----------\\/--------\\/---', '------o------------------', '-----__-------->---------', '---~/>>\\~----------------', '--~/>>>>\\~>>>>>/\\--------', '-~/------\\~---/>>\\------/', '~/--->----\\~~/~~~~\\~~__/-']));