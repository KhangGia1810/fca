const chalk = require("chalk");

module.exports.load = (data, option) => {
  console.log(chalk.hex('#33CCFF').bold(`${option} `) + data);
}

module.exports.error = (data, option) => {
  console.log(chalk.hex('#FF0000').bold(`${option} `) + data);
}
