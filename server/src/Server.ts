import express from 'express';

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if('OPTIONS' === req.method) {
      res.sendStatus(200);
  } else {
      console.log(`${req.ip} ${req.method} ${req.url}`);
      next();
  }
});
// Handle POST requests that come in formatted as JSON
app.use(express.json())

app.get('/', (req, res ) => {
  res.send("Hello World");
});
app.listen(3000, '127.0.0.1', () => console.log('Server Running!!!'));
