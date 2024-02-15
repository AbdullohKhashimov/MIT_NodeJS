// define part
// const qoldiqniTopish = (a, b, callback) => {
//   if (b === 0) {
//     callback("Mahraj nolga teng bololmaydi", null);
//     //   } else {
//     //     const c = a % b;
//     //     callback(null, c);
//     //   }
//   } else {
//     setTimeout(() => {
//       const c = a % b;
//       callback(null, c);
//     }, 3000);
//   }
// };

// // call part
// console.log("Passed here: A");
// qoldiqniTopish(7, 5, (err, data) => {
//   if (err) console.log("err:", err);
//   else {
//     console.log("Passed here: C");
//     console.log("data:", data);
//   }
// });
// console.log("Passed here: B");

// Callback -> bular shartli asynchronous function deyiladi
// chunki callbacklar tayyor bolgan javobni ushlab otirmasdan javobni chqarb yuboradi

// execution process:
// 1: Passed here: A
// 2: Passed here: B
// 3: Callback

/**
 *                formula
 * Define:                                      Call:
 *callback                                      callback
 *
 * async/await | promise                         then/catch
 * async/await | promise                         async/await
 */
// Callback function ishlatilgan vaqtda -> define qismida ham call qismida ham bir hil mantiq ishlatiladi. ikkalasi bir biriga boglangan

const list = [
  "be a good student!", // 0-20
  "choose the righ boss and make lots of mistakes", // 20-30
  "start working on yourself for yourself", // 30-40
  "focus on what you are good at", // 40-50
  "invest in young generation", //50-60
  "retire and relax", // 60---
];

function giveAdvice(age, myFunc) {
  if (typeof age !== "number") myFunc("Please insert a number", null);
  else if (age > 20) myFunc(null, list[0]);
  else if (age > 20 && age <= 30) myFunc(null, list[1]);
  else if (age > 30 && age <= 40) myFunc(null, list[2]);
  else if (age > 40 && age <= 50) myFunc(null, list[3]);
  else {
    setInterval(() => {
      myFunc(null, list[0]);
    }, 5000);
  }
}
console.log("Passed: A");
giveAdvice(0, (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    console.log("Passed: C");
    console.log("Javob:", data);
  }
});
console.log("Passed: B");

// callback ni hususiyati bu ketma ket javob bera olish hususiyatiga ega. Qachon usha callbackni mantiqi trigger qilinsa u bizga malumotni yuboraveradi!
