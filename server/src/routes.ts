import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import StudentsController from './controllers/StudentsController';

import { authMiddleware } from './middleware/auth'

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();
const studentesController = new StudentsController();

routes.post('/signup', studentesController.create);
routes.post('/login', studentesController.login);

routes.get('/api/connections', authMiddleware, connectionsController.index);
routes.post('/api/connections', authMiddleware, connectionsController.create);

routes.get('/api/classes', authMiddleware, classesControllers.index);
routes.post('/api/classes', authMiddleware, classesControllers.create);

routes.get('/users', authMiddleware, studentesController.index);

export default routes;