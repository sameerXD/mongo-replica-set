const express = require("express");
const { primaryCommonModel, secondaryCommonModel } = require("./db");

const app = express();

app.use(express.json());

app.post("/user", async (req, res) => {
  const { data } = req.body;
  const postUser = await primaryCommonModel.create({data});
  res.send(postUser);
});

app.delete("/user", async (req, res) => {
  const { data } = req.body;
  const postUser = await primaryCommonModel.findOneAndDelete({data});
  res.send(postUser);
});

app.get("/user", async (req, res) => {
  const getUsers = await secondaryCommonModel.find();
  return res.send(getUsers);
});
app.listen(3001, () => {
  console.log(`db client is up!`);
});
