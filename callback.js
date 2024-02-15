console.log("Jack Ma advices");
const list = [
  "be a good student!", // 0-20
  "choose the righ boss and make lots of mistakes", // 20-30
  "start working on yourself for yourself", // 30-40
  "focus on what you are good at", // 40-50
  "invest in young generation", //50-60
  "retire and relax", // 60---
];

// define qismi
function giveAdvice(age, myFunc) {
  if (typeof age !== "number") myFunc("Please insert a number", null);
  else if (age <= 20) myFunc(null, list[0]);
  //   else if (age > 20 && age <= 30) myFunc(null, list[1]);
  //   else if (age > 30 && age <= 40) myFunc(null, list[2]);
  //   else if (age > 40 && age <= 50) myFunc(null, list[3]);
  else {
    setTimeout(() => {
      myFunc(null, list[3]);
    }, 3000);
  }
}
// callbackni parametr sifatida function ishga tushadi
console.log("Passed here: A");
// call qismi
giveAdvice(41, (err, data) => {
  console.log("Passed here: C");
  if (err) console.log("Error:", err);
  console.log("javob:", data);
});

console.log("Passed here: B");

// function 1
// function 2
// function 3
// function 4
// function
