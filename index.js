import express from "express";
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));             

let messages = [];

app.get("/", (req, res) => {
  res.render("index", { messages });
});

app.post("/submit", (req, res) => {
  const { name, message } = req.body;
  if (name && message) {
    messages.push({ name, message });
  }
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.send("<h1>O projekcie</h1><p>Ksiazka gosci uzywajaca Express.</p>");
});

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
