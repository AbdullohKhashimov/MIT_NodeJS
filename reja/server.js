console.log("Web serverni boshlash");
const express = require("express");
const http = require("http");
const app = express();

// 1: Kirish kodlari
//middleware
app.use(express.static("public")); // bu har qanday browserdan kirib kelgan requestlar uchun public folder ochiq degan manoni anglatadi
app.use(express.json()); // bu operatsiya kirib kelayotgan json datani object holatiga ogirib beradi
app.use(express.urlencoded({ extended: true })); //HTML formdan request qilingan formlarni qabul qiladi

// 2: Session kodlari

// 3: View kodlari
app.set("views", "view"); // views folderni ichidan oqi degan mantiq
app.set("view engine", "ejs"); // ejs orqali front end yasaymiz backend ichida

// 4: Router kodlari
app.post("/create-item", function (req, res) {
  console.log(req.body);
  res.json({ test: "Success" }); // res.json() bu json shaklida malumotni qaytaradi
});

// get() ni database dan malumot olish va oqish uchun get ishlatamiz!
// post esa malumotni olib kelati va database ga uni yozadi.!
// req.body da datani qiymatini qaytaradi
app.get("/", function (req, res) {
  res.render("reja");
});

// Server quramiz
const server = http.createServer(app); // bir dona parameter qabul qiladi
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is successfully running on port ${PORT}, http://localhost:${PORT}`
  );
});
