function solve(a, b, c) {
    var discriminant = Math.pow(b, 2) - (4 * a * c);
    if (discriminant > 0) {
        var x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var result = "x1 = " + x1 +"\n"+"x2 = " + x2;
    } else if (discriminant === 0) {
        var x = -b / (2 * a);
        var result = "x = " + x;
    }else{
    	var result = "No real roots"
    }
    return result
}

console.log(solve(2, 5, -3));
console.log(solve(2, -4, 2));
console.log(solve(4, 2, 1));
