import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

//listagem de items
routes.get('/items', itemsController.index);

//cadastro de pontos de coleta
routes.post('/points', upload.single('image'), pointsController.create);
//listagem de pontos filtrados por cidade, estado e itens
routes.get('/points', pointsController.index);
//listagem de ponto específico
routes.get('/points/:id', pointsController.show);

export default routes;