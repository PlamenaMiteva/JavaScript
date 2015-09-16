function solve(input) {
    var temp = input[0].substring(7, input[0].length - 1);
    var rotate = parseInt(temp);
    input.splice(0, 1);
    var longest = input.reduce(function(a, b) {
        return a.length > b.length ? a : b;
    });
    var maxLength = longest.length;
    var matrix = [];
    var matrixRight = [];
    var matrixReverse = [];
    var matrixLeft = [];
    for (var i = 0; i < input.length; i++) {
        matrix[i] = new Array(maxLength);
    }
    for (var m = 0; m < input.length; m++) {
        var str = input[m];
        var arr = matrix[m];
        for (var n = 0; n < str.length; n++) {
            var letter = str.charAt(n);
            arr[n] = letter;
        }
    }
    if ((rotate / 90) % 4 === 0) {
        matrix.forEach(function(entry) {
            var temp = entry.join("");
            console.log(temp.toString());
        })
    }

    if ((rotate / 90) % 4 === 1) {
        for (var r = 0; r < maxLength; r++) {
            var tempArr = [];
            for (var p = matrix.length - 1; p >= 0; p--) {
                var a = matrix[p];
                var b = a[r];
                if (b === undefined) {
                    tempArr.push(' ');
                } else {
                    tempArr.push(b);
                }
            }
            matrixRight.push(tempArr);
        }
        matrixRight.forEach(function(entry) {
            var temp = entry.join("");
            console.log(temp.toString());
        })
    }
    if ((rotate / 90) % 4 === 2) {

        for (var z = matrix.length - 1; z >= 0; z--) {
            var line = matrix[z];
            var arr = [];
            for (var h = maxLength - 1; h >= 0; h--) {
                var letter = line[h];
                if (letter === undefined) {
                    arr.push(' ');
                } else {
                    arr.push(letter);
                }

            }
            matrixReverse.push(arr);

        }

        matrixReverse.forEach(function(entry) {
            var temp = entry.join("");
            console.log(temp.toString());
        })
    }
    var index= maxLength;
    if ((rotate / 90) % 4 === 3||rotate / 90===3) {
        for (var r = 0; r < maxLength; r++) {
            var tempArr = [];
            var index= index-1;
            for (var p = 0; p < input.length; p++) {
                var a = matrix[p];
                var b = a[index];
                if (b === undefined) {
                    tempArr.push(' ');
                } else {
                    tempArr.push(b);
                }
                
            }
            matrixLeft.push(tempArr);
            
        }
        matrixLeft.forEach(function(entry) {
            var temp = entry.join("");
            console.log(temp.toString());
        })

    }
}

console.log(solve(['Rotate(90)', 'hello', 'softuni', 'exam']));
console.log(solve(['Rotate(0)', 'js', 'exam']));
console.log(solve(['Rotate(180)', 'hello', 'softuni', 'exam']));
console.log(solve(['Rotate(270)', 'hello', 'softuni', 'exam']));
