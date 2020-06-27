// src/routes/index.ts
import { Router } from 'express';
import appointments from './appointments.routes';
import usersRouter from './user.routes';

const routes = Router();

routes.use('/appointments', appointments);
routes.use('/users', usersRouter);

export default routes;
