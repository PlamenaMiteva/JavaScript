function extractObjects(array) {
    var result = [];
    for (var i in array) {
        var type = typeof array[i];
        if (type == 'object' && Object.prototype.toString.call(array[i]) != '[object Array]') {

            result.push(array[i]);
        };
    }
    console.log(result);
}

console.log(extractObjects(["Pesho", 4, 4.21, {
        name: 'Valyo',
        age: 16
    }, {
        type: 'fish',
        model: 'zlatna ribka'
    },
    [1, 2, 3], "Gosho", {
        name: 'Penka',
        height: 1.65
    }
]));
