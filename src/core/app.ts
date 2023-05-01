import { CommandModule } from "../module/command";
import { sayHello } from "./hello";
import { route } from "./route";

const loadModule = () => {
  return [CommandModule];
};

const getModule = (moduleName: string) => {
  const modules = loadModule();
  return modules.filter(
    (module) => (module as any).moduleName === moduleName
  )[0];
};

function processing(moduleName: string) {
  const module = getModule(moduleName);
  if (module) {
    const m = new module();
    (m as any) // https://github.com/Microsoft/TypeScript/issues/4881
      .run();
  } else {
    console.log("Module not found");
    // processing help
  }
}

export const bootstrap = async () => {
  await sayHello(() => {
    const args = process.argv;
    const { isValid, moduleName } = route(args);

    if (isValid) {
      processing(moduleName);
    } else {
      console.log("Invalid command");
      // processing help
    }
  });
};
