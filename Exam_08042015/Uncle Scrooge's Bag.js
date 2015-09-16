function solve(input) {
    var result = [];
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        var temp = input[i];
        var str = temp.split(' ');
        var first = str[0].toLowerCase();
        var number = parseFloat(str[1]);
        var num = parseInt(str[1]);
        var bool = (number === num);
        if (bool && number>0&&(first === 'coin' || first === 'coins')) {
            sum += number;
        }

    }
    var goldenCoins = parseInt(sum / 100);
    var silverCoins = parseInt((sum - goldenCoins * 100) / 10);
    var bronzeCoins = parseInt(sum - goldenCoins * 100 - silverCoins * 10);
    console.log("gold : " + goldenCoins);
    console.log("silver : " + silverCoins);
    console.log("bronze : " + bronzeCoins);
}
console.log(solve(['COINS 1', 'coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50',
    'coin 100', 'coin 200', 'coin 500', 'cigars 1'
]));
