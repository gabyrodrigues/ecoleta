import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors()) //cors: quais urls web vão ter acesso a API
app.use(express.json());
app.use(routes);

//acessar os arquivos da pasta uploads
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);