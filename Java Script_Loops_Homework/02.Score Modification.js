function solve(input) {

    function isValidScore(element) {
        return element <= 400 && element>=0;
    }
    function reduceScore(element) {
        return element-(element/5);
    }
    var examScores = input.filter(isValidScore);
    console.log(examScores);
    var reducedScores = examScores.map(reduceScore);
    
    reducedScores.sort(function(a, b) {
        return a > b;
    });
    console.log(reducedScores);
}
console.log(solve([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]));
