const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const goalCollection = client.db('startup').collection('goals');

function addGoal(goal) {
  goalCollection.insertOne(goal);
}

function getGoals() {
  const query = {goal: {$gt: 0}};
  const cursor = goalCollection.find(query);
  return cursor.toArray();
}

module.exports = {addGoal, getGoals};
