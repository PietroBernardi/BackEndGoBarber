import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const usersController = new UsersController();
const usersAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticaded,
  upload.single('avatar'),
  usersAvatarController.update,
);

export default usersRouter;
