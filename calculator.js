/**
 * Created by beelarr on 7/18/17.
 */

let first_number = document.querySelector('#number_one');
let second_number = document.querySelector('#number_two');
let add_button = document.querySelector('#addition');
let subtract_button = document.querySelector('#subtraction');
let multiply_button = document.querySelector('#multiplication');
let divide_button = document.querySelector('#division');
let solution = document.querySelector('#output');
console.log(first_number);


/*
 Create a function that multiplies two numbers
 passed in as arguments. Return the product.
 */
function addition (first_number, second_number) {
    let ans = +first_number + +second_number;
    solution.innerHTML = `<p>${ans}</p>`
    
}

/*
 Create a function that adds two numbers
 passed in as arguments. Return the sum.
 */
function subtraction (first_number, second_number) {
    let ans = first_number - second_number;
    solution.innerHTML = `<p>${ans}</p>`

}

/*
 Create a function that subtracts two numbers
 passed in as arguments. Return the difference.
 */

function multiplication (first_number, second_number) {
    let ans = first_number * second_number;
    solution.innerHTML = `<p>${ans}</p>`

}

/*
 Create a function that divides two numbers
 passed in as arguments. Return the quotient.
 */
function division (first_number, second_number) {
    let ans = first_number / second_number;
    solution.innerHTML = `<p>${ans}</p>`

}


/*
 Create a function that accepts three arguments.
 1. First number
 2. Second number
 3. A function that performs an operation on them

 Return the value of the operation.
 */

function do_math (first_number, second_number, operation) {
    operation(first_number, second_number)

}

add_button.addEventListener('click', function () {
    do_math(first_number.value, second_number.value, addition)

});

subtract_button.addEventListener('click', function () {
    do_math(first_number.value, second_number.value, subtraction)
});

multiply_button.addEventListener('click', function () {
    do_math(first_number.value, second_number.value, multiplication)
});

divide_button.addEventListener('click', function () {
    do_math(first_number.value, second_number.value, division)
});

