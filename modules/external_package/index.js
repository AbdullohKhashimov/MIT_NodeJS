// External package da tashqaridan npm orqali install qilinadigon librarylar

const moment = require("moment");

setInterval(() => {
    const time = moment().format("HH:mm:ss");
    console.log(time);
}, 2000);

// // inquirer() package
const inquirer = require("inquirer");
inquirer
    .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting?" }])
    .then((answer) => {
        console.log("man kiritgan raqam qiymate:", answer.raqam);
    })
    .catch((err) => console.log(err));

// validator() package used for mainly validating a client email etc.

const validator = require("validator");
const test = validator.isEmail("foo@bar.com");
const test2 = validator.isInt("100");
const test3 = validator.isIP("114.23.200.4");
console.log("test3:", test3);

// uuid() package
const { v4: uuid4 } = require("uuid");
setInterval(() => {
    const random = uuid4();
    console.log("random:", random);
}, 100000);
