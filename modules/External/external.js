// moment() hozirgi vaqtni beradi
const moment = require("moment");

setInterval(() => {
  const time = moment().format("YY-MM-DD HH:mm:ss");
  console.log(`hozirgi vaqt => ${time}`);
}, 5000);

// inquirer() package

const inquirer = require("inquirer");
inquirer
  .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting!" }])
  .then((answer) => {
    console.log("kiritilgan raqam qiymati:", answer.raqam);
  })
  .catch((err) => {
    console.log("error:", err);
  });

// validator() package

const validator = require("validator");
const test = validator.isEmail("foo@bar.com");
console.log("test:", test);

const test2 = validator.isInt("100");
console.log(`test2 : ${test2}`);

const test3 = validator.isIP("0.0.0.0/0");
console.log(`Test3: ${test3}`);

// const dayjs = require("dayjs");
// dayjs()
//   .startOf("month")
//   .add(1, "day")
//   .set("year", 2020)
//   .format("YY-MM-DD HH:mm:ss");
