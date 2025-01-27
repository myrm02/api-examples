import express from 'express'
import cors from 'cors'
const bodyParser from 'body-parser'

const app = express();

app.use(cors());
app.use(express.json());
// Increase payload size limit to 100MB
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.post("/send", (req, res) => {
  res.json(req.body);
});
