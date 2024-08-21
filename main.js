#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    { message: "select one of the operators to perform operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "exponentiation", "modulus"],
    },
]);
// conditional statement 
if (answer.operator === "addition") {
    console.log(chalk.green(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "subtraction") {
    console.log(chalk.blue(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "multiplication") {
    console.log(chalk.yellow(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "division") {
    console.log(chalk.red(answer.firstNumber / answer.secondNumber));
}
else if (answer.operator === "exponentiation") {
    console.log(chalk.white(answer.firstNumber ** answer.secondNumber));
}
else if (answer.operator === "modulus") {
    console.log(chalk.grey(answer.firstNumber % answer.secondNumber));
}
else {
    console.log("please select valid operator");
}
