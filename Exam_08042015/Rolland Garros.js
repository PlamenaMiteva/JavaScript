function solve(input) {
    var result = {};
    var gameResults = [];
    for (var i in input) {
        var tokens = input[i].split(/vs./);
        var player = tokens[0].trim();
        var temp = tokens[1].split(/:/);
        var secPlayer = temp[0].trim();
        var games = temp[1].trim().split(/\s/);
        for (var a in games) {
            var res = games[a].split(/-/);
            var first = Number(res[0]);
            var sec = Number(res[1]);
        }
        if (!result["name"]||result.name!=player ) {
            result = {}; 
            result.name=player;           
        }
        if (result.name != secPlayer) {
             result = {};
            result.name = secPlayer;
        }
        
    }
    console.log(result);
}
console.log(solve(['Novan Djokovic  vs. Roger Federer: 6-3 6-3', 'Novan Djokovic  vs. Roger Federer: 6-3 6-3']));
