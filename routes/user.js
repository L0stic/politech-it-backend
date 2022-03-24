import express from 'express';
import userController from '../controllers/user.js';

const userRouter = express.Router();

userRouter.route('/sign_up')
    .post(userController.addUser);

userRouter.route('/:login')
    .put(userController.updateUser);

userRouter.route('/:login')
    .delete(userController.removeUser);


userRouter.route('/')
    .get(userController.getUsers);

userRouter.route('/:login')
    .get(userController.getUserByLogin);


// userRouter.route('/sign_in')
//     .get(userController.signIn);

export default userRouter;
