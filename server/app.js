const express = require('express');
const app = express();

const port = 8000;
const router = require('./router');

const cors = require('cors');  // чтобы не было ошибки cors
const corsOption = {
  origin: ['http://localhost:8000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}

app.use(cors(corsOption))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(cors())

app.use('/', router.mainRouter);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})