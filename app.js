const app = require("express")();

// alternative ways

//command too start nodemon aap.js | command to rum in terminal npm run(it help to save code automatically )

app.get("/", (req, res) => {
  res.send({
    message: "It home page.....",
  });
});
app.get("/sagar/", (req, res) => {
  res.send({
    message: "sagar",
  });
});
app.listen(4100, (req, res) => {
  console.log(" its running on port 4100");
});
