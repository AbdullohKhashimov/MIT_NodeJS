// Core package bu NodeJS ni install qilganda ozi bilan birga keladigon methodlar bor turli hil:
/**Masalan:
 * setInterval()
 * setTimeout()
 * https()
 * require()
 * URL()
 * OS()
 * events
 * and so on.
 */
// core package ni install emas balki require() qilib olamiz

const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);

fs.writeFileSync("./input.txt", `${data} \n\t\t by Tony`);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);

// setTimeout(function () {
//     console.log("Ishga tushdi");
// }, 5000);

// let num = 0;
// setInterval(function () {
//     console.log("count", num);
//     num++;
// }, 1000);
