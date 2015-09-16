function solve(input) {
    var numbers = [];
    for (var index in input) {
        var type = typeof(input[index]);
        if (type === 'number') {
            numbers.push(input[index]);
        }
    }
    numbers.sort(function(a, b) {
        return a < b;
    });
    var maxNum = numbers[0];
    var minNum = numbers[numbers.length - 1];
    console.log("Min number: " + minNum);
    console.log("Max number: " + maxNum);
    
    function MostFrequentNumber(arr) {
        var maxFr = 1;
        for (var i = 0; i < arr.length; i++) {
            var freq = 1;
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    freq++;
                }else{
                    break;
                }
            }
            if (freq>maxFr) {
                maxFr=freq;
                var frNum= arr[i];
            }
        }
        return frNum;
    }
    console.log("Most frequent number: " + MostFrequentNumber(numbers));
    console.log(numbers);
}
console.log(solve(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", {
        bunniesCount: 10
    },
    [10, 20, 30, 40]
]));
