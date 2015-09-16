function solve(input) {
    var result = {};
    for (var i in input) {
        var tokens = input[i].split(/[\-\/:]+/);
        var country = tokens[0].trim();
        var land = tokens[1].trim();
        var goal = Number(tokens[2].trim());
        var score = Number(tokens[3].trim());
        if (!result[country]) {
            result[country] = {
                "goalsScored": 0,
                "goalsConceded": 0,
                "matchesPlayedWith": []
            };
        }
        if (result[country]["matchesPlayedWith"].indexOf(land) == -1) {
            result[country]["matchesPlayedWith"].push(land);
        }
        var points = Number(result[country].goalsScored) + goal;
        result[country].goalsScored = points;
        var point = Number(result[country]["goalsConceded"]) + score;
        result[country]["goalsConceded"] = point;
        if (!result[land]) {
            result[land] = {
                "goalsScored": 0,
                "goalsConceded": 0,
                "matchesPlayedWith": []
            };
        }
        if (result[land]["matchesPlayedWith"].indexOf(country) == -1) {
            result[land]["matchesPlayedWith"].push(country);
        }
        var goals = Number(result[land].goalsScored) + score;
        result[land].goalsScored = goals;
        var p = Number(result[land]["goalsConceded"]) + goal;
        result[land]["goalsConceded"] = p;

    }
    result = sortObjectProperties(result);
    for (var country in result) {    
        for (var land in result[country]["matchesPlayedWith"]) {
            result[country]["matchesPlayedWith"].sort();
        }
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
    console.log(JSON.stringify(result));
}


console.log(solve(['Germany / Argentina: 1-0', 'Brazil / Netherlands: 0-3',
    'Netherlands / Argentina: 0-0', 'Brazil / Germany: 1-7', 'Argentina / Belgium: 1-0',
    'Netherlands / Costa Rica: 0-0', 'France / Germany: 0-1', 'Brazil / Colombia: 2-1'
]));
