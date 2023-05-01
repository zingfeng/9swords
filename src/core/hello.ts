import figlet from "figlet";
import { common } from "../config";

const sayHello = async () => {
  figlet(`      ${common.name}\n----------`, (err, data) => {
    if (err) {
      return;
    }
    console.log(data);
    console.log(`         Author: ${common.author}`);
  });
};

export { sayHello };
