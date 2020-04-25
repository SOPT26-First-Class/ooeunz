import express, { Application } from 'express';

const app: Application = express();

import index from './routes/index';
app.use('/', index);

app.listen(3000, () => console.log('Server is running'));
