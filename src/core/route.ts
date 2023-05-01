const route = (
  processArgv: string[]
): {
  isValid: boolean;
  moduleName: string;
  config: Record<string, any>;
  params: Record<string, any>;
} => {
  const args = Object.values(processArgv);

  let moduleName: string = "";
  let config: Record<string, any> = {};
  let params: Record<string, any> = {};

  let indexParamsStart = 500;

  for (let index = 0; index < args.length; index++) {
    const val = args[index];
    if (index >= indexParamsStart) {
      if (val.substr(0, 1) === "-") {
        // get config
        const m = val.substr(1);
        if (m.indexOf("=") !== -1) {
          const equalPosition = m.indexOf("=");
          const configName = m.substr(0, equalPosition);
          const configValue = m.substr(equalPosition + 1);
          config[configName] = configValue;
        } else {
          config[m] = "";
        }
      } else {
        // get module name
        if (!moduleName) {
          moduleName = val;
          continue;
        }

        // get params
        const m = val;
        if (m.indexOf("=") !== -1) {
          const equalPosition = m.indexOf("=");
          const paramName = m.substr(0, equalPosition);
          const paramValue = m.substr(equalPosition + 1);
          params[paramName] = paramValue;
        } else {
          params[m] = "";
        }
      }
    } else {
      if (val.includes("index.js")) {
        indexParamsStart = index + 1;
      }
    }
  }
  return {
    isValid: moduleName !== "",
    moduleName: moduleName,
    config: config,
    params: params,
  };
};

export { route };
