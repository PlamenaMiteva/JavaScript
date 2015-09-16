function solve(input) {
    var bill = parseFloat(input[0]);
    var mood = input[1];
    if (mood==='happy') {
        var tip = bill/10;
        console.log(tip.toFixed(2));
    }
    else if (mood==='married') {
        var tip = (bill*5)/10000;
        console.log(tip.toFixed(2));
    }
    else if (mood==='drunk') {
        var tip = (bill*15)/100;
        var str= tip.toString();
        var rate = str.charAt(0);
        var n = parseInt(rate);
        tip = Math.pow(tip, n);
        console.log(tip.toFixed(2));
    }
    else{
       var tip = (bill*5)/100;
        console.log(tip.toFixed(2)); 
    }
}


console.log(solve([120.44, 'happy']));
console.log(solve([1230.83, 'drunk']));
console.log(solve([716.00, 'bored']));
