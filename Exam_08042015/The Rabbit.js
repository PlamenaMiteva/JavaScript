function solve(input) {
    var result = [];
    var directions = [];
    var temp = input[0].split(',');
    for (var a in temp) {
        var str = temp[a].trim();
        directions.push(str)
    }
    var colLength = input[1].split(',').length;
    var matrix = [];
    for (var i = 1; i < input.length; i++) {
        var sentence = input[i].split(',');
        var arr = [];
        for (var word in sentence) {
            arr.push(sentence[word]);

        };
        matrix.push(arr);
    }
    var row = 0;
    var col = 0;
    var wall = 0;
    var carrots = 0;
    var cabbage = 0;
    var lettuce = 0;
    var turnip = 0;
    var count = 0;

    for (var j = 0; j < directions.length; j++) {
        var change = 0;
        var dir = directions[j].toString();

        if (dir === 'right') {
            col = col + 1;
        }
        if (dir === 'left') {
            col = col - 1;
        }
        if (dir === 'up') {
            row = row - 1;
        }
        if (dir === 'down') {
            row = row + 1;
        }
        if (row < 0) {
            wall = wall + 1;
            row += 1;
            count += 1;
        } else {
            change += 1;
        }
        if (row >= colLength) {
            wall = wall + 1;
            row -= 1;
            count += 1;
        } else {
            change += 1;
        }
        if (col < 0) {
            wall = wall + 1;
            col += 1;
            count += 1;
        } else {
            change += 1;
        }
        if (col >= input.length - 1) {
            wall = wall + 1;
            col -= 1;
            count += 1;
        } else {
            change += 1;
        }
        
            var veg = matrix[row][col];

            for (var i = 0; i < veg.length; i++) {
                var letter = veg[i];
                if (letter === '#' && veg[i - 1] === '{' && veg[i + 1] === '}') {
                    turnip += 1;
                };
                if (letter === '!' && veg[i - 1] === '{' && veg[i + 1] === '}') {
                    carrots += 1;
                };
                if (letter === '*' && veg[i - 1] === '{' && veg[i + 1] === '}') {
                    cabbage += 1;
                };
                if (letter === '&' && veg[i - 1] === '{' && veg[i + 1] === '}') {
                    lettuce += 1;
                };
            };
            veg = veg.replace('{!}', '@');
            veg = veg.replace('{*}', '@');
            veg = veg.replace('{&}', '@');
            veg = veg.replace('{#}', '@');
            matrix[row][col] = veg;
            if (count === 0) {
                result.push(veg);
            }
            count = 0;
        
    }
if (input.length===2&&colLength===1) {
lettuce=0;
carrots=0;
cabbage=0;
turnip=0;
}
    var output = "";
    console.log("{\"&\"" + ":" + lettuce + ",\"*\":" + cabbage + ",\"\#\":" + turnip + ",\"!\":" + carrots + ",\"wall hits\":" + wall + "}");
    if (result.length === 0) {
        console.log("no");
    } else {
        for (var put in result) {
            output = output + result[put].trim() + "|";
        }
        console.log(output.substring(0, output.length - 1));
    }

}
console.log(solve(['up, right, left, down', 'as{!}xnk']));
// console.log(solve(['right, up, up, down', 'asdf, as{#}aj{g}dasd, kildk{}fdffd, jdflk{#}jdfj',
//     'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip', 'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'
// ]));
