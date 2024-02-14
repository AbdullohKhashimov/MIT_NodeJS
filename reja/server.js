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
app.set("views", "views"); // views folderni ichidan oqi degan mantiq
app.set("view engine", "ejs"); // ejs orqali front end yasaymiz backend ichida

// 4: Router kodlari
app.get("/", function (req, res) {
  res.end("<h1>Hello World</h1>");
});

app.get("/gifts", function (req, res) {
  res.end(`<h1>Sovg'alar bo'limiga xush kelibsz!</h1>`);
});

// Server quramiz
const server = http.createServer(app); // bir dona parameter qabul qiladi
let PORT = 4000;
server.listen(PORT, function () {
  console.log(
    `The server is successfully running on port ${PORT}, http://localhost:${PORT}`
  );
});
