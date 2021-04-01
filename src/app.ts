import express, { Application } from 'express';
import router from './router';

const app: Application = express();

app.use(router);
app.get('/', (_, res) => res.send('hell world'));

export default app;
