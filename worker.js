const chalk = require('chalk');
require('custom-env').env("training");
 
console.log(chalk.blue.bold('HELLO DOCKER'));
console.log(chalk.bgGreen.black(` ${process.env.FIRSTNAME} ${process.env.LASTNAME}`));