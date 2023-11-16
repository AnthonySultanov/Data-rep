const express = require('express');
const app = express();
const port = 4000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://anthony9324:kd2qYkT65zJ3Lq9z@lab7.nahklk5.mongodb.net/?retryWrites=true&w=majority");

  const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
  });

  const bookModel = mongoose.model('Bookssss', bookSchema);

  app.post('/api/books', async (req, res) => {
    console.log(req.body);

    await bookModel.create({
      title: req.body.title,
      cover: req.body.cover,
      author: req.body.author
    });

    res.send('Data Received');
  });

  app.get('/api/books', async (req, res) => {
    const data = await bookModel.find();
    res.json(data);
  });

  app.get('/api/book/:id', async (req, res) => {
    console.log(req.params.id);

    const data = await bookModel.findById(req.params.id);
    res.json(data);
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
