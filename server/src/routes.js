import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import DeliverymanController from './app/controllers/DeliverymanController';
import OrderController from './app/controllers/OrderController';
import RecipientController from './app/controllers/RecipientController';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);
routes.post('/deliverymans', DeliverymanController.store);
routes.post('/orders', OrderController.store);
routes.post('/recipients', RecipientController.store);
// routes.use(authMiddleware);

export default routes;
