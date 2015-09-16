function solve(input) {
    var start = parseInt(input[0]);
    var end = parseInt(input[1]);
    var i;
    var fib = []; 
    var a = 0;
    var b = 1;
    fib.push(a);
    fib.push(b);
    for (i = 0; i <= end; i++) {
        var temp = a + b;
        if(temp>=start && temp<=end){
            fib.push(temp);
        }
        a=b;
        b=temp;
    }
    console.log('<table>');
    var heading = "<tr><th>Num</th><th>Square</th><th>Fib</th></tr>";
    console.log(heading);
    for (var j = start; j <= end; j++) {
        var square = Math.pow(j, 2);
        var fibonacci = "no";
        for (var m = 0; m < fib.length; m++) {
            var num = parseInt(fib[m]);
            if (num > j) {
                break;
            }
            if (num === j) {
                fibonacci = "yes";
                break;
            }
        }
        console.log('<tr><td>' + j + '</td><td>' + square + '</td><td>' + fibonacci + '</td></tr>');
    }
    console.log('</table>');
}


console.log(solve([2, 6]));
console.log(solve([55, 56]));
console.log(solve([5, 5]));
