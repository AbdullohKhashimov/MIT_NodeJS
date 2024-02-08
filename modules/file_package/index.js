// file package da biz bir fayl ichida kodlarni yozib olamiz va u faylni qayerda ishlatmoqchi bolsak osha yerga import qilib olib ishlata olishimiz mumkun.
// const calculate = require("./hisob");
const Account = require("./account");

// const natija = calculate.kopaytirish(9, 8);
// console.log("natija:", natija);

// const natija2 = calculate.bolish(72, 9);
// console.log("natija2:", natija2);

// const natija3 = calculate.qoshish(90, 35);
// console.log("natija3:", natija3);

// const natija4 = calculate.ayrish(100, 43);
// console.log("natija4:", natija4);

// console.log(arguments);

// // classdagi Static methodlarni chaqirdik
// Account.time();
// Account.classDetails();

const myAccount = new Account("Tony", 20000, 2017105562);
myAccount.showMeDetails();
myAccount.deposit(2000);
