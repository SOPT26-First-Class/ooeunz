import express, { Application } from 'express';
import index from './routes/index';

const app: Application = express();
app.use('/', index);

app.listen(3000, () => console.log('Server is running'));
