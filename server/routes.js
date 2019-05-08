import express from 'express';
import basicController from '../controllers/basicController';
import userController from '../controllers/userController';

const routes = express();

//Basic Controller
routes.get('/', basicController.get);

//User Controller
routes.post('/', userController.post);

export default routes
