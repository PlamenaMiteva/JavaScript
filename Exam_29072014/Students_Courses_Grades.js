function solve(input) {
    var result = {};
    for (var i in input) {
        var tokens = input[i].split('|');
        var student = tokens[0].trim();
        var subject = tokens[1].trim();
        var grade = parseFloat(tokens[2].trim());
        var visit = Number(tokens[3].trim());
        if (!result[subject]) {
            result[subject] = {
                "avgGrade": [],
                "avgVisits": [],
                "students": []
            };
        }
        if (result[subject]["students"].indexOf(student) == -1) {
            result[subject]["students"].push(student);
        }
        result[subject]["avgGrade"].push(grade);
        result[subject]["avgVisits"].push(visit);

    }

    for (var subject in result) {
        var count = 0;
        var sumGrades = 0;
        for (var i in result[subject]["avgGrade"]) {
            var sumGrades = sumGrades + result[subject]["avgGrade"][i];
            count++;
        }
        var temp = (sumGrades / count).toFixed(2);
        result[subject]["avgGrade"] = parseFloat(temp);
    }
    for (var subject in result) {
        var count = 0;
        var sumVisits = 0;
        for (var i in result[subject]["avgVisits"]) {
            sumVisits = sumVisits + result[subject]["avgVisits"][i];
            count++;
        }
        var temp = (sumVisits / count).toFixed(2);
        temp = temp.replace(/\.?0+$/, '');
        result[subject]["avgVisits"] = Number(temp);
    }
    result = sortObjectProperties(result);
    for (var subject in result) {
        for (var land in result[subject]["students"]) {
            result[subject]["students"].sort();
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


console.log(solve(['Peter Nikolov | PHP  | 5.50 | 8',
    'Maria Ivanova | Java | 5.83 | 7',
    'Ivan Petrov   | PHP  | 3.00 | 2',
    'Ivan Petrov   | C#   | 3.00 | 2',
    'Peter Nikolov | C#   | 5.50 | 8',
    'Maria Ivanova | C#   | 5.83 | 7',
    'Ivan Petrov   | C#   | 4.12 | 5',
    'Ivan Petrov   | PHP  | 3.10 | 2',
    'Peter Nikolov | Java | 6.00 | 9',
    'Peter Nikolov | Java | 6.00 | 3'
]));
