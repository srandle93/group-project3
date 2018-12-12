const express = require("express");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
