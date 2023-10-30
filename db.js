const mongoose = require("mongoose");

const url =
  "mongodb+srv://quoraapp:quora-app@cluster0.f7zmi8a.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
