function User(name, id) {
    this.name = name;
    this.id = id;
}

var Employee = function(name) {
    this.name = name;
};


var subhankar = new User("Subhankar", 1);
console.log(subhankar);


var emp1 = new Employee("CDAC");
console.log(emp1);