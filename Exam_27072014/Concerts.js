function solve(input) {
    var result = {};
    for (var i = 0; i < input.length; i++) {
        var str = input[i].split("|");
        var city = str[1].trim();
        var stadium = str[3].trim();
        var band = str[0].trim();
        if (!result[city]) {
            result[city] = {};
        }
        if (!result[city][stadium]) {
            result[city][stadium] = [];
        }
        if (result[city][stadium].indexOf(band) == -1) {
            result[city][stadium].push(band);
        }
    }
    var keys = Object.keys(result);
    keys.sort();
    var temp = {};
    for (i = 0; i < keys.length; i++) {
        var k = keys[i];
        var v = result[k];
        temp[k] = v;

    }
    var outcome = [];
    for (var key in temp) {
        var first = temp[key];
        outcome[key] = {};
        var keys = Object.keys(first);
        keys.sort();
        for (i = 0; i < keys.length; i++) {
            var k = keys[i];
            var v = temp[key][k];
            v.sort();
            outcome[key][k] = v;
        }
    }
    var counter = 0;
    var res = "";
    for (var concert in outcome) {
        var keY = Object.keys(outcome);
        var schedule = JSON.stringify(outcome[concert]);
        res = res + "\"" + keY[counter] + "\":" + schedule + ",";
        counter += 1;
    }
    res = "{"+res.substring(0, res.length - 1) + "}";
    console.log(res);
}


console.log(solve(['ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
]));
