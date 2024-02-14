// setTimeout() => 2 ta parameter oladi 1- function 2- time

// setTimeout(function () {
//   console.log("Ishga tushdi!");
// }, 5000);

// // setInterval() => 2 ta parameter oladi 1- function 2- time to repeat the action

// let number = 0;
// setInterval(function () {
//   console.log("hisob", number);
//   number += 1;
// }, 2000);

// fs => file system

const fs = require("fs");
const data = fs.readFileSync("./core.txt", "utf8");
console.log(data);

console.log("-------------");

fs.writeFileSync("./core.txt", `${data} \n\t\t by Abu!`);
const new_data = fs.readFileSync("./core.txt", "utf8");
console.log(new_data);
