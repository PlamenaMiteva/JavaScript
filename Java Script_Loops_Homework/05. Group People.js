function solve(input) {
    var people = [];
    var person = {
        firstName: "Scott",
        lastName: "Guthrie",
        age: 38
    };
    var person1 = {
        firstName: "Scott",
        lastName: "Johnes",
        age: 36
    };
    var person2 = {
        firstName: "Scott",
        lastName: "Hanselman",
        age: 39
    };
    var person3 = {
        firstName: "Jesse",
        lastName: "Liberty",
        age: 57
    };
    var person4 = {
        firstName: "Jon",
        lastName: "Skeet",
        age: 38
    };

    people.push(person);
    people.push(person1);
    people.push(person2);
    people.push(person3);
    people.push(person4);

    var str = input.split("'");
    var func = str[1];
    var result = {};
    if (func === 'firstName') {
        for (var i = 0; i < people.length; i++) {         	
            var name = "Group " + people[i].firstName;
            var temp= "" + people[i].firstName +" "+ people[i].lastName +" " +"(age " + people[i].age +")";
            if (!result[name]) {
                result[name] = [];
                result[name].push(temp);
            }else{
            	result[name].push(temp);
            }
        }

    }
    if (func === 'lastName') {
        for (var i = 0; i < people.length; i++) {         	
            var name = "Group " + people[i].lastName;
            var temp= "" + people[i].firstName +" "+ people[i].lastName +" " +"(age " + people[i].age +")";
            if (!result[name]) {
                result[name] = [];
                result[name].push(temp);
            }else{
            	result[name].push(temp);
            }
        }

    }
    if (func === 'age') {
        for (var i = 0; i < people.length; i++) {         	
            var name = "Group " + people[i].age;
            var temp= "" + people[i].firstName +" "+ people[i].lastName +" " +"(age " + people[i].age +")";
            if (!result[name]) {
                result[name] = [];
                result[name].push(temp);
            }else{
            	result[name].push(temp);
            }
        }

    }
console.log(result);

}

console.log(solve('groupBy(\'firstName\');'));
console.log(solve('groupBy(\'age\');'));
console.log(solve('groupBy(\'lastName\');'));
