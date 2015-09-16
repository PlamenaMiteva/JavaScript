function solve(input) {
    var a= input;
    var c= a;
    var b = (function clone(obj) {

    if (obj == null || typeof(obj) != 'object')
        return obj;

    var objCopy = obj.constructor(); // changed

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = clone(obj[key]);
        }
    }
    return objCopy;
});

    function compareObjects(obj, objCopy) {
        if (obj == objCopy) {
            console.log(true);
        } else {
            console.log(false);
        }

    }
    compareObjects(a, b);
    compareObjects(a, c);
}


console.log(solve({
    name: 'Pesho',
    age: 21
}));

