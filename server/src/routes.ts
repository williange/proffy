import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import StudentsController from './controllers/StudentsController';

import { auth } from './middleware/auth'

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();
const studentesController = new StudentsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

routes.post('/signup', studentesController.create);
routes.post('/login', studentesController.login);

routes.use(auth);

routes.get('/users', studentesController.index);

export default routes;