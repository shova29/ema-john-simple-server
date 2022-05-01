const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ydrjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
  } finally {
  }
}

run().catch(console.dir);
/* client.connect((err) => {
  const collection = client.db("emaJohn").collection("product");
  // perform actions on the collection object
  console.log("Mongodb is connected");
  client.close();
} */

app.get("/", (req, res) => {
  res.send("Ema-John Server is running");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
