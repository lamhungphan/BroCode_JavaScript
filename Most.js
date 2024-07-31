let text = "JavaScript is a dynamic programming language";
console.log(text)

//------------------------------DECLARE VARIABLE
const float = 0.3;      //Constant
let name = 'Hung'       //String Literal
let age = 25;           //Number Literal
let isApproved = false; //Boolean Literal
let firstName = undefined;
let lastName = null;
var hoisting = 'you should declare first' ;


//------------------------------OBJECT
let person = {
    name: 'Phan',
    age: 25
};
//Dot notation
person.name = 'Hung Phan';

//Bracket notation
person['name'] = 'Phan Lam Hung';
let selection = 'age'
person[selection] = 30

console.log(person);


//------------------------------ARRAY
let selectedColors = ['red','blue'];
selectedColors[2] = 1; //only dynamic language can do
console.log(selectedColors);
console.log(selectedColors[1]); //take specific number by index


//------------------------------FUNCTION
function greet(name){ //name is parameter
    console.log("What's up "+name);
}
greet("John"); //John is argument

//Can't override function by this way
// function greet(name, lastName){
//     console.log("What's up "+name+' '+lastName);
// }
// greet('John','Smith');

function square(num){
    return num*num;
}
console.log(square(4));
