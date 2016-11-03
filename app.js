const Express = require('express');
const app = Express();
const redis = require('redis');
const redisClient = redis.createClient();

const kue = require('kue');
kue.createQueue();
app.use('/api', kue.app);


app.get('/redis/hset/bad', (req, res) => {
  redisClient.hset('strong-agent', 'status', 'fails'); // not providing callback
  res.send('Hello World!');
});


app.get('/redis/hset/good', (req, res) => {
  redisClient.hset('strong-agent', 'status', 'fails', () => {});
  res.send('Hello World!');
});


app.listen(3000, () => {
  console.log('Queue HTTP API listening at: %s', 3000);
});
