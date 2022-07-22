const chalk = require("chalk");
module.exports = (data, option) => {
  switch (option) {
    case "error": {
      console.log(chalk.hex('#FF0000').bold(`${option || "[ ERROR ]"} `) + data);
    }
    break;
    case "load": {
      console.log(chalk.hex('#33CCFF').bold(`${option || "[ FCA ]"} `) + data);
    }
    break;
    default: {
      console.log(chalk.hex('#33CCFF').bold(`${option || "[ FCA ]"} `) + data);
    }
    break;
  }
}
module.exports.load = (data, option) => {
  console.log(chalk.hex('#33CCFF').bold(`${option || "[ FCA ]"} `) + data);
}
module.exports.error = (data, option) => {
  console.log(chalk.hex('#FF0000').bold(`${option || "[ ERROR ]"} `) + data);
}
