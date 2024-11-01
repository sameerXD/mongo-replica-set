const mongoose = require("mongoose");


const primaryDbUri = process.env.DB_URI;
const secondaryDbUri = process.env.DB_URI;

const primaryConnection = mongoose.createConnection(primaryDbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const secondaryConnection = mongoose.createConnection(secondaryDbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const commonSchema = new Schema({
  data: String,
});



const primaryCommonModel = primaryConnection.model("data", commonSchema);
const secondaryCommonModel = secondaryConnection.model("data", commonSchema);
module.exports = { primaryCommonModel, secondaryCommonModel };
