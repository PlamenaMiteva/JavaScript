function solve(input) {
    var start = parseInt(input[0]);
    var end = parseInt(input[1]);
    var link = "";
    console.log('<ul>');
    for (var i = start; i <= end; i++) {
        var temp = i.toString();
        var rakya = 'num';
        var link = "";
        for (var j = 0; j < temp.length - 1; j++) {
            var firstNumber = temp.charAt(j) + temp.charAt(j + 1);
            // console.log(firstNumber);
            var a = parseInt(firstNumber, 10);
            for (var m = j+2; m < temp.length - 1; m++) {
                var secNumber = temp.charAt(m) + temp.charAt(m + 1);
                // console.log(secNumber);
                var b = parseInt(secNumber, 10);
                if (secNumber === firstNumber) {
                    link = "<a href=\"view.php?id=" + i + ">View</a>";
                    var rakya = 'rakiya';
                    break;
                };
                // console.log("stop");
            };

        };
        console.log('<li><span class=\'' + rakya + '\'>' + i + '</span>' + link + '</li>');
    };
    console.log('</ul>');
}


console.log(solve([5, 8]));
console.log(solve([11210, 11215]));
console.log(solve([55555, 55560]));
