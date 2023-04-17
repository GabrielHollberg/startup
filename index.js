const express = require("express");
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/goals', async (_req, res) => {
  const goals = await DB.getGoals();
  res.send(goals);
});

apiRouter.post('/goal', async (req, res) => {
  DB.addGoal(req.body);
  const goals = await DB.getGoals();
  res.send(goals);
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});