require("dotenv").config();

//local modules
const app = require("./app");
const connectDB = require("./config/connectDb");

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(process.env.PORT, () =>
      console.log(`server running on ${process.env.PORT}`)
    );
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
