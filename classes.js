// TS supports classical OO programming, gets traspiled into prototypal JS
// traditional class
var Student = (function () {
    // constructor for the class instances
    // arguments marked with 'public' as shorthand tp create properties with that name
    // this class implments
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
