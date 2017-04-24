
// Variables and data types

// declare variables and type with ':'
let TianLikesMe: boolean = true;
let integer: number = 666;
// single and double quotes allowed for strings
let hat: string = "Akubra";
let computer: string = 'Macbook';
// multi-line strings with expressions surrounded with `
let p: string = `There are many hats.
                    But my ${hat} is the best.`;
// variables with undeclared types (traditional JS)
let mouse: any = false;
mouse = "Anker";
let mess: any[] = [1, true, "free"];
// type 'void' can only be assigned 'undefined' or null
let hard: void = null;

// arrays supported, like JS
// two ways to declare
let list: number[] = [6,6,6];
let sameList: Array<number> = [6,6,6];

// tuples
let x: [string, number] = ["apples", 5];

// enums
enum Color {Green, Indigo, Violet};
enum Car {Camaro = 1, Maserati, Mercedez};
let carColor: [Car, Color] = [Car.Maserati, Color.Indigo];
let pricyCar: string = Car[2]; // "Maserati"

// type casting assures compiler of type
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // use with < >
let len: number = (someValue as string).length; // or with 'as'