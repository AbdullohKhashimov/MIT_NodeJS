const moment = require("moment");

class Account {
  #amount;
  #account_id;

  constructor(owner, amount, account_id, currency = "usd") {
    this.owner = owner;
    this.#amount = amount;
    this.#account_id = account_id;
    this.currency = currency;
  }

  check_balance() {
    console.log(
      `Dear customer ${this.owner} your account balance is ${this.#amount} ${
        this.currency
      }`
    );
    return this.#amount;
  }

  cash_out(a) {
    if (this.#amount > a) {
      this.#amount -= a;
      console.log(
        `Hisobingizdan ${a} ${this.currency} yechildi va qoldiq ${this.#amount}`
      );
    } else {
      console.log(
        `Sizning balansingizdagi mablag' yetarli emas: ${this.#amount}`
      );
    }
  }

  deposit(b) {
    this.#amount += b;
    console.log(
      `Hisobingiz ${b} ${this.currency} summa bn toldirildi. Hisobingiz ${
        this.#amount
      } ${this.currency} ni tashkil etdi! `
    );
  }

  get_details() {
    console.log(
      `Salom hurmatli ${this.owner} sizning balansingiz ${this.#amount} ${
        this.currency
      } ga teng.`
    );
    console.log(`Hisob raqamingiz ${this.#account_id}`);
  }

  static class_details() {
    console.log(`Bu class akkauntlar yasash uchun xizmat qiladi`);
  }

  static show_time() {
    console.log(`Hozirgi vaqt: ${moment().format("YY-MM-DD HH:mm")}`);
  }
}

module.exports = Account;
