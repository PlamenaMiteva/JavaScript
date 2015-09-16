function solve(input) {
    var result = [];
    var numbers = [];
    var letters = [];
    var names = [];
    var winner = "";
    var numberOfJumps = parseInt(input[0]);
    var trackLength = parseInt(input[1]);
    var str = "";
    for (var a = 0; a < trackLength; a++) {
        str = str + "#";
    }
    console.log(str);
    console.log(str);
    for (var i = 2; i < input.length; i++) {
        result.push(0);
        var temp = input[i].split(',');
        var firstName = temp[0];
        names.push(firstName);
        var number = parseInt(temp[1]);
        numbers.push(number);
        var name = firstName[0].toUpperCase();
        letters.push(name);
    }

    var counter = 0;
    for (var j = 0; j < numberOfJumps; j++) {
        
        for (var i = 0; i < numbers.length; i++) {
            var position = result[i] + numbers[i];
            result[i] = position;

            if (position >= trackLength - 1) {
                result[i] = trackLength - 1;
                winner = names[i];
                counter = counter + 1;
                break; 
            }
        }
        if (counter > 0) {
        break;
        };
    }

    var matrix = [];
    for (var i = 0; i < input.length - 2; i++) {
        var arr = [];
        for (var j = 0; j < trackLength; j++) {
            arr.push('.');
        }
        matrix.push(arr);
    }
    var row = 0;
    for (var m = 0; m < result.length; m++) {
        var col = result[m];
        matrix[row][col] = letters[m];
        row++;
    }

    for (var i = 0; i < matrix.length; i++) {
        var output = "";
        for (var j = 0; j < trackLength; j++) {
            output = output + matrix[i][j];
        }
        console.log(output);

    }
    console.log(str);
    console.log(str);

    if (counter > 0) {
        console.log("Winner: " + winner.trim());
    }
    if (counter <= 0) {
        var max = 0;
        for (var h = 0; h < result.length; h++) {
            var num = result[h];
            if (num >= max) {
                winner = names[h];
                max=num;
            }if (max===0) {            
                winner = names[h];
            }

        }
        
        console.log("Winner: " + winner.trim());
    }
}
console.log(solve(['3', '10', 'cura, 2', 'Pepi, 2', 'UlTraFlea, 1', 'BOIKO, 1']));
 // console.log(solve(['10', '19', 'angel, 10', 'Boris, 10', 'Georgi, 3', 'Dimitar, 7']));
