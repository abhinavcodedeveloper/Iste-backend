const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 4444;
const { MONGOURI } = require("./keys");

mongoose.set("strictQuery", false); //to supress the warning which is being generated

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("conneted to mongo yeahh");
});
mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});

require("./models/softech")
app.use(express.json())
app.use(require("./routes/eventDesc"))

app.listen(PORT,()=>{
  console.log("app running on port"+PORT);
});