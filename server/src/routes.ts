import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';

import { authMiddleware } from './middleware/auth'

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();

routes.post('/api/signup', usersController.signUp);
routes.post('/api/login', usersController.signIn);

routes.get('/api/connections', authMiddleware, connectionsController.index);
routes.post('/api/connections', authMiddleware, connectionsController.create);

routes.get('/api/classes', authMiddleware, classesControllers.index);
routes.post('/api/classes', authMiddleware, classesControllers.create);

routes.get('/api/users', authMiddleware, usersController.index);

export default routes;