function solve(input) {
    var result = {};
    for (var i in input) {
        var tokens = input[i].split('|');
        var color = tokens[0];
        var sec = tokens[1];
        var third = tokens[2];

        if (!result[color]) {
            result[color] = {
                "age": null,
                "name": null,
                "opponents": [],
                "rank": [1, 1]
            }
        }
        if (sec === 'age') {
            result[color]["age"] = third;
        }
        if (sec === 'name') {
            result[color]["name"] = third;
        }
        if (sec === 'win') {
            result[color]["opponents"].push(third);
            result[color]["rank"][0] += 1;
        }
        if (sec === 'loss') {
            result[color]["opponents"].push(third);
            result[color]["rank"][1] += 1;
        }

    }

    for (var color in result) {
        for (var opponent in result[color]["opponents"]) {
            result[color]["opponents"].sort();
        }
    }
    for (var color in result) {
        var arr = result[color]["rank"];
        var number = Number(arr[0]) / Number(arr[1]);
        result[color]["rank"] = number.toFixed(2);

    }

for (var color in result) {        
        if(result[color]["age"] === null || result[color]["name"] === null){
            delete result[color];
        }

    }
    result = sortObjectProperties(result);
    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
    console.log(JSON.stringify(result));

}

console.log(solve(['purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
]));
