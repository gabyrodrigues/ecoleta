import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

//listagem de items
routes.get('/items', itemsController.index);

//cadastro de pontos de coleta
routes.post('/points', pointsController.create);
//listagem de ponto específico
routes.get('/points/:id', pointsController.show);

export default routes;