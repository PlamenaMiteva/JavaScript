function solve (input){    
    var radius = parseInt(input[0]);
    var height = parseInt(input[1]);
    var volume=Math.PI*height*Math.pow(radius,2);
    return volume.toFixed(3);
}

console.log(solve([2, 4]));
console.log(solve([5, 8]));
console.log(solve([12, 3]));