import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes';
const app = express();
app.use(bodyParser.json())
mongoose.promise = global.promise;

mongoose.connect('mongodb://localhost:27017/data', { useNewUrlParser: true }, () => {
  console.log('Connected to DB')
})


app.use('/api', routes);

export default app;
