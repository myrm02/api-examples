import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.post("/send", (req, res) => {
  res.json(req.body);
});
