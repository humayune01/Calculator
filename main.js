import inquirer from 'inquirer';
import chalk from 'chalk';
let userInput = await inquirer.prompt([
    { name: 'first_number', type: 'number', message: 'Enter any number: ' },
    { name: 'second_number', type: 'number', message: 'Enter another number: ' },
    {
        name: 'operator',
        type: 'list',
        message: 'Choose any operation: ',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
if (userInput.operator === 'Addition') {
    console.log(chalk.blueBright(`Answer is : ${userInput.first_number + userInput.second_number}`));
}
else if (userInput.operator === 'Subtraction') {
    console.log(chalk.blueBright(`Answer is : ${userInput.first_number - userInput.second_number}`));
}
else if (userInput.operator === 'Multiplication') {
    console.log(chalk.blueBright(`Answer is : ${userInput.first_number * userInput.second_number}`));
}
else if (userInput.operator === 'Division') {
    console.log(chalk.blueBright(`Answer is : ${userInput.first_number / userInput.second_number}`));
}
else {
    console.log(chalk.red('Please select any operation.'));
}
