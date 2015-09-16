function solve(input) {
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    var firstNum = parseFloat(input[0]);
    var firstNumber = firstNum.toFixed(2);
    console.log('<tr><td>' + firstNumber + '</td><td><img src="fixed.png"/></td></td>');

    for (var i = 1; i < input.length; i++) {
        var secNum = parseFloat(input[i]);
        var num = secNum.toFixed(2);
        if (num > firstNumber) {
            console.log('<tr><td>'+ num + '</td><td><img src="up.png"/></td></td>');
        } else if (num < firstNumber) {
            console.log('<tr><td>' + num + '</td><td><img src="down.png"/></td></td>');
        } else {
            console.log('<tr><td>' + num + '</td><td><img src="fixed.png"/></td></td>');
        }
        var firstNumber = num;
    }
    console.log('</table>');
}


console.log(solve([50, 60]));
console.log(solve([36.333, 36.5, 37.019, 35.4, 35, 35.001, 36.225]));
