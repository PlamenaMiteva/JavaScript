function solve(input) {
    for (var i = 0; i < input.length; i++) {
        var sentence = input[i]; 
        var str = sentence.split(" ");      
        var carModel = str[0];
        var fuelType = str[1];
        var route = parseInt(str[2]);        
        var luggage = parseFloat(str[3]);
        if (route === 1) {
            var base = 10;
            var lenght =110;
            var snowDistance =10;
        }
        if (route === 2) {
            var base = 9.5;
            var lenght =95;
            var snowDistance =30;
        }
        if (fuelType === "gas") {
            var fuelConsumtion = (1.2*base)+(0.01*luggage);            
            var totalConsumtion=lenght*(fuelConsumtion/(base*10));            
            var finalConsumtion = totalConsumtion+(snowDistance*((0.3*fuelConsumtion)/(base*10)));
            
        } 
        if (fuelType === "petrol") {
            var fuelConsumtion = base +(0.01*luggage);
            var totalConsumtion=lenght*(fuelConsumtion/(base*10));
            var finalConsumtion = totalConsumtion+(snowDistance*((0.3*fuelConsumtion)/(base*10)));
        } 
        if (fuelType === "diesel") {
            var fuelConsumtion = (0.8*base)+(0.01*luggage);
            var totalConsumtion=lenght*(fuelConsumtion/(base*10));
            var finalConsumtion = totalConsumtion+(snowDistance*((0.3*fuelConsumtion)/(base*10)));
        }
        var result = Math.round(finalConsumtion);
        console.log(carModel + " " + fuelType +" " + route +" " + result);
    }
}


console.log(solve(['Lada gas 1 202']));
