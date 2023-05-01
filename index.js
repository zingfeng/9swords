#!/usr/bin/env node

const figlet = require("figlet");

const start = () => {
  console.log("Hello from 9swords!");
};

figlet("      9 swords\n----------", (err, data) => {
  if (err) {
    return;
  }
  console.log(data);
  start();
});
