// variables

var a: // declarando variable
var b = 'b'; // declarando y asignando variable
b = 'bb'; // reasignando variable
var a = 'aa'; // redeclarando variable

// Global Scope

var fruit = 'apple'; // Gloabl
console.log(fruit);

function bestFruit() {
    console.log(fruit); 
}

bestFruit();
