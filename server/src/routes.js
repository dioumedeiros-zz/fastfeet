import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import DeliverymanController from './app/controllers/DeliverymanController';
import OrderController from './app/controllers/OrderController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.post('/deliverymans', DeliverymanController.store);
routes.post('/orders', OrderController.store);
routes.post('/recipients', RecipientController.store);
routes.post('/files', upload, FileController.store);

routes.get('/deliverymans', DeliverymanController.index);

routes.put('/deliveryman/:id', DeliverymanController.update);

routes.delete('/deliveryman/:id', DeliverymanController.delete);

export default routes;
