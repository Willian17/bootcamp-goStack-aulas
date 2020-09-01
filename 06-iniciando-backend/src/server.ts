import 'reflect-metadata'
import express from 'express';
import routes from './routes';

import './database'
import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use(routes);
routes.use('/files' , express.static(uploadConfig.directory))


const porta = 3333
app.listen(porta, () => console.log(`🚀️ Server listening of port ${porta}!`));
