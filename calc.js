function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    if (num1 < num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    return (num1 - num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function multiply(num1, num2) {
   return (num1 * num2);
}

function calculate(num1, num2, fn) {
    return (fn(num1, num2));
}

//examples

let one = 47;
let two = 32;

console.log(add(one, two));
console.log(subtract(one, two));
console.log(divide(one, two));
console.log(multiply(one, two));
console.log(calculate(one, two, add));