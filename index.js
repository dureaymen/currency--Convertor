import inquirer from "inquirer";
const currencey = {
    USD: 1, //base currencey
    IND: 74.4,
    EUR: 0.12,
    PAK: 200,
    GBP: 0.81,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currencey",
        type: "list",
        choices: ["USD", "IND", "EUR", "PAK", "GBP"]
    },
    {
        name: "to",
        message: "enter to currencey",
        type: "list",
        choices: ["USD", "IND", "EUR", "PAK", "GBP"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    }
]);
let fromAmount = currencey[userAnswer.from];
let toAmount = currencey[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount / toAmount;
console.log(convertAmount);
