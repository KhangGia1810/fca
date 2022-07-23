const chalk = require("chalk");

module.exports = (data, option) => {
  switch (option) {
    case "error": {
      console.log(chalk.hex('#FF0000').bold(`[ ERROR ] `) + data);
    }
    break;
    case "load": {
      console.log(chalk.hex('#33CCFF').bold(`[ INFO ] `) + data);
    }
    break;
    case "warn": {
      console.log(chalk.hex('#FF6600').bold(`[ WARN ] `) + data);
    }
    break;
    default: {
      console.log(chalk.hex('#33CCFF').bold(`${option || "[ FCA ]"} `) + data);
    }
    break;
  }
}
module.exports.load = (data, option) => {
  console.log(chalk.hex('#33CCFF').bold(`${option || "[ INFO ]"} `) + data);
}
module.exports.warn = (data, option) => {
  console.log(chalk.hex('#FF6600').bold(`${option || "[ WARN ]"} `) + data);
}
module.exports.error = (data, option) => {
  console.log(chalk.hex('#FF0000').bold(`${option || "[ ERROR ]"} `) + data);
}
