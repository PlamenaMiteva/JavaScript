function solve(input) {
    var str = '25.05.1973';
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    var importantDate = new Date(str.replace(pattern, '$3-$2-$1'));
    var start = '01.01.1900';
    var startDate = new Date(start.replace(pattern, '$3-$2-$1'));
    var end = '01.01.2015';
    var endDate = new Date(end.replace(pattern, '$3-$2-$1'));
    var maxDate = new Date(importantDate);
    var minDate = new Date(importantDate);
    var maxCounter = 0;
    var minCounter = 0;
    for (var i = 0; i < input.length; i++) {
        var str = input[i];
        var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        var dt = new Date(str.replace(pattern, '$3-$2-$1'));
        if (dt > startDate && dt < endDate) {
            if (dt >= maxDate) {
                var maxDate = new Date(dt);
                var maxCounter = maxCounter + 1;
            }
            if (dt < minDate) {
                var minDate = new Date(dt);
                var minCounter = minCounter + 1;
            }
        }
    }
    if (maxCounter > 0) {
        console.log("The biggest fan of ewoks was born on " + maxDate.toDateString());
    }
    if (minCounter > 0) {
        console.log("The biggest hater of ewoks was born on " + minDate.toDateString());
    } if (maxCounter === 0 && minCounter === 0) {
        console.log("No result");
    }

}


console.log(solve(['22.03.2014', '17.05.1933', '10.10.1954']));
console.log(solve(['22.03.2000']));
console.log(solve(['22.03.1700', '01.07.2020']));
