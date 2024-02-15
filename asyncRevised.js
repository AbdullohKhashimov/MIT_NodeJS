console.log("Jack Ma advices");
const list = [
  "be a good student!", // 0-20
  "choose the righ boss and make lots of mistakes", // 20-30
  "start working on yourself for yourself", // 30-40
  "focus on what you are good at", // 40-50
  "invest in young generation", //50-60
  "retire and relax", // 60---
];

// Define qismida async await ishlatish
/* async function getAdvice(age) {
  if (typeof age !== "number") throw new Error("Should be a number!");
  else if (age > 60) {
    resolve (list[5]);
  } else if (age > 50) {
    resolve (list[4]);
  } else if (age > 40) {
    resolve (list[3]);
  }
}
*/

// call qismida then/catch ishlatib
/* console.log("Passed A");
getAdvice(61)
  .then((answer) => {
    console.log("Passed: C");
    console.log("data:", answer);
  })
  .catch((err) => {
    console.log("error:", err);
  });

console.log("Passed: B"); */

// Define qismini asyn/await da tuzamiz!
/* async function getAdvise(age) {
  if (typeof age !== "number") throw new Error("Should be a number!");
  else if (age > 60) resolve (list[5]);
  else if (age > 50) resolve (list[4]);
  else if (age > 40) resolve (list[3]);
  else if (age > 30) resolve (list[2]);
  else if (age > 20) resolve (list[1]);
  else if (age <= 20) resolve (list[0]);
  else {
    setTimeout(() => {
      resolve (list[0]);
    }, 5000);
  }
} */

// call qismida ham async/await ni ishlatamiz
/* console.log("passed: A");
async function run() {
  try {
    console.log("passed: C");

    let answer = await getAdvise(19);
    console.log("anwer:", answer);
    console.log("------------");

    answer = await getAdvise(31);
    console.log("answer:", answer);
    console.log("------------");

    answer = await getAdvise(44);
    console.log("answer:", answer);
    console.log("------------");

    answer = await getAdvise(65);
    console.log("answer:", answer);
    console.log("------------");
  } catch (err) {
    console.log("error:", err);
  }
} */
/* console.log("passed: B");
run().then(); */

// !!! Async/await ishlatsak doim try/catch ishlatishimiz kerak!
// Qonuniyat NodeJS birinchi synchronous function larni ishga tushiradi
// Va undan keyin Asynchronous function larni ishga tushiradi!

// Define qismida promise bn ishlash
/* function getAdvise(age) {
  return new Promise((resolve, reject) => {
    if (typeof age !== "number") reject("Should be a number!");
    else if (age > 60) resolve(list[5]);
    else if (age > 50) resolve(list[4]);
    else if (age > 40) resolve(list[3]);
    else if (age > 30) resolve(list[2]);
    else if (age > 20) resolve(list[1]);
    else {
      setTimeout(() => {
        resolve(list[0]);
      }, 5000);
    }
  });
} */

// call qismida then/catch ishlatish
// Promise da setInterval faqat bir marta ishga tushadi

/* console.log("Passed: A");
getAdvise(10)
  .then((data) => {
    console.log("Passed: C");

    console.log("data:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

console.log("Passed: B"); */

// Defineda async/await ni ishlatib
async function getAdvise(age) {
  if (typeof age !== "number") throw new Error("Should be a number");
  else if (age > 60) return list[5];
  else if (age > 50) return list[4];
  else if (age > 40) return list[3];
  else if (age > 30) return list[2];
  else if (age > 20) return list[1];
}

// Call
async function run() {
  try {
    let answer = await getAdvise(35);
    console.log("answer:", answer);

    await delay(5000);

    answer = await getAdvise(45);
    console.log("answer:", answer);

    await delay(7000);

    answer = await getAdvise(75);
    console.log("answer:", answer);

    await delay(9000);
  } catch (err) {
    console.log("Error:", err);
  }
}

run().then();

// Promise delay function
const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
