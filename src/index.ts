// const figlet = require("figlet");
// const { program } = require("commander");
// const { sayHello } = require("./src/base/hello");

import { sayHello } from "./base/hello";

sayHello();

const start = () => {
  console.log("Hello from 9swords!");

  // program.option("--first").option("-s, --separator <char>");

  // program.parse();

  // const options = program.opts();
  // console.log(options);
  // const limit = options.first ? 1 : undefined;
  // console.log(program.args[0].split(options.separator, limit));
};
