const readline = require('readline-sync');

let operations = ['+', '-', '*', '/'];
let index = null;
let operator = null;
let firstNumber = 0;
let secondUmber = 0;

function operationQuestion(){
    operator = readline.question('What operatn would you like to perform?'
    + '\nOptions:'
    + '\nSum ('+ operations[0]+ ')'
    + '\nSubtraction ('+ operations[1]+ ')'
    + '\nMultiplication ('+ operations[2]+ ')'
    + '\nDivision ('+ operations[3]+ ')\n'
    );

    if (!operations.includes(operator)) {
        console.log('That is not a valid operation');
        operationQuestion();
    }

    firstNumber = readline.questionInt('Input the first number: ');
    secondUmber = readline.questionInt('Input the second number: ');

    switch(operator){
        case '+':
            console.log('The result of '+firstNumber+operator+secondUmber+ ' = '+ (firstNumber + secondUmber));
            break;
        case '-':
            console.log('The result of '+firstNumber+operator+secondUmber+ ' = '+ (firstNumber - secondUmber));
            break;
        case '*':
            console.log('The result of '+firstNumber+operator+secondUmber+ ' = '+ (firstNumber * secondUmber));
            break;
        case '/':
            console.log('The result of '+firstNumber+operator+secondUmber+ ' = '+ (firstNumber / secondUmber).toFixed(2));
            break;
        default:
            console.log("Something went wrong.... Try again");
    }
}

operationQuestion();

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question("What is your name? ", function(answer, name){
//     console.log(`Oh, so your name is ${answer} ${name}`);
//     console.log('Closing the interface');
//     rl.close();
// });

// const addition = function(a, b){
//     a = parseFloat(a)
//     b = parseFloat(b)
//     return a + b;
// }
// const subtraction = function(a, b){
//     a = parseFloat(a)
//     b = parseFloat(b)
//     let sum = a - b;
//     return -sum;
// }
// const multiplication = function(a, b){
//     a = parseFloat(a)
//     b = parseFloat(b)
//     return a * b;
// }
// const division = function(a, b){
//     a = parseFloat(a)
//     b = parseFloat(b)
//     return a/b;
// }
