function solve(input) {
    var index = -1;
    for (var key in input) {
        index++;
        var str = input[key];
        var num = parseInt(str.score);
        var fname = str.name;
        num = num + num / 10;
        str.score = num;
        if (num >= 100) {
            str.hasPassed = "true";
        } else {
            delete input[index];
        }


    }
    var byName = input.slice(0);
    byName.sort(function(a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
    for (var idx in byName) {
        var temp = JSON.stringify(byName[idx]);
        console.log(temp);
    }

}
console.log(solve([{
    'name': 'Пешо',
    'score': 91
}, {
    'name': 'Лилия',
    'score': 290
}, {
    'name': 'Алекс',
    'score': 343
}, {
    'name': 'Габриела',
    'score': 400
}, {
    'name': 'Жичка',
    'score': 70
}]));
