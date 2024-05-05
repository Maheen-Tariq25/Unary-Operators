#! /usr/bin/env node
import inquirer from "inquirer";

const input1 = await inquirer.prompt([{

    name: "num1",
    type: "number",
    message: "Enter a first number"},
]);

const input2 = await inquirer.prompt([{

    name: "num2",
    type: "number",
    message: "Enter a second number"},
]);
const division = input1.num1 % input2.num2;
console.log(division);

const multiplication = input1.num1 * input2.num2;
console.log(multiplication);

const subtraction = input1.num1 - input2.num2;
console.log(subtraction);

const addition = input1.num1 + input2.num2;
console.log(addition);