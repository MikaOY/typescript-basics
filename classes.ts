// TS supports classical OO programming, gets traspiled into prototypal JS

// no explicit implementation of interfaces
// as long as classes follow signature, they are compatible
interface iPerson {
    firstName: string;
    lastName: string;
}

// traditional class
class Student {
    // property declaration
    fullName: string;

    // constructor for the class instances
    // arguments marked with 'public' as shorthand tp create properties with that name
    // this class implments
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person : iPerson) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);