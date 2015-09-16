var people = [{
    firstname: 'George',
    lastname: 'Kolev',
    age: 32,
    hasSmartphone: false
}, {
    firstname: 'Vasil',
    lastname: 'Kovachev',
    age: 40,
    hasSmartphone: true
}, {
    firstname: 'Bay',
    lastname: 'Ivan',
    age: 81,
    hasSmartphone: true
}, {
    firstname: 'Baba',
    lastname: 'Ginka',
    age: 40,
    hasSmartphone: false
}];
people.sort(findYoungestPerson);

function findYoungestPerson(arr) {
    function compare(a, b) {
        if (a.age < b.age)
            return -1;
        if (a.age > b.age)
            return 1;
        return 0;
    }
}
    for (var i in people) {        
        if (people[i].hasSmartphone === true) {
            var result = people[i].firstname + " " + people[i].lastname;
            break;
        }
    }
    console.log("The youngest person is " + result);

