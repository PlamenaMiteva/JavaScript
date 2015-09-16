function solve(input) {
    var result = {};
    for (var i = 0; i < input.length - 1; i++) {
        var tokens = input[i].split(/\.*\*\.*/);
        var student = tokens[0];
        var luggage = tokens[1];
        var food = tokens[2];
        var drink = tokens[3];
        var fragile = tokens[4];
        if (fragile === 'false') {
            var frag = false;
        };
        if (fragile === 'true') {
            var frag = true;
        };
        var weight = parseFloat(tokens[5]);
        var transport = tokens[6];
        if (food === 'false' && drink === 'false') {
            var type = 'other';
        };
        if (food === 'true' && drink === 'false') {
            var type = 'food';
        };
        if (food === 'false' && drink === 'true') {
            var type = 'drink';
        };
        if (!result[student]) {
            result[student] = {};
        }
            result[student][luggage] = {};
            result[student][luggage]["kg"] = weight;
            result[student][luggage]["fragile"] = frag;
            result[student][luggage]["type"] = type;
            result[student][luggage]["transferredWith"] = transport;
        
    }
    if (input[input.length - 1] === 'luggage name') {
        for (var student in result) {
            for (var luggage in result[student]) {
                result[student] = sortObjectProperties(result[student]);
            };
        };
        console.log(JSON.stringify(result));
    }
    if (input[input.length - 1] === 'weight') {
        var outputKgSort = {};
        Object.keys(result).forEach(function(key) {
            outputKgSort[key] = {};

            var a = Object.keys(result[key]).sort(function(a, b) {
                console.log(result[key][a].kg);
                return result[key][a].kg - result[key][b].kg;
            });
            a.forEach(function(value) {
                outputKgSort[key][value] = result[key][value];
            })
        });
         console.log(JSON.stringify(outputKgSort))

    }
    if (input[input.length - 1] === 'strict') {
        console.log(JSON.stringify(result));
    }


    function sortObjectProperties(obj) {
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i = 0; i < keysSorted.length; i++) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }

}


console.log(solve(['Yana Slavcheva*....clothes*....false*....false*....false*....2.2*....backpack',
    'Kiko*....socks*....false*....false*....false*....0.2*....backpack',
    'Kiko*....sticks*....false*....false*....false*....1.6*....ATV',
    'Kiko*....sheets*....false*....false*....false*....3.6*....backpack',
    'Kiko*....banana*....true*....false*....false*....3.2*....backpack',
    'Kiko*....glasses*....false*....false*....true*....0.2*....ATV',
    'Kiko*....glasses*....false*....false*....true*....3*....ATV',
    'Manov*....socks*....false*....false*....false*....0.3*....ATV',
    'weight'
]));
