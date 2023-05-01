import figlet from "figlet";

const sayHello = async () => {
  figlet("      9 swords\n----------", (err, data) => {
    if (err) {
      return;
    }
    console.log(data);
  });
};

export { sayHello };
