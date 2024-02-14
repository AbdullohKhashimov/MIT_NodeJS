const calc = require("./hisob");

const result = calc.ayrish(20, 7);
console.log("natija1:", result);
console.log("-----------");

const result2 = calc.qoshish(34, 98);
console.log("natija2:", result2);
console.log("------------");

const result3 = calc.kopaytirish(34, 98);
console.log("natija2:", result3);
console.log("------------");

// console.log(require("module").wrapper);

// console.log(arguments);

// class file ni import qilish
const account = require("./account");

// account class yordamida yangi object qurish
const new_acc = new account("Tony", 2000, 2017105562);
console.log(new_acc);
new_acc.cash_out(500);
new_acc.get_details();
new_acc.deposit(1500);

// Classdagi static methodlarni chaqirish

account.class_details();
account.show_time();
