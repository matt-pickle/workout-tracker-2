const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(
DATABASE_URL,
  		{useNewUrlParser: true, useUnifiedTopology: true} 
).catch(error => console.error("MongoDB connection error: " + error.message));
mongoose.connection.on("connected", () => console.log(`connected to MongoDB at ${DATABASE_URL}`));

app.listen(PORT, () => {
console.log(`test-backend is running at port ${PORT}`);
});
