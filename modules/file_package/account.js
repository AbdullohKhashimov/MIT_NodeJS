const moment = require("moment");

class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    showBalance() {
        console.log(`Your estimated balance is: ${this.#amount}`);
        return this.#amount;
    }

    cashout(amount) {
        if (this.#amount > amount) {
            this.#amount -= amount;
            console.log(
                `${amount}$ amount has been withdrawn from your account. Your remaining balance is: ${
                    this.#amount
                }`
            );
        } else {
            console.log(`You have insufficient balance: ${this.#amount}`);
        }
    }

    deposit(cash) {
        this.#amount += cash;
        console.log(
            `${cash}$ has been deposited into your account. \n\t Balance after deposit: ${
                this.#amount
            }$ `
        );
    }

    showMeDetails() {
        console.log(
            `Hi dear, ${this.name} your current balance is:${this.#amount}$`
        );
        console.log(`Your account id is: ${this.#account_id}`);
    }

    static classDetails() {
        console.log(`This class will serve us to create multiple accounts!`);
    }

    static time() {
        console.log(
            `The current time is: ${moment().format("YY MM DD HH:mm:ss")}`
        );
    }
}

module.exports = Account;
