function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Person.prototype.name = function(){
    	return this.firstName + " " + this.lastName;
    }
}

var peter = new Person("Peter", "Jackson");
console.log(peter.name());
console.log(peter.firstName);
console.log(peter.lastName);

var maria = new Person("Maria", "Ivanova");
console.log(maria.name());
console.log(maria.firstName);
console.log(maria.lastName);

