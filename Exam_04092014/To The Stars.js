function solve(input) {
    var n = parseInt(input[4]);
    var normandy = input[3].split(" ");
    var x = parseFloat(normandy[0]);
    var y = parseFloat(normandy[1]);
    var temp = input[0].split(" ");
    var planet1 = temp[0].toLowerCase();
    var x1 = parseFloat(temp[1]);
    var y1 = parseFloat(temp[2]);
    var tempo = input[1].split(" ");
    var planet2 = tempo[0].toLowerCase();
    var x2 = parseFloat(tempo[1]);
    var y2 = parseFloat(tempo[2]);
    var temporary = input[2].split(" ");
    var planet3 = temporary[0].toLowerCase();
    var x3 = parseFloat(temporary[1]);
    var y3 = parseFloat(temporary[2]);
    
    for (var i = 0; i < n+1; i++) {
        if (x >= x1 - 1 && x <= x1 + 1 && y >= y1 - 1 && y <= y1 + 1) {
            console.log(planet1);
        }
        else if (x >= x2 - 1 && x <= x2 + 1 && y >= y2 - 1 && y <= y2 + 1) {
            console.log(planet2);
        }
        else if (x >= x3 - 1 && x <= x3 + 1 && y >= y3 - 1 && y <= y3 + 1) {
            console.log(planet3);
        } else {
            console.log("space");
        }
        y = y + 1;
    }

}

console.log(solve(['Sirius 3 7',
    'Alpha-Centauri 7 5',
    'Gamma-Cygni 10 10',
    '8 1',
    '6'
]));
console.log(solve(['Terra-Nova 16 2',
'Perseus 2.6 4.8',
'Virgo 1.6 7',
'2 5',
'4'
]));