console.log("Jack Ma advices");
const list = [
  "be a good student!", // 0-20
  "choose the righ boss and make lots of mistakes", // 20-30
  "start working on yourself for yourself", // 30-40
  "focus on what you are good at", // 40-50
  "invest in young generation", //50-60
  "retire and relax", // 60---
];

// define qismini asynchronous function bilan qurdik
async function giveAdvice(age) {
  if (typeof age !== "number") throw new Error("Please insert a number");
  else if (age <= 20) return list[0];
  else if (age > 20 && age <= 30) return list[1];
  else if (age > 30 && age <= 40) return list[2];
  else if (age > 40 && age <= 50) return list[3];
  else {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(list[5]);
    //   }, 3000);
    // });
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(list[5]);
      }, 1000);
    });

    //     setTimeout(() => {
    //       return list[2];
    //     }, 3000);
  }
}

// call qismida then va catch operatorlaridan foydalandik
// console.log("Passed here: A");
// giveAdvice(35)
//   .then((data) => {
//     console.log("Passed here: C");
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

// console.log("Passed here: B");
// .then() .catch() bilan setTimeout() va setInterval() lar ishlamedi!

// call qismini ham asynchronous function bilan qurish!
// maydoncha yaratib berish uchun xizmat qiladi
console.log("Passed here: A");
async function run() {
  let answer = await giveAdvice(62);
  console.log("Javob1:", answer);

  //   answer = await giveAdvice(41);
  //   console.log("Javob2:", answer);
}
console.log("Passed here: B");

run();
