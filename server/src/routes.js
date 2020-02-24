import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import DeliverymanController from './app/controllers/DeliverymanController';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);
routes.post('/deliveryman', DeliverymanController.store);
// routes.use(authMiddleware);

export default routes;
