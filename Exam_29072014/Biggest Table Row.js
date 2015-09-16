function solve(input) {
    var result = [];
    var values = [];
    var maxSum = -100000;
    for (var i = 2; i < input.length - 1; i++) {
        var sum = 0;
        var nums = [];
        var str = input[i];
        var regex = /-?([0-9]+)(\.?[0-9]+)?/g;
        var match = regex.exec(str);
        if (match === null) {
            continue;
        }
        var number = Number(match[0]);
        nums.push(match[0]);
        sum = sum + number;
        while (match = regex.exec(str)) {
            var number = Number(match[0]);
            nums.push(match[0]);
            sum = sum + number;
        }
        if (sum > maxSum) {
            values.push(nums);
            maxSum = sum;
        }
    }
    var out = "";
    if (values.length === 0) {
        console.log("no data");
    } else {
        var output = values[values.length - 1];
        for (var i in output) {
            out += output[i] + " + ";
        }

        console.log(maxSum + " = " + out.substring(0, out.length - 3));
    }
}

console.log(solve(['<table>', '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
    '<<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
    '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
    '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
    '</table>'
]));

console.log(solve(['<table>', '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
    '</table>'
]));

console.log(solve(['<table>', '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
'<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
'<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>','</table>']));

console.log(solve(['<table>', '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>0</td><td>-</td><td>0.0</td></tr>',
'<tr><td>Yambol</td><td>-</td><td>0</td><td>-</td></tr>',
'<tr><td>Sliven</td><td>-</td><td>0</td><td>-</td></tr>',
'<tr><td>Kaspichan</td><td>0</td><td>-</td><td>-</td></tr>',
'<tr><td>Varnaxx</td><td>-</td><td>18.02</td><td>36.11</td></tr>',
'<tr><td>Plevenpp</td><td>1</td><td>-</td><td>1</td></tr>',
'<tr><td>Vidinee</td><td>-</td><td>-560</td><td>20833</td></tr>',
'<tr><td>Rousseww</td><td>-</td><td>299.999999</td><td>-</td></tr>',
'<tr><td>Bourgasmm</td><td>-</td><td>2500</td><td>-</td></tr>',
'<tr><td>Yambolqq</td><td>-</td><td>-</td><td>-</td></tr>',
'<tr><td>Plovdivee</td><td>17.2</td><td>-</td><td>6.4</td></tr>',
'<tr><td>Sofiaoo</td><td>-</td><td>1</td><td>1</td></tr>',
'<tr><td>Blagoevgradsdf</td><td>-</td><td>150</td><td>-</td></tr>','</table>']));

console.log(solve(['<table>', '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>1</td><td>1</td><td>1</td></tr>','</table>']));

