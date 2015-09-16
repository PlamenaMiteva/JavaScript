function calcSupply(input) {
    var res = input.split(" ");
    var age = parseInt(res[0], 10);
    var maxAge = parseInt(res[1], 10);
    var foodPerDay = parseFloat(res[3]);
    var food = (maxAge - age) * 365 * foodPerDay;
    var output = food+"kg of " + res[2]+ " would be enough untill I am " + maxAge+ " years old.";
    return output;
}

console.log(calcSupply("38 118 chocolate 0.5"));
console.log(calcSupply("20 87 fruits 2"));
console.log(calcSupply("16 102 nuts 1.1"));
