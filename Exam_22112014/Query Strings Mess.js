function solve(input) {
    for (var i = 0; i < input.length; i++) {
        var str = input[i].split(/(?:&|\?)+/);
        var result = {};
        for (var j = 0; j < str.length; j++) {
            var temp = str[j].replace(/%20/g, ' ');
            var temp = temp.replace(/\+/g, ' ');
            temp = temp.split('=');
            if (temp.length > 1) {
                var key = temp[0].trim();
                var value = temp[1].trim();
                value = value.replace(/\s+/g, ' ');
                if (!result[key]) {
                    result[key] = [];
                };
                result[key].push(value);
            };
        };
        var output = "";
        for (var key in result) {
            output = output + key + "=" + "[";
            var star = result[key].length;
            if (star > 1) {
                for (var value in result[key]) {
                    output = output + result[key][value] + "," + " ";
                }

                output = output.substring(0, output.length - 2) + "]";
            } else {
                for (var value in result[key]) {
                    output = output + result[key][value] + "]";
                }
            }
        }
        console.log(output);
    }
}

console.log(solve(['foo=%20%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
]));

console.log(solve(['fantasy=lord%20of%the%rings&fantasy=the%20%20hobbit&fantasy=harry+potter+and++++the+++deathly%20hallows%20&autor=j.k.rowling&autor=j.r.r.tolkien',
'fantasy=a%20%20dance+with+the+drag000ns&shitbooks=twilight+++'
]));
