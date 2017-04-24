
// Functions

// return type after ':'
function warnUser(): void {
    alert("This is my warning message");
}

// 'never' is a type that never occurs
// can be return type of function that never returns
function infiniteLoop(): never {
    while (true) {
    }
}