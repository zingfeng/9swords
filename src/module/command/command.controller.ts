import { Command } from "commander";

import { BaseController, Options, StepResult } from "../../core/common";

export type SubModule = "nginx" | "mysql" | "redis";
export interface CommandOption extends Options {
  config: {
    sub: SubModule;
  };
  params: {
    action: string;
    args?: string[];
  };
}

export class CommandController extends BaseController {
  public run(): StepResult {
    const program = new Command();

    program
      .option("-d, --debug", "output extra debugging")
      .option("-s, --small", "small pizza size")
      .option("-p, --pizza-type <type>", "flavour of pizza");

    program.parse(process.argv);

    const options = program.opts();
    console.log("options: %s", options);

    if (options.debug) console.log(options);
    console.log("pizza details:");
    if (options.small) console.log("- small pizza size");
    if (options.pizzaType) console.log(`- ${options.pizzaType}`);

    return {
      isSuccess: true,
    };
  }

  private nginx(params: CommandOption["params"]): StepResult {
    const { action, args } = params;

    switch (action) {
      case "start":
        console.log("start nginx");
        break;
      case "stop":
        console.log("stop nginx");
        break;
      case "restart":
        console.log("restart nginx");
        break;
      default:
        return {
          isSuccess: false,
        };
    }
    return {
      isSuccess: true,
    };
  }
}
