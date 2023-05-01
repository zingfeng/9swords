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

function processing(
  moduleName: string,
  config: Record<string, any>,
  params: Record<string, any>
) {
  const module = getModule(moduleName);
  if (module) {
    const m = new module();
    (m as any) // https://github.com/Microsoft/TypeScript/issues/4881
      .run({
        params,
        config,
      });
  } else {
    console.log("Module not found");
    // processing help
  }
}

export const bootstrap = async () => {
  await sayHello();

  const args = process.argv;
  const { isValid, moduleName, config, params } = route(args);

  if (isValid) {
    processing(moduleName, config, params);
  } else {
    console.log("Invalid command");
    // processing help
  }
};
